// Minimal service worker so the app can be installed on a phone ("Add to Home screen") and still
// open even with no signal. It only caches the app's own files (HTML/JS/icons) — GitHub API calls
// (for the online sync) and everything else always go straight to the network, never through here.
const CACHE_NAME = "recetario-v1";
const APP_SHELL = ["./", "./index.html", "./script.js", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Only handle same-origin GET requests for the app's own files. Everything else — the GitHub
  // sync API, Google Fonts, any non-GET request — is left completely untouched.
  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (req.method !== "GET" || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
  );
});
