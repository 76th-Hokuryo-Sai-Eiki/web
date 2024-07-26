import { lazy, Suspense, SuspenseProps } from "react";

import { IconSvgProps } from "./internal/props";

export type { IconSvgProps } from "./internal/props";

export { default as Banner } from "./banner";
export { default as Logo } from "./logo";

const _GoogleCalendarIcon = lazy(() => import("./google-calendar"));
const _NextUILogo = lazy(() => import("./nextui"));
const _ReactLogo = lazy(() => import("./react"));
const _ViteLogo = lazy(() => import("./vite"));

export function GoogleCalendarIcon(
    props: IconSvgProps,
    suspenseProps: SuspenseProps = {},
) {
    return (
        <Suspense {...suspenseProps}>
            <_GoogleCalendarIcon {...props} />
        </Suspense>
    );
}

export function NextUILogo(
    props: IconSvgProps,
    suspenseProps: SuspenseProps = {},
) {
    return (
        <Suspense {...suspenseProps}>
            <_NextUILogo {...props} />
        </Suspense>
    );
}

export function ReactLogo(
    props: IconSvgProps,
    suspenseProps: SuspenseProps = {},
) {
    return (
        <Suspense {...suspenseProps}>
            <_ReactLogo {...props} />
        </Suspense>
    );
}

export function ViteLogo(
    props: IconSvgProps,
    suspenseProps: SuspenseProps = {},
) {
    return (
        <Suspense {...suspenseProps}>
            <_ViteLogo {...props} />
        </Suspense>
    );
}
