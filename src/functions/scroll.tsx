import { siteConfig } from "@/config/site";

export function scrollIntoViewIfNeeded<T extends HTMLElement>(
    element: T,
    {
        behavior = "auto",
        marginTop = 30,
        marginBottom = 50,
    }: {
        behavior?: ScrollBehavior;
        marginTop?: number;
        marginBottom?: number;
    } = {}
) {
    if (window.scrollY + siteConfig.navbarHeight > element.offsetTop) {
        window.scrollTo({
            behavior,
            top: element.offsetTop - siteConfig.navbarHeight - marginTop,
        });
    }

    if (
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
