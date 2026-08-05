/**
 * Live 10-day trip forecast — Open-Meteo, no API key, no build step.
 *
 * Everything here runs in the visitor's browser at page load, so the
 * numbers are always current without anyone committing or redeploying.
 * The only cost is one HTTP request per hour per device (results are
 * cached in localStorage between).
 *
 * The clever bit: rather than one forecast for "the trip", we look up
 * where the family will actually BE on each itinerary day (the first
 * attraction of that day, falling back to the base) and ask Open-Meteo
 * for all of those places in a single batched request — so the Söll day
 * shows Söll's weather and the Munich days show Munich's.
 *
 * Forecast horizon: Open-Meteo publishes ~16 days ahead. Trip days
 * beyond that simply have no entry yet; the UI says so rather than
 * inventing a number.
 */

import { itinerary } from "../data/itinerary";
import { getAttraction } from "../data/attractions";
import type { Day } from "../data/types";

/** Base (Aparthotel Stacherhof, Fügen) — the fallback for any day whose
 *  activities carry no mappable attraction. */
const BASE_COORDS: [number, number] = [47.3311, 11.8576];

export interface DayForecast {
  /** Local ISO date, YYYY-MM-DD. */
  date: string;
  tMax: number;
  tMin: number;
  /** WMO weather code — drives the icon. */
  code: number;
  /** Max chance of precipitation across the day, %. */
  precipProb: number | null;
  /** Total precipitation, mm. */
  precipMm: number | null;
  /** Max wind speed, km/h. */
  windMax: number | null;
}

export interface TripDayForecast {
  dayNumber: number;
  date: string;
  /** English fallback label for where this reading is for. */
  place: string;
  /** The attraction this reading belongs to, so the UI can show the
   *  Hebrew name when the site is in Hebrew. */
  attractionId?: string;
  /** Null until the date comes inside Open-Meteo's ~16-day horizon. */
  forecast: DayForecast | null;
}

export interface ForecastResult {
  days: TripDayForecast[];
  /** When these numbers were fetched (epoch ms). */
  fetchedAt: number;
}

/* ------------------------------------------------------------------ */
/* Which place represents each itinerary day                           */
/* ------------------------------------------------------------------ */

function placeForDay(day: Day): {
  coords: [number, number];
  place: string;
  attractionId?: string;
} {
  for (const a of day.activities) {
    if (!a.attractionId) continue;
    const att = getAttraction(a.attractionId);
    if (att?.coords) {
      return { coords: att.coords, place: att.name, attractionId: att.id };
    }
  }
  return { coords: BASE_COORDS, place: "Fügen" };
}

/* ------------------------------------------------------------------ */
/* Fetch                                                               */
/* ------------------------------------------------------------------ */

// v2: the cached shape gained `attractionId`, so old caches must be dropped
const CACHE_KEY = "austria26-trip-forecast-v2";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function round(n: unknown): number {
  return Math.round(Number(n));
}

/** Open-Meteo returns an object for one location and an array for many. */
function asList(json: unknown): Record<string, unknown>[] {
  if (Array.isArray(json)) return json as Record<string, unknown>[];
  return [json as Record<string, unknown>];
}

export async function fetchTripForecast(
  opts: { force?: boolean } = {}
): Promise<ForecastResult | null> {
  if (!opts.force) {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ForecastResult;
        if (Date.now() - parsed.fetchedAt < CACHE_TTL_MS) return parsed;
      }
    } catch {
      /* corrupt cache — just refetch */
    }
  }

  // One request for every distinct place, in itinerary order.
  const perDay = itinerary.map(d => ({ day: d, ...placeForDay(d) }));
  const uniqueKeys: string[] = [];
  const uniqueCoords: [number, number][] = [];
  for (const p of perDay) {
    const key = `${p.coords[0].toFixed(4)},${p.coords[1].toFixed(4)}`;
    if (!uniqueKeys.includes(key)) {
      uniqueKeys.push(key);
      uniqueCoords.push(p.coords);
    }
  }

  const lats = uniqueCoords.map(c => c[0]).join(",");
  const lons = uniqueCoords.map(c => c[1]).join(",");
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,` +
    `precipitation_probability_max,precipitation_sum,wind_speed_10m_max` +
    `&timezone=Europe%2FVienna&forecast_days=16`;

  let payload: Record<string, unknown>[];
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    payload = asList(await res.json());
  } catch {
    return null;
  }

  // date -> forecast, per unique location key
  const byLocation = new Map<string, Map<string, DayForecast>>();
  payload.forEach((entry, i) => {
    const daily = entry?.daily as Record<string, unknown[]> | undefined;
    const times = (daily?.time ?? []) as string[];
    const map = new Map<string, DayForecast>();
    times.forEach((date, j) => {
      const prob = daily?.precipitation_probability_max?.[j];
      const mm = daily?.precipitation_sum?.[j];
      const wind = daily?.wind_speed_10m_max?.[j];
      map.set(date, {
        date,
        tMax: round(daily?.temperature_2m_max?.[j]),
        tMin: round(daily?.temperature_2m_min?.[j]),
        code: Number(daily?.weather_code?.[j] ?? 0),
        precipProb: prob == null ? null : round(prob),
        precipMm: mm == null ? null : Math.round(Number(mm) * 10) / 10,
        windMax: wind == null ? null : round(wind)
      });
    });
    const key = uniqueKeys[i];
    if (key) byLocation.set(key, map);
  });

  const days: TripDayForecast[] = perDay.map(p => {
    const key = `${p.coords[0].toFixed(4)},${p.coords[1].toFixed(4)}`;
    return {
      dayNumber: p.day.dayNumber,
      date: p.day.date,
      place: p.place,
      attractionId: p.attractionId,
      forecast: byLocation.get(key)?.get(p.day.date) ?? null
    };
  });

  const result: ForecastResult = { days, fetchedAt: Date.now() };
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
  } catch {
    /* private mode — fine, we just refetch next load */
  }
  return result;
}

/* ------------------------------------------------------------------ */
/* WMO code → plain meaning                                            */
/* ------------------------------------------------------------------ */

export type SkyKind = "clear" | "partly" | "cloud" | "fog" | "rain" | "storm" | "snow";

export function skyKind(code: number): SkyKind {
  if (code === 0) return "clear";
  if (code <= 2) return "partly";
  if (code === 3) return "cloud";
  if (code === 45 || code === 48) return "fog";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 85 && code <= 86) return "snow";
  if (code >= 95) return "storm";
  return "rain";
}

/** How many whole days from today until `date` (local). Negative = past. */
export function daysUntil(date: string, now: Date = new Date()): number {
  const [y, m, d] = date.split("-").map(Number);
  const target = new Date(y, (m ?? 1) - 1, d ?? 1).getTime();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((target - today) / 86_400_000);
}
