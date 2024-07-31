export {};

const cacheName = `licenses-${__BUILT_AT__}`;

export default globalThis.caches.open(cacheName);

globalThis.caches.keys().then((keys) =>
    keys.forEach((key) => {
        if (!key.startsWith("licenses-") || key === cacheName) return;

        globalThis.caches.delete(key);
    }),
);
