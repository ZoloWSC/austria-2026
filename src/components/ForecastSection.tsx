import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  Droplets,
  Wind,
  RefreshCw,
  Loader2,
  CalendarClock
} from "lucide-react";
import Section from "./Section";
import { useT, localizeWeekday } from "../lib/dict";
import { useLang } from "../lib/i18n";
import { useLocalizeDay, useLocalizePoi } from "../data/i18n";
import { getAttraction } from "../data/attractions";
import { itinerary } from "../data/itinerary";
import {
  fetchTripForecast,
  skyKind,
  daysUntil,
  type ForecastResult,
  type SkyKind
} from "../lib/forecast";

/* Icon + accent per sky condition. Kept in the alpine palette so the
   strip reads as part of the magazine, not a bolted-on weather badge. */
const SKY: Record<SkyKind, { Icon: typeof Sun; tint: string; ring: string }> = {
  clear:  { Icon: Sun,            tint: "text-gold-500",       ring: "ring-gold-400/40" },
  partly: { Icon: CloudSun,       tint: "text-gold-400",       ring: "ring-gold-400/30" },
  cloud:  { Icon: Cloud,          tint: "text-ink-700/60",     ring: "ring-cream-300" },
  fog:    { Icon: CloudFog,       tint: "text-ink-700/50",     ring: "ring-cream-300" },
  rain:   { Icon: CloudRain,      tint: "text-olive-600",      ring: "ring-olive-400/40" },
  storm:  { Icon: CloudLightning, tint: "text-terracotta-600", ring: "ring-terracotta-500/40" },
  snow:   { Icon: CloudSnow,      tint: "text-olive-400",       ring: "ring-cream-300" }
};

function timeLabel(ts: number, lang: string): string {
  try {
    return new Date(ts).toLocaleTimeString(lang === "he" ? "he-IL" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return "";
  }
}

export default function ForecastSection() {
  const t = useT();
  const { lang } = useLang();
  const localizeDay = useLocalizeDay();
  const localizePoi = useLocalizePoi();

  const [data, setData] = useState<ForecastResult | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async (force = false) => {
    if (force) setRefreshing(true);
    const res = await fetchTripForecast({ force });
    if (res) {
      setData(res);
      setState("ready");
    } else {
      setState(prev => (prev === "ready" ? "ready" : "error"));
    }
    setRefreshing(false);
  }, []);

  // Load on mount, and refresh whenever the tab comes back to the
  // foreground — so a phone left open overnight shows today's numbers
  // rather than yesterday's. No deploy needed, ever.
  useEffect(() => {
    void load();
    const onVisible = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [load]);

  const todayIso = (() => {
    const n = new Date();
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(
      n.getDate()
    ).padStart(2, "0")}`;
  })();

  return (
    <Section
      id="forecast"
      eyebrow={t("forecast_eyebrow")}
      title={t("forecast_title")}
      kicker={t("forecast_kicker")}
    >
      {/* Status line: live, with when it last updated + a manual refresh */}
      <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-700/60">
          <span className="relative flex h-1.5 w-1.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full rounded-full bg-olive-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-olive-500" />
          </span>
          {state === "ready" && data
            ? t("forecast_updated", { time: timeLabel(data.fetchedAt, lang) })
            : state === "loading"
              ? t("forecast_loading")
              : t("forecast_unavailable")}
        </div>
        <button
          type="button"
          onClick={() => void load(true)}
          disabled={refreshing}
          className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-cream-50 px-3 py-1.5 text-xs font-medium text-ink-800 transition-colors hover:border-terracotta-500/40 disabled:opacity-60 min-h-9"
        >
          {refreshing ? (
            <Loader2 size={13} className="animate-spin" />
          ) : (
            <RefreshCw size={13} />
          )}
          {t("forecast_refresh")}
        </button>
      </div>

      {state === "error" && !data && (
        <p className="card-paper p-4 text-sm text-ink-700/80">
          {t("forecast_error_body")}
        </p>
      )}

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {itinerary.map((rawDay, i) => {
          const day = localizeDay(rawDay);
          const entry = data?.days.find(d => d.dayNumber === rawDay.dayNumber);
          const f = entry?.forecast ?? null;
          const sky = f ? SKY[skyKind(f.code)] : null;
          const isToday = rawDay.date === todayIso;
          const away = daysUntil(rawDay.date);
          // Show the place in the reader's language when we can.
          const poi = entry?.attractionId ? getAttraction(entry.attractionId) : undefined;
          const placeLabel = poi
            ? localizePoi(poi).name
            : (entry?.place ?? day.base ?? "");

          return (
            <motion.div
              key={rawDay.dayNumber}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
              className={`rounded-2xl bg-cream-50 p-3 ring-1 ${
                isToday
                  ? "ring-2 ring-terracotta-500 shadow-[0_10px_30px_-18px_rgba(196,90,61,0.5)]"
                  : sky
                    ? `${sky.ring} shadow-[0_8px_22px_-16px_rgba(58,28,15,0.25)]`
                    : "ring-cream-300"
              }`}
            >
              {/* Date + day number */}
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-[10px] uppercase tracking-[0.16em] font-semibold text-ink-700/70">
                  {localizeWeekday(rawDay.weekday, lang, true)}{" "}
                  <span className="font-latin-serif text-[13px] text-ink-900">
                    {rawDay.date.slice(8)}
                  </span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.14em] text-terracotta-600/80 font-semibold">
                  {t("badge_day_n", { n: String(rawDay.dayNumber) })}
                </div>
              </div>

              {/* Where this reading is for */}
              <div className="mt-0.5 truncate text-[11px] text-ink-700/70" title={placeLabel}>
                {placeLabel}
              </div>

              {f && sky ? (
                <>
                  <div className="mt-2 flex items-center gap-2">
                    <sky.Icon size={26} className={sky.tint} strokeWidth={1.7} />
                    <div className="leading-none">
                      <span className="font-latin-serif text-2xl text-ink-900">
                        {f.tMax}°
                      </span>
                      <span className="ms-1 text-sm text-ink-700/55">{f.tMin}°</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-700/70">
                    {f.precipProb != null && (
                      <span className="inline-flex items-center gap-1">
                        <Droplets size={11} className="text-olive-500" />
                        {f.precipProb}%
                      </span>
                    )}
                    {f.windMax != null && (
                      <span className="inline-flex items-center gap-1">
                        <Wind size={11} className="text-ink-700/50" />
                        {f.windMax}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <div className="mt-3 flex items-start gap-1.5 text-[11px] leading-snug text-ink-700/55">
                  <CalendarClock size={13} className="mt-px shrink-0" />
                  <span>
                    {state === "loading"
                      ? t("forecast_loading")
                      : away > 0
                        ? t("forecast_not_yet", { n: String(away) })
                        : t("forecast_past")}
                  </span>
                </div>
              )}

              {/* What's planned, so the number means something */}
              <div className="mt-2 border-t border-cream-300/70 pt-2 text-[11px] leading-snug text-ink-700/75 line-clamp-2">
                {day.title}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] text-ink-700/55">{t("forecast_source")}</p>
    </Section>
  );
}
