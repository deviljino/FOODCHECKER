const CACHE_NAME = 'foodchecker-v1';
const urlsToCache = [
  'simple-app.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// התקנת Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// שימוש בקבצים מה-cache במידה וזמינים
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // אם נמצא במטמון, החזר את הקובץ מהמטמון
        if (response) {
          return response;
        }
        // אחרת, הבא מהרשת
        return fetch(event.request);
      }
    )
  );
}); 