import { FaBusSimple, FaTrainSubway, PiTrain } from "@/components/icons";

export const columns = [
    { name: "POINT", uid: "point" },
    { name: "TIME", uid: "time" },
    { name: "ACTIONS", uid: "actions" },
];

export default [
    {
        id: 0,
        icon: <FaTrainSubway size={24} />,
        point: "国際センター駅",
        description: "仙台市地下鉄 東西線",
        time: 5,
        epexegesis: "西1出口",
        link: "https://www.kotsu.city.sendai.jp/subway/station/kokusai.html",
        sub_link:
            "https://www.kotsu.city.sendai.jp/subway/station/station.html",
        map_link: encodeURI(
            "https://www.google.com/maps/dir/仙台国際センター、〒980-0856+宮城県仙台市青葉区青葉山/宮城県仙台第二高等学校、〒980-0855+宮城県仙台市青葉区川内澱橋通１−１",
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1668.2513824940115!2d140.85605709534525!3d38.26220800487586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a28487a392a97%3A0xe061e7615bbe1ab3!2z5Zu96Zqb44K744Oz44K_44O86aeF44CB44CSOTgwLTA4NTYg5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy66Z2S6JGJ5bGx!3m2!1d38.260211999999996!2d140.8567742!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720960658759!5m2!1sja!2sjp",
    },
    {
        id: 1,
        icon: <FaTrainSubway size={24} />,
        point: "広瀬通駅",
        description: "仙台市地下鉄 南北線",
        time: 20,
        epexegesis: "西5出口",
        link: "https://www.kotsu.city.sendai.jp/subway/station/hirose-dori.html",
        sub_link:
            "https://www.kotsu.city.sendai.jp/subway/station/station.html",
        map_link: encodeURI(
            "https://www.google.com/maps?ll=38.261176,140.868073&z=14&t=m&hl=ja&gl=JP&mapclient=embed&saddr=広瀬通駅、宮城県仙台市青葉区&daddr=宮城県仙台第二高等学校、〒980-0855+宮城県仙台市青葉区川内澱橋通１−１&dirflg=d",
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5882.778228759912!2d140.86058435136803!3d38.26325550775599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a282361aa328d%3A0x2523d42014083c91!2z5bqD54Cs6YCa6aeF44CB5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy6!3m2!1d38.262782!2d140.87550299999998!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720956678517!5m2!1sja!2sjp",
    },
    {
        id: 2,
        icon: <PiTrain size={28} />,
        point: "JR 仙台駅",
        description: "在来線 / 新幹線",
        time: 30,
        epexegesis: "JR西口",
        link: "https://www.jreast.co.jp/estation/station/info.aspx?StationCd=913",
        sub_link: "https://www.jreast-timetable.jp/timetable/list0913.html",
        extra_link: "https://www.jreast.co.jp/estation/stations/913.html",
        map_link: encodeURI(
            "https://www.google.com/maps/dir/仙台駅内郵便局、〒980-0021+宮城県仙台市青葉区中央１丁目１−１/宮城県仙台第二高等学校、〒980-0855+宮城県仙台市青葉区川内澱橋通１−１",
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8061.525342792378!2d140.86370021914342!3d38.26276443170359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a28180c510b87%3A0xb2a30b91be1ffdbc!2z5LuZ5Y-w6aeF44CB44CSOTgwLTAwMjEg5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy65Lit5aSu77yR5LiB55uu77yR4oiS77yR!3m2!1d38.2601316!2d140.88243749999998!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720956714688!5m2!1sja!2sjp",
    },
    {
        id: 3,
        icon: <FaBusSimple size={24} />,
        point: "二高・宮城県美術館前",
        time: 1,
        description: "仙台市営バス",
        link: "https://www.navi.kotsu.city.sendai.jp/dia/bustime/bus/fifty_res_noriba.cgi?FreeSelectCode=217",
        sub_link: "https://www.kotsu.city.sendai.jp/bus/index.html",
        map_link: encodeURI(
            "https://www.google.com/maps/dir/二高・宮城県美術館前（バス）、〒980-0855+宮城県仙台市青葉区川内澱橋通/宮城県仙台第二高等学校、〒980-0855+宮城県仙台市青葉区川内澱橋通１−１",
        ),
        route: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1217.3694912038427!2d140.85610630057118!3d38.26342383445764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f8a283624228353%3A0x36a5bf3753ba1e58!2z5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy65bed5YaF5r6x5qmL6YCaIOS6jOmrmOODu-WuruWfjuecjOe-juihk-mkqOWJje-8iOODkOOCue-8iQ!3m2!1d38.2631008!2d140.85608489999998!4m5!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qChIOOAkjk4MC0wODU1IOWuruWfjuecjOS7meWPsOW4gumdkuiRieWMuuW3neWGhea-seapi-mAmu-8keKIku-8kQ!3m2!1d38.263651599999996!2d140.8570603!5e0!3m2!1sja!2sjp!4v1720956753759!5m2!1sja!2sjp",
    },
];
