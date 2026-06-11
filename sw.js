const CACHE='ninja-swirl-v1';
const FILES=['/ninja-swirl/','/ninja-swirl/index.html'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    return caches.open(CACHE).then(c=>{c.put(e.request,res.clone());return res;});
  }).catch(()=>caches.match('/ninja-swirl/index.html'))));
});
