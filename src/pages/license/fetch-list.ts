import _cache from "./cache";

import { LicenseInfo } from ".";

const url = "./licenses/list.json";

export default (async () => {
    const cache = await _cache;

    const cached = await cache
        .match(url)
        .then((e) => e?.json())
        .catch(() => undefined);

    console.log(cached);
    if (cached) return cached;

    return fetch(url).then((e) => {
        if (cache) cache.put(url, e.clone()).catch(() => {});

        return e.json();
    });
})() as Promise<Record<string, LicenseInfo>>;
