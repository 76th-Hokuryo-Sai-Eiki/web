import React from "react";

export function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function chooseRandom(source: Array<any>) {
    const arrayIndex = Math.floor(Math.random() * source.length);

    return source[arrayIndex];
}

export const addKey = (e: any, i: number) => React.cloneElement(e, { key: i });

export function getImageUrl(name: string) {
    return `images/${name}`;
}

export function removeHash() {
    history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
    );
}

export function imageExists(url: string) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
    });
}
