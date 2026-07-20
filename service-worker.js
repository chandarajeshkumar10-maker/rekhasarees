const CACHE_NAME = "rekha-sarees-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./collection.html",
  "./style.css",
  "./script.js",
  "./logo.jpeg",
  "./saree 1.jpeg",
  "./bedsheet.jpeg",
  "./devan 1.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});