// This is a basic service worker for caching static assets.
const CACHE_NAME = 'my-app-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css', // Adjust if your CSS file has a different name
  '/app.js',   // Adjust if your JS file has a different name
  '/manifest.json',
  '/logo192.png'    // Make sure you have this icon in your public folder
];

// Install event: opens the cache and adds the core files to it.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Fetch event: serves assets from cache if available, otherwise fetches from network.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});