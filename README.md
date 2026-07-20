# Austria 2026 — the Zolotushko family trip

A static, mobile-first trip companion for our 10 days in the Tyrolean Alps (11–20 Aug 2026): day-by-day itinerary, interactive map, attractions, candidate stays, restaurants/supermarkets/gas, live weather, Austrian food & drink, packing/booking checklists, a PIN-gated Tickets wallet (flights + rental car), an AI tour-guide chat (**Wolfi**), and a per-day kids' quiz. Bilingual English / Hebrew. Built to live on the phone during the trip.

Deployed to GitHub Pages at **https://zolowsc.github.io/austria-2026/**.

Built from the trip-companion template — for the full design rationale and the playbook, see [`docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md`](docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md).

## The Tickets section (encrypted)

The flight and rental-car booking references live in `src/data/bookings.enc.ts` as **AES-256-GCM ciphertext** — the plaintext and the PIN are never committed. The app decrypts them client-side when the family PIN is entered, and remembers the unlock per device. A short PIN on a public repo is casual privacy, not a vault (see the "Sensitive info behind a shared PIN" section of the playbook). To change the packet, edit a plaintext JSON **outside the repo** and re-run `node scripts/encrypt-bookings.mjs <plain.json> <PIN> src/data/bookings.enc.ts`.

## Audio narration

Pre-generated narration is **off** in this build (`AUDIO_ENABLED = false` in `src/lib/audioUrl.ts`). To add it, generate clips locally with the `scripts/fetch-*.mjs` helpers (they need a local `GEMINI_API_KEY`), drop the MP3s under `public/audio/`, and flip the flag to `true`.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (warm earth-tone palette: terracotta, olive, cream, sienna, gold)
- Cormorant Garamond + Inter (LTR), Frank Ruhl Libre + Rubik (RTL) — Google Fonts
- React Leaflet + CartoDB Voyager tiles (no API key)
- Open-Meteo for live weather (no API key)
- Lucide icons + Framer Motion for subtle animation
- Gemini Live API for the in-app chat assistant (Wolfi)
- Pre-generated TTS via Gemini Flash / Cloud Chirp 3 / ElevenLabs (scripts run locally only)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint flat config
```

`vite.config.ts` switches the `base` path between local dev (`/`) and the GitHub Pages deploy — update the prod `base` to match your repo slug.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the keys you need. None of these are required to boot the site, but the AI chat and TTS scripts need them.

| Variable | Used by | Notes |
| --- | --- | --- |
| `VITE_GEMINI_API_KEY` | In-app Wolfi chat | Baked into the bundle at build time. Restrict by HTTP referrer in AI Studio. Leave blank to fall back to per-user pasted keys. |
| `GEMINI_API_KEY` | `npm run tts:*` scripts (local only) | **No `VITE_` prefix.** Defaults to Gemini Flash TTS for narration audio. Same key family as the one above; safe to reuse. |
| `ELEVEN_API_KEY` | `npm run tts:*:eleven` scripts | Optional — only needed when passing `--elevenlabs`. |
| `GOOGLE_APPLICATION_CREDENTIALS` | `npm run tts:* -- --google-chirp3` | Optional — Google Cloud service account for the Chirp 3 HD TTS fallback. |

## Updating content

All content lives in plain TypeScript files under `src/data/` — no CMS, no database. Edit the file, push to `main`, and GitHub Actions rebuilds and redeploys automatically. Every file currently holds an empty / placeholder dataset.

| File | What's in it |
| --- | --- |
| `src/data/itinerary.ts` | The day-by-day plan (`dayTips`, gear, drink/word of the day, etc.) |
| `src/data/attractions.ts` | All sights with description, coords, official link, image path |
| `src/data/stays.ts` | The stays / accommodation for each leg |
| `src/data/services.ts` | Restaurants, supermarkets, gas stations near each base |
| `src/data/dishes.ts` / `wineries.ts` | Food & wine catalog (own section + map layer) |
| `src/data/tips.ts` | Local know-how and warnings |
| `src/data/emergency.ts` | Emergency numbers, hospitals, embassy |
| `src/data/checklist.ts` | Pre-trip booking + packing checklists |
| `src/data/bookings.enc.ts` | Encrypted (PIN-gated) tickets packet — regenerate with `scripts/encrypt-bookings.mjs` |
| `src/data/i18n/*.he.ts` | Partial Hebrew overlays for every English data module |
| `src/lib/dict.ts` | UI strings (brand, nav, sections, install, Wolfi) per language |
| `src/lib/tripState.ts` | Trip start/end dates (currently placeholders) |
| `src/lib/tipsForDay.ts` | Maps which global `tips.ts` entries appear on which chapter detail page |
| `src/lib/gemininio/persona.ts` | AI guide persona, traveling party, trip facts, digests |

### Adding photos

Image fields point to `./images/<slug>.jpg`. Drop your own `.jpg` files into `public/images/` with matching names and they will appear automatically. Until then, each card shows a colour-coded fallback with the place name. Always use **relative** paths (`./images/...`, not `/images/...`) so they resolve correctly under the GH Pages base path.

## Helper scripts

`scripts/` holds local-only scripts for fetching photos and generating audio. Run from your machine, never from CI.

| Command | What it does |
| --- | --- |
| `node scripts/fetch-images.mjs` | Pulls POI/attraction images from Wikipedia / Commons / Unsplash. |
| `node scripts/fetch-hero-images.mjs` | Same idea, scoped to home-page hero shots. |
| `node scripts/fetch-food-wine-images.mjs` | Same idea, scoped to dishes + wineries. |
| `node scripts/find-hotel-images.mjs` | Helper to discover lead images for stays. |
| `npm run tts:italian-words` | Word-of-the-day MP3s (Gemini Flash by default). |
| `npm run tts:italian-words:eleven` | Same, via ElevenLabs. Add `--examples-only` to rebuild just the example clips. |
| `npm run tts:attractions-he` | Hebrew narration for attractions (Gemini Flash by default; `:eleven` variant available). |
| `npm run repair:italian-words-audio` | Re-encodes any partially-truncated MP3 returned by a TTS provider. |
| `node scripts/smoke-test-gemini-live.mjs` | Opens a one-shot Live WebSocket to verify your Gemini key works. |

## Deploy (auto)

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. To enable on a new fork:

1. Push the repo to `<you>/<repo>` and update `vite.config.ts`'s prod `base` to match the slug.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Add `VITE_GEMINI_API_KEY` as a repository secret if you want the chat enabled by default.
4. The first push triggers the workflow; the live URL appears in the Actions log.

## Project layout

```
src/
  components/      UI sections (Hero, Map, Itinerary, Stays, Wolfi, ...)
  data/            All trip content as typed TS data (currently blank)
    i18n/          Partial Hebrew overlays for every data module
  lib/             Helpers (i18n, dict, hash routing, install, swipe, audio bus)
    gemininio/     AI assistant — persona, Live WS, REST search, history, audio
  index.css        Tailwind + design tokens
public/
  images/          Drop-in attraction & stay photos (currently empty)
  audio/           Pre-generated narration MP3s
  manifest.webmanifest
scripts/           Local-only image and audio generation scripts
docs/
  HOW_TO_BUILD_A_VACATION_WEBSITE.md   Full design playbook + new-trip guide
.github/workflows/
  deploy.yml       GitHub Pages CI
```

Happy travels.
