const CACHE = 'paipai-public-preview-v20';
const STICKERS = ['mikasa-v200w','mikasa-v330w','mikasa-v200w-vnl','mikasa-bv550c','molten-v5m5000','molten-v5m4500','molten-v5m4000','molten-v5m3500','lanhua-s11-green','lanhua-s11-blue','lanhua-s11-red','lanhua-mv518-ace1981','mikasa-v200w-usa','mikasa-v200w-usan','mikasa-v360w-lovb','mikasa-v360w','mikasa-v300w-at','mikasa-bv551e','mikasa-bv540e-aau','mikasa-bv540e-usa','mikasa-bv543c-vxa-y','mikasa-bv535c-wyb-1','mikasa-bv552c-f','mikasa-bv552c-wybr'].map(name => `./assets/stickers/${name}.png`);
const ASSETS = ['./', './index.html', './styles.css?v=6', './night.css?v=17', './app.mjs', './product.mjs?v=18', './manifest.webmanifest', './app-icon.png', './assets/generated/volleyball-night-hero.jpg', './assets/generated/indoor-arena-demo.jpg', './assets/generated/community-activity-demo.jpg', './assets/generated/outdoor-court-demo.jpg', ...STICKERS];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then(hit => hit || caches.match('./index.html'))));
});
