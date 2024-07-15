import { siteConfig } from "@/config/site";

export function scrollIntoViewIfNeeded<T extends HTMLElement>(
    element: T,
    {
        behavior = "auto",
        marginTop = 30,
        marginBottom = 50,
        forceTop = false,
    }: {
        behavior?: ScrollBehavior;
        marginTop?: number;
        marginBottom?: number;
        forceTop?: boolean;
    } = {}
) {
    if (
        forceTop ||
        window.scrollY + siteConfig.navbarHeight > element.offsetTop
    ) {
        window.scrollTo({
            behavior,
            top: element.offsetTop - siteConfig.navbarHeight - marginTop,
        });
    } else if (
        window.scrollY + window.innerHeight <
        element.offsetTop + element.offsetHeight
    ) {
        window.scrollTo({
            behavior,
            top:
                element.offsetTop +
                element.offsetHeight -
                window.innerHeight +
                marginBottom,
        });
    }
}
