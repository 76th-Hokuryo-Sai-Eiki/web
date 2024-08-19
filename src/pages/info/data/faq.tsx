import Hashlink from "@/components/hashlink";
import { Phrase } from "@/components/inline";

export default [
    {
        title: "駐車場はありますか？",
        description: (
            <p>
                <Phrase>
                    大変申し訳ありません。本校では開催期間中、ご来場のお客様向けの駐車場はご用意しておりません。
                </Phrase>
                <br />
                <Phrase>
                    周囲の有料駐車場や公共交通機関をご利用ください。
                </Phrase>
                <br />
                <Phrase>
                    本校近隣の 宮城県美術館 様 や セブンイレブン 様
                    の駐車場への駐車はくれぐれもご遠慮いただきますようお願いいたします。
                </Phrase>
                <br />
                <Phrase>
                    交通の詳細につきましては
                    <Hashlink
                        className="hashlink mx-1"
                        style={{ fontFamily: "Kode Mono" }}
                        to="#access"
                    >
                        Access
                    </Hashlink>
                    もご参照ください。
                </Phrase>
            </p>
        ),
    },
    {
        title: "食堂は利用できますか？",
        description: (
            <p>
                <Phrase>ご利用いただけます。</Phrase>
                <br />
                <Phrase>
                    ただし量には限りがございますので、売り切れ等についてはご了承ください。
                </Phrase>
            </p>
        ),
    },
    {
        title: "上履きは必要ですか？",
        description: (
            <p>
                <Phrase>
                    <Phrase>はい。</Phrase>
                    <Phrase>
                        お手数ですが、スリッパ等の上履きを持参ください。
                    </Phrase>
                </Phrase>
                <br />
                <Phrase>
                    土足の類はくれぐれもなさいませんようお願い申し上げます。
                </Phrase>
            </p>
        ),
    },
    {
        title: "所持品を失くしてしまいました...",
        description: <p>最寄りの北陵祭実行委員までお問い合わせください。</p>,
    },
    {
        title: "店舗や休憩室以外での飲食は出来ますか？",
        description: (
            <p>
                <Phrase>水分補給に限って許可いたします。</Phrase>
                <br />
                <Phrase>
                    ただし人混みを避け、開けた場所でお摂りください。
                </Phrase>
            </p>
        ),
    },
    {
        title: "講堂企画や店舗の写真を撮ってもよいですか？",
        description: (
            <p>
                <Phrase>はい。</Phrase>
                <br />
                <Phrase>
                    ただし、SNS
                    等の不特定多数が閲覧できるものへの投稿はご遠慮ください。
                </Phrase>
            </p>
        ),
    },
];
