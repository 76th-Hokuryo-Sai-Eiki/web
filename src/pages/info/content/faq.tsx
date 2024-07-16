import HashLink from "@/components/hash-link";

export const data = [
    {
        title: "駐車場はありますか？",
        description: (
            <p>
                大変申し訳ありません。本校では開催期間中、ご来場のお客様向けの駐車場はご用意しておりません。
                <br />
                周囲の有料駐車場や公共交通機関をご利用ください。
                <br /> 本校近隣の 宮城県美術館 様 や セブンイレブン 様
                の駐車場への駐車はくれぐれもご遠慮いただきますようお願いいたします。
                <br />
                交通の詳細につきましては
                <HashLink
                    className="mx-1"
                    style={{ fontFamily: "Kode Mono" }}
                    to="#access"
                >
                    [Access]
                </HashLink>
                もご参照ください。
            </p>
        ),
    },
    {
        title: "食堂は利用できますか？",
        description: (
            <p>
                ご利用いただけます。
                <br />
                ただし量には限りがございますので、売り切れ等についてはご了承ください。
            </p>
        ),
    },
    {
        title: "上履きは必要ですか？",
        description: (
            <p>
                スリッパの貸出がございます。
                ただし土足厳禁ですのでご留意ください。
            </p>
        ),
    },
    {
        title: "所持品を失くしてしまった。/ 迷子になってしまった。",
        description: (
            <p>緑色の法被を羽織った北陵祭実行委員までお問い合わせください。</p>
        ),
    },
    {
        title: "店舗や休憩室以外での飲食は出来ますか？",
        description: (
            <p>
                水分補給に限って許可されます。ただし人混みを避け、開けた場所でお摂りください。
            </p>
        ),
    },
    {
        title: "講堂企画や店舗の写真を撮ってもよいですか？",
        description: <p>可能です。</p>,
    },
];
