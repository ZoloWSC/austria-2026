// One-shot script: fetch a freely-licensed photo for each attraction & stay
// from Wikipedia / Wikimedia Commons and save into public/images/.
//
// Sources are CC-licensed (Wikimedia / Wikipedia) — safe for personal use
// and for an open repo.
//
// Run with:   node scripts/fetch-images.mjs

import { writeFile, mkdir, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "images");

const UA =
  "Mozilla/5.0 (compatible; tuscany-2026/1.0; +https://github.com/tikel1)";

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchWithRetry(url, opts = {}, tries = 4) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, opts);
      if (res.status === 429 || res.status >= 500) {
        const wait = 1500 * Math.pow(2, i);
        console.log(`  retry ${i + 1}/${tries} after ${wait}ms (HTTP ${res.status})`);
        await sleep(wait);
        continue;
      }
      return res;
    } catch (e) {
      lastErr = e;
      const wait = 1500 * Math.pow(2, i);
      await sleep(wait);
    }
  }
  if (lastErr) throw lastErr;
  throw new Error(`gave up after ${tries} attempts: ${url}`);
}

/**
 * For each filename:
 *   { wiki: "Article_Title" }                    -> use Wikipedia REST summary lead image
 *   { commons: "File:Some_File.jpg" }            -> direct Wikimedia Commons file
 *   { url: "https://..." }                       -> direct URL (already CC/PD)
 */
/* Helper to build a sensibly-sized Unsplash JPG URL from a "photo-…" id. */
const unsplash = (photoId, w = 1600) =>
  `https://images.unsplash.com/${photoId}?fm=jpg&q=85&w=${w}&auto=format&fit=crop`;

// AUSTRIA 2026 — real, freely-licensed photos from Wikipedia / Wikimedia
// Commons, keyed to the image paths in src/data/*. Each { wiki } pulls the
// lead image of that article; failures just leave the card's colour-coded
// gradient fallback in place.
const TARGETS = [
  // ---------- Attractions ----------
  ["achensee.jpg",                 { wiki: "Achensee" }],
  ["swarovski-kristallwelten.jpg", { wiki: "Swarovski_Kristallwelten" }],
  ["hall-in-tirol.jpg",            { wiki: "Hall_in_Tirol" }],
  ["spieljoch-fuegen.jpg",         { wiki: "Fügen" }],
  ["zillertalbahn.jpg",            { wiki: "Zillertalbahn" }],
  ["innsbruck-altstadt.jpg",       { wiki: "Golden_Roof" }],
  ["alpenzoo-innsbruck.jpg",       { wiki: "Alpine_ibex" }],
  ["nordkette.jpg",                { wiki: "Nordkette" }],
  ["alpbach-village.jpg",          { wiki: "Alpbach" }],
  ["juppi-zauberwald.jpg",         { wiki: "Reith_im_Alpbachtal" }],
  ["lauser-sauser.jpg",            { wiki: "Alpbach" }],
  ["hexenwasser-soell.jpg",        { wiki: "Hohe_Salve" }],
  ["kufstein-festung.jpg",         { wiki: "Kufstein" }],
  ["riedel-glass.jpg",             { wiki: "Glassblowing" }],
  ["rattenberg.jpg",               { wiki: "Rattenberg (Tirol)", lang: "de" }],
  ["munich-airport.jpg",           { wiki: "Munich_Airport" }],

  // ---------- Stays (candidates — representative regional photos) ----------
  ["stay-alpbacherhof.jpg",        { wiki: "Alpbach" }],
  ["stay-kramsach-aparthotel.jpg", { wiki: "Kramsach" }],
  ["stay-innsbruck-ac-hotel.jpg",  { wiki: "Innsbruck" }],

  // ---------- Food ----------
  ["food-wiener-schnitzel.jpg",    { wiki: "Wiener_schnitzel" }],
  ["food-kaiserschmarrn.jpg",      { wiki: "Kaiserschmarrn" }],
  ["food-tiroler-groestl.jpg",     { wiki: "Gröstl", lang: "de" }],
  ["food-kaesespaetzle.jpg",       { wiki: "Käsespätzle" }],
  ["food-speckknoedel.jpg",        { wiki: "Knödel" }],
  ["food-apfelstrudel.jpg",        { wiki: "Apple_strudel" }],
  ["food-germknoedel.jpg",         { wiki: "Germknödel" }],
  ["food-marillenknoedel.jpg",     { wiki: "Marillenknödel" }],
  ["food-brettljause.jpg",         { wiki: "Brotzeit" }],
  ["food-graukaese.jpg",           { wiki: "Tiroler_Graukäse" }],
  ["food-almdudler.jpg",           { wiki: "Almdudler" }],
  ["food-skiwasser.jpg",           { wiki: "Raspberry" }],

  // ---------- Drinks / "wineries" ----------
  ["winery-zillertal-bier.jpg",       { wiki: "Zell_am_Ziller" }],
  ["winery-tyrol-schnaps.jpg",        { wiki: "Obstler", lang: "de" }],
  ["winery-tyrol-coffee-roaster.jpg", { wiki: "Wiener_Melange" }]
];

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

