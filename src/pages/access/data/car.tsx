import { siteConfig } from "@/config/site";

export const columns = [
    { name: "POINT", uid: "point" },
    { name: "TIME", uid: "time" },
    { name: "ACTIONS", uid: "actions" },
];

export default [
    {
        id: 0,
        point: "せんだい青葉山交流広場駐車場",
        link: "https://www.aobayama.jp/access/parking.html",
        description: "〒980-0856 仙台市青葉区青葉山",
        time: 3,
        epexegesis: "346台",
        map_link: encodeURI(
            `https://www.google.com/maps?ll=38.26267,140.856521&z=17&t=m&hl=ja&gl=JP&mapclient=embed&saddr=せんだい青葉山交流広場駐車場、〒980-0856+宮城県仙台市青葉区青葉山&daddr=${siteConfig.event.location.address.join("")}&dirflg=w`,
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1668.2386490653992!2d140.8561399327601!3d38.26276250534041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a299b0c2fd067%3A0x50679dc8e99d2d9a!2z5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy66Z2S6JGJ5bGxIOOBm-OCk-OBoOOBhOmdkuiRieWxseS6pOa1geW6g-WgtOmnkOi7iuWgtO-8iOaZrumAmui7iuOBruOBv--8iQ!3m2!1d38.2617912!2d140.8570748!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720960447990!5m2!1sja!2sjp",
    },
    {
        id: 1,
        point: "仙台国際センター地下駐車場",
        link: "https://www.aobayama.jp/access/parking.html",
        description: "〒980-0856 仙台市青葉区青葉山",
        time: 8,
        epexegesis: "96台",
        map_link: encodeURI(
            `https://www.google.com/maps?ll=38.26057,140.857352&z=16&t=m&hl=ja&gl=JP&mapclient=embed&saddr=仙台国際センター地下駐車場、〒980-0856+宮城県仙台市青葉区青葉山８−１&daddr=${siteConfig.event.location.address.join("")}&dirflg=w`,
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3667.323256140424!2d140.85506291329702!3d38.26084118274106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a29a05b51d729%3A0xfa55b34aa6957c0c!2z5LuZ5Y-w5Zu96Zqb44K744Oz44K_44O85Zyw5LiL6aeQ6LuK5aC044CB44CSOTgwLTA4NTYg5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy66Z2S6JGJ5bGx77yY4oiS77yR!3m2!1d38.2585154!2d140.858556!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720960555903!5m2!1sja!2sjp",
    },
    {
        id: 2,
        point: "エコロパーク フォレスト・ヒル仙台青葉",
        link: encodeURI(
            "https://service.ecolocity.co.jp/park/エコロパーク-フォレスト・ヒル仙台青葉/",
        ),
        description: "〒980-0855 宮城県仙台市青葉区川内澱橋通5-1",
        time: 4,
        epexegesis: "9台",
        map_link: encodeURI(
            `https://www.google.com/maps?ll=38.264224,140.85771&z=17&t=m&hl=ja&gl=JP&mapclient=embed&saddr=エコロパーク+フォレスト・ヒル仙台青葉、〒980-0855+宮城県仙台市青葉区川内澱橋通５−１&daddr=${siteConfig.event.location.address.join("")}&dirflg=w`,
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1566.3285239817335!2d140.85726162028809!3d38.26425934445153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a290067fb4509%3A0x9cd3dccf652d1cb!2z44Ko44Kz44Ot44OR44O844KvIOODleOCqeODrOOCueODiOODu-ODkuODq-S7meWPsOmdkuiRieOAgeOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8leKIku-8kQ!3m2!1d38.2655971!2d140.85945379999998!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720960579865!5m2!1sja!2sjp",
    },
];
