import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import { Phrase } from "@/components/inline";
import SectionHeader from "@/components/section-header";

export default function MessagesSection() {
    return (
        <div>
            <SectionHeader hashlink="#message">
                <h2>Message</h2>
            </SectionHeader>

            <div className="w-ful mt-5 grid grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
                <Card className="card-base mt-5 h-fit max-h-72 w-full px-2 py-1 xl:max-h-none">
                    <CardBody
                        className="simple-scrollbar indent-4 text-small"
                        style={{
                            fontFamily: "Noto Serif JP",
                            lineBreak: "strict",
                        }}
                    >
                        <p>
                            第76回北陵祭にお越しいただき、誠にありがとうございます。
                            心から歓迎を申し上げます。
                        </p>
                        <p>
                            二高生がそれぞれの時代に力を合わせ作り上げ、伝統をつないできた北陵祭を今年も開催できることに喜びを感じています。
                            この日のために準備してきた生徒はもちろん、ご協力いただきました御家族の皆様、同窓生や地域の方々をはじめ、二高に関わる全ての方に改めて感謝いたします。
                        </p>
                        <p>
                            今年の北陵祭のテーマは、「沸湧」です。
                            私は「ワクワク」と読みたいのですが、まさに、ワクワク（これから楽しいことが起きると期待）して来場した皆様に、二高生の結束力と創造力で生み出す「湧き出る」エネルギーを感じていただけると幸いです。
                        </p>
                        <p>
                            学芸部や愛好会の活動で積み上げてきた成果の発表、盛り上がるステージ企画、全クラスが参加する各教室での出店をはじめ、アイデアと製作技術を駆使したモニュメントや装飾に至るまで、二高生全員で作ってきたものに、ご来場の皆様が一緒に参加していただくことで、今年の北陵祭が完成します。第76回の北陵祭がどんなものになるかワクワクしています。
                        </p>
                        <p>
                            なお、感染症の防止、食品衛生についての対策をしておりますが、皆様にもご協力いただき、最後までごゆっくりお楽しみください。
                        </p>
                    </CardBody>

                    <Divider />

                    <CardHeader className="text-3xl text-default-600">
                        <p className="w-full text-right text-medium">
                            <Phrase>宮城県仙台第二高等学校 校長</Phrase>
                            <Phrase className="ml-3.5">高橋 賢</Phrase>
                        </p>
                    </CardHeader>
                </Card>

                <Card className="card-base mt-5 h-fit max-h-72 w-full px-2 py-1 xl:max-h-none">
                    <CardBody
                        className="simple-scrollbar indent-4 text-small"
                        style={{
                            fontFamily: "Noto Serif JP",
                            lineBreak: "strict",
                        }}
                    >
                        <p>
                            第76回北陵祭のテーマは、「沸湧」です。「わくわく」、「ふつよう」と読みます。
                            このテーマには、「二高生から『湧』き出る無限の創造力や人間力で、参加する全ての人の秘めた好奇心が、大いに『沸』く北陵祭にしたい」という想いが込められています。
                        </p>
                        <p>
                            今年は、調理品販売も含めた各団体の出店、ミス二高や復活した猛者二高などの講堂企画、毎年好評の記念品販売、限定数の景品が貰えるワードラリーなど、様々な催し物がある北陵祭となっております。
                            <br />
                            二高生は、この北陵祭のために、一生懸命、試行錯誤しながら準備を進めています。ぜひ、それを当日感じ取って楽しんでいただきたいと思います。
                        </p>
                        <p>
                            このホームページを見たあなたは、きっと北陵祭に対する好奇心、二高に対する好奇心が沸々と湧いてきたことでしょう。北陵祭にぜひ足を運んでいただき、二高の新たな魅力を感じていただけたら幸いです。{" "}
                        </p>
                    </CardBody>

                    <Divider />

                    <CardHeader className="text-3xl text-default-600">
                        <p className="w-full text-right text-medium">
                            <Phrase>第76代北陵祭実行委員長</Phrase>
                            <Phrase className="ml-3.5">遠藤嵩治</Phrase>
                        </p>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