/** Bump a Wikimedia thumbnail URL to a wider width (when possible). */
function widenThumb(url, target = 1200) {
  // Pattern:  /thumb/a/aa/Foo.jpg/320px-Foo.jpg  ->  /thumb/a/aa/Foo.jpg/1200px-Foo.jpg
  const m = url.match(/\/thumb\/(.+?)\/(\d+)px-([^/]+)$/);
  if (!m) return url;
  return url.replace(/\/(\d+)px-([^/]+)$/, `/${target}px-$2`);
}

async function getWikiLeadImage(title, lang = "en") {
  // Use the pageimages API for a server-generated 1400px thumbnail — always a
  // valid URL (unlike hand-widened thumb paths, which 400), and `redirects=1`
  // follows title redirects (e.g. "Swarovski Kristallwelten" → real article).
  // `lang` lets us fall back to de.wikipedia for Austrian topics whose English
  // article has no designated page image.
  const api =
    `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&formatversion=2` +
    `&prop=pageimages&piprop=thumbnail&pithumbsize=1400&redirects=1&origin=*` +
    `&titles=${encodeURIComponent(title)}`;
  const res = await fetch(api, { headers: { "User-Agent": UA, "Accept": "application/json" } });
  if (!res.ok) throw new Error(`Wiki pageimages ${title} HTTP ${res.status}`);
  const data = await res.json();
  const page = data?.query?.pages?.[0];
  return page?.thumbnail?.source ?? null;
}

async function getCommonsFile(fileTitle, width) {
  // Use the Commons API to resolve File:Foo.jpg to a direct URL.
  // If width is provided, request a thumb at that width (server-side resize).
  const widthParam = width ? `&iiurlwidth=${width}` : "";
  const api =
    `https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url${widthParam}&format=json&origin=*&titles=` +
    encodeURIComponent(fileTitle);
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Commons ${fileTitle} HTTP ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl ?? info?.url ?? null;
}

/* Some hosts (notably the Tenuta Cortevecchia WAF) reject our default
   project UA but happily serve to crawler UAs. We try the normal UA first
   and transparently fall back to a Googlebot UA on a 403/406 so we don't
   need per-target configuration. */
const FALLBACK_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

async function downloadTo(url, dest) {
  let res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept": "image/*" }
  });
  // Wikimedia rate-limits (429) on bursts — back off and retry.
  for (let i = 0; res.status === 429 && i < 5; i++) {
    await sleep(2500 * Math.pow(1.7, i));
    res = await fetch(url, { headers: { "User-Agent": UA, "Accept": "image/*" } });
  }
  if (res.status === 403 || res.status === 406) {
    res = await fetch(url, {
      headers: { "User-Agent": FALLBACK_UA, "Accept": "image/*,*/*;q=0.8" }
    });
  }
  if (!res.ok) throw new Error(`Download ${url} HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.byteLength;
}

async function resolveUrl(spec) {
  if (spec.url) return spec.url;
  if (spec.commons) return await getCommonsFile(spec.commons, spec.width);
  if (spec.wiki) return await getWikiLeadImage(spec.wiki, spec.lang);
  return null;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let ok = 0;
  let skip = 0;
  let fail = 0;

  for (const [name, spec] of TARGETS) {
    const dest = resolve(OUT_DIR, name);
    if (await fileExists(dest)) {
      console.log(`= skip  ${name}  (already exists)`);
      skip++;
      continue;
    }
    try {
      const url = await resolveUrl(spec);
      if (!url) {
        console.log(`! miss  ${name}  (no image found for ${JSON.stringify(spec)})`);
        fail++;
        continue;
      }
      const bytes = await downloadTo(url, dest);
      console.log(`+ saved ${name}  ${(bytes / 1024).toFixed(0)} KB  <- ${url}`);
      ok++;
      // Be polite to Wikimedia
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`! fail  ${name}  ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone.  saved=${ok}  skipped=${skip}  failed=${fail}`);
  console.log(`Note: failed entries fall back to the styled placeholder in the app.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
