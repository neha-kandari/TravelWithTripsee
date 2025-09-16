// Service Worker for caching static assets
const CACHE_NAME = 'tripsee-v1';
const STATIC_ASSETS = [
  '/',
  '/assets/logo.png',
  '/assets/flaticon.png',
  '/icons/Bali.png',
  '/icons/Veitnam.png',
  '/icons/Singapore.png',
  '/icons/Thailand.png',
  '/icons/malaysia.png',
  '/icons/Dubai.png',
  '/icons/Maldives.png',
  '/icons/Andaman.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Fetch event - serve from cache when available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
