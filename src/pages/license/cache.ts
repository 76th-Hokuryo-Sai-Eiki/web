export {};

const cacheName = `licenses-${__BUILT_AT__}`;

export default self.caches.open(cacheName);

self.caches.keys().then((keys) =>
    keys.forEach((key) => {
        if (!key.startsWith("licenses-") || key === cacheName) return;

        self.caches.delete(key);
    }),
);
