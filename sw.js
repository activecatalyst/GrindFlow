// GrindFlow -> Volume migration: self-destructing service worker.
// Old installed PWAs fetch this on next online launch. It wipes the stale
// cache, unregisters itself, and sends every open window to the new home.
const NEW_HOME = 'https://activecatalyst.github.io/volume/';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => {
        clients.forEach((client) => {
          if ('navigate' in client) client.navigate(NEW_HOME);
        });
      })
  );
});

// No fetch handler: everything goes straight to the network,
// so the redirect page below is always served fresh.
