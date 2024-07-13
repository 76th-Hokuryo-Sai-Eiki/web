export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    eventDate: new Date("2024/08/31"),
    name: "Vite + NextUI",
    description:
        "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Access",
            href: "/access",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        calendar: encodeURI(
            "https://calendar.google.com/calendar/u/0/r/eventedit?text=第76回 北稜祭&dates=20240831/20240902&location=〒980-0855 宮城県仙台第二高等学校"
        ),
        github: "https://github.com/76th-Hokuryo-Sai-Eiki/web",
        twitter: "http://twitter.com/share?hashtags=76th北稜祭",
        docs: "https://nextui-docs-v2.vercel.app",
    },
};
