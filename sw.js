/* Offline support. Network first, so updates always show when online;
   the saved copy is used only when there is no internet. */
var V = "ss-v1";
var CORE = ["./", "index.html", "book.html", "style.css", "app.js", "art.js", "books.js", "icon.svg", "manifest.webmanifest", "about.html",
  "fonts/baloo-2-latin-400-normal.woff2", "fonts/baloo-2-latin-700-normal.woff2", "fonts/baloo-2-devanagari-400-normal.woff2", "fonts/baloo-2-devanagari-700-normal.woff2",
  "fonts/noto-sans-devanagari-latin-400-normal.woff2", "fonts/noto-sans-devanagari-latin-700-normal.woff2", "fonts/noto-sans-devanagari-devanagari-400-normal.woff2", "fonts/noto-sans-devanagari-devanagari-700-normal.woff2"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (r) {
      var copy = r.clone();
      caches.open(V).then(function (c) { c.put(e.request, copy); });
      return r;
    }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); })
  );
});
