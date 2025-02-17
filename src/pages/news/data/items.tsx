import { Spacer } from "@nextui-org/spacer";

import Hashlink from "@/components/hashlink";

export default [
    {
        date: "2024.05.15",
        title: "今年度のメインテーマが決定しました",
        description: (
            <div>
                <h4 className="text-xl">【沸湧】 (わくわく･フツヨウ)</h4>
                <Spacer y={2} />
                <div className="indent-3">
                    <p className="text-medium">
                        「二高生から『湧』き出る無限の創造力や人間力で、参加する全ての人の秘めた好奇心が大いに『沸』く北陵祭にしたい」という思いから。
                        <small>
                            <span className="mx-1">&mdash;</span>
                            北実通信 No. 3 より
                        </small>
                    </p>

                    <p className="mt-0.5 text-medium">
                        たくさんのご応募ありがとうございました！
                    </p>
                </div>
            </div>
        ),
    },
    {
        date: "2024.07.31",
        title: "公式ウェブサイトを開設しました",
        description: null,
    },
    {
        date: "2024.08",
        title: "出店・展示 についての情報を掲載しました",
        description: (
            <p className="text-large">
                詳しくは
                <Hashlink
                    className="hashlink mx-1"
                    style={{ fontFamily: "Kode Mono" }}
                    to="#booths"
                >
                    Booths
                </Hashlink>
                をご覧ください。
            </p>
        ),
    },
];
