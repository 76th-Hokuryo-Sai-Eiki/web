import { LicenseInfo } from ".";

import cache from "@/classes/cache";

const url = "./licenses/list.json";

export default (() => {
    const cached = cache.get(url);

    if (cached) return cached;

    return fetch(url).then((e) => {
        const data = e.json();

        cache.set(url, data);

        return data;
    });
})() as Promise<Record<string, LicenseInfo>>;
