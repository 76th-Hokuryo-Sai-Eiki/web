export type SiteConfig = typeof siteConfig;

const eventInfo = {
    year: 2024,
    schedule: [
        {
            date: "08/31",
            day: "土",
            start: "11:00",
            end: "15:00",
        },
        {
            date: "09/01",
            day: "日",
            start: "09:00",
            end: "14:00",
        },
    ],
    get startsAt() {
        return new Date(
            `${this.year}/${this.schedule[0].date} ${this.schedule[0].start}`,
        );
    },
    location: {
        name: "宮城県仙台第二高等学校",
        tel: "022-221-5626",
        code: "980-0855",
        address: ["宮城県仙台市青葉区", "川内澱橋通１"],
    },
};

export const siteConfig = {
    event: eventInfo,
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
            label: "Booths",
            href: "#booths",
        },
        {
            label: "Credits",
            href: "#footer",
        },
    ],
    links: {
        calendar: encodeURI(
            `https://calendar.google.com/calendar/u/0/r/eventedit?text=第76回 北陵祭&dates=20240831/20240902&location=〒${eventInfo.location.code} ${eventInfo.location.name}`,
        ),
    },
};
