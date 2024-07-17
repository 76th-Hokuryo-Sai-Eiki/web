import React from "react";

export function chooseRandom(source: Array<any>) {
    const arrayIndex = Math.floor(Math.random() * source.length);

    return source[arrayIndex];
}

export const addKey = (e: any, i: number) => React.cloneElement(e, { key: i });

export function getImageUrl(name: string) {
    return new URL(`/src/images/${name}`, import.meta.url).href;
}
