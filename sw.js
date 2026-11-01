Self.addEventListener('install', (e) => {
  E.waitUntil(
    Caches.open('mahakal-cache').then((cache) => {
      Return cache.addAll([
        './index.html',
        './manifest.json',
        './ludo.html',
        './puzzle.html',
        './play.html',
        './aviator.html',
        './naya_game.html'
      ]);
    })
  );
});

Self.addEventListener('fetch', (e) => {
  E.respondWith(
    Caches.match(e.request).then((response) => {
      Return response || fetch(e.request);
    })
  );
});
