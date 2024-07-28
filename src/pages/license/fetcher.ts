import _cache from "./cache";
import _licenses from "./fetch-list";

import { LicenseInfo } from ".";

export {};

function setSelected(value: string | null) {
    self.postMessage({
        type: "selection",
        value,
    });
}

function setContent(value: string | null) {
    self.postMessage({
        type: "content",
        value,
    });
}

let cache: Cache | null = null;
let licenses: Record<string, LicenseInfo> | null = null;

self.addEventListener("message", async (e) => {
    if (!cache) cache = await _cache;
    if (!licenses) licenses = await _licenses;

    const keys = e.data;

    if (keys.size === 0) {
        setSelected("");

        return;
    }

    const name = [...keys][0] as string;

    setSelected(name);

    if (!name) return;

    const hash = (licenses as any)[name]?.hash ?? "";

    if (hash.length !== 64) {
        setSelected(null);

        return;
    }

    const url = `/licenses/${hash}.txt`;

    const cached = await caches.match(url);

    if (cached) {
        setContent(await cached.text());

        return;
    }

    fetch(url)
        .then((res) => {
            if (cache) cache.put(url, res.clone());

            return res.text();
        })
        .then((data) => {
            setContent(data);
        })
        .catch(() => {
            setSelected(null);
        });
});
