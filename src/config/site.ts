export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    eventDate: new Date("2024/08/31"),
    navbarHeight: 64,
    navItems: [
        {
            label: "Access",
            href: "#access",
        },
        {
            label: "News",
            href: "#news",
        },
        {
            label: "Info",
            href: "#info",
        },
        {
            label: "Contents",
            href: "#contents",
        },
        {
            label: "Credits",
            href: "#footer",
        },
    ],
    links: {
        calendar: encodeURI(
            "https://calendar.google.com/calendar/u/0/r/eventedit?text=第76回 北陵祭&dates=20240831/20240902&location=〒980-0855 宮城県仙台第二高等学校",
        ),
        github: "https://github.com/76th-Hokuryo-Sai-Eiki/web",
        twitter: "http://twitter.com/share?hashtags=76th北陵祭",
        docs: "https://nextui-docs-v2.vercel.app",
    },
};
