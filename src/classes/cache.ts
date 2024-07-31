export {};

import { Collection } from "@discordjs/collection";

class Cache<T> {
    sizeLimit: number;
    #impl = new Collection<string, T>();

    constructor(sizeLimit: number) {
        this.sizeLimit = sizeLimit;
    }

    get(key: string) {
        return this.#impl.get(key);
    }

    set(key: string, content: T) {
        this.#impl.set(key, content);

        if (this.#impl.size >= 16) {
            this.#impl.delete(this.#impl.firstKey() ?? "");
        }
    }

    valueOf() {
        return this.#impl;
    }
}

export default new Cache<string | Object>(16);
