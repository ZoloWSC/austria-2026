/**
 * Minimal service worker — no offline caching strategy.
 *
 * Chromium-based browsers require a SW with a fetch handler for the
 * PWA installability checklist and reliable `beforeinstallprompt`.
 *
 * It also fixes a real staleness problem. GitHub Pages serves
 * `index.html` with `Cache-Control: max-age=600`, so a browser (or an
 * installed PWA) can keep running a ten-minute-old HTML file — which
 * points at the PREVIOUS hashed JS bundle, i.e. yesterday's itinerary.
 * That's exactly the wrong behaviour for a plan the family reads on the
 * road. So: navigation requests always go to the network with the HTTP
 * cache bypassed, while the content-hashed assets under /assets/ stay
 * cacheable (their filenames change whenever they change, so caching
 * them is free and correct).
 */

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

function isNavigation(request) {
  return request.mode === "navigate" || request.destination === "document";
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (isNavigation(request)) {
    event.respondWith(
      // Always ask the server for the current HTML.
      fetch(request, { cache: "no-store" }).catch(() =>
        // Offline / flaky signal in an Alpine valley: fall back to
        // whatever the normal fetch path can produce rather than
        // failing the navigation outright.
        fetch(request)
      )
    );
    return;
  }

  event.respondWith(fetch(request));
});
