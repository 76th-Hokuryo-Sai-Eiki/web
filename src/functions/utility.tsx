import React from "react";

export function chooseRandom(source: Array<any>) {
    const arrayIndex = Math.floor(Math.random() * source.length);

    return source[arrayIndex];
}

export const addKey = (e: any, i: number) => React.cloneElement(e, { key: i });

export function getImageUrl(name: string) {
    return `images/${name}`;
    // return new URL(`/src/images/${name}`, import.meta.url).href;
}

export function removeHash() {
    history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
    );
}
