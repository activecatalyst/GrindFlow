// GrindFlow Service Worker — v1
const CACHE_NAME = 'grindflow-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(event.request).then(r => { const c=r.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,c)); return r; })
      .catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(r => {
      if (event.request.method === 'GET' && r.status === 200) {
        const c=r.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,c));
      }
      return r;
    }))
  );
});
