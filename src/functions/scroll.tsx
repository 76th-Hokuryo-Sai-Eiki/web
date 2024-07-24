import { siteConfig } from "@/config/site";

export function scrollIntoViewIfNeeded<T extends HTMLElement>(
    element: T,
    {
        root = document.documentElement,
        offsetTop = siteConfig.navbarHeight,
        behavior = "auto",
        marginTop = 30,
        marginBottom = 50,
        forceTop = false,
    }: {
        root?: any;
        offsetTop?: number;
        behavior?: ScrollBehavior;
        marginTop?: number;
        marginBottom?: number;
        forceTop?: boolean;
    } = {},
) {
    const elementTop = element.offsetTop - root.offsetTop;

    if (forceTop || root.scrollTop + offsetTop > elementTop) {
        root.scrollTo({
            behavior,
            top: elementTop - offsetTop - marginTop,
        });
    } else if (
        root.scrollTop + root.clientHeight <
        elementTop + element.clientHeight
    ) {
        root.scrollTo({
            behavior,
            top:
                elementTop +
                element.clientHeight -
                root.clientHeight +
                marginBottom,
        });
    }
}

export function calcScrollOffset({
    viewFrom,
    viewTo,
    containerHeight,
}: {
    viewFrom: number;
    viewTo: number;
    containerHeight: number;
}) {
    const delta = (viewTo - viewFrom) / (containerHeight - viewFrom);

    return viewFrom - delta * Math.max(0, viewFrom - window.innerHeight);
}
