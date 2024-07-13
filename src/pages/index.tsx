
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot, FaSignsPost } from "react-icons/fa6";

import { Fadein, FadeinBottom } from "@/components/animations";
import { TimeDisplay } from "@/components/time-display";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";
import { Title } from "./index/title";

export function CountDown() {
    const [count, { startCountdown }] = useCountdown({
        countStart: Math.floor(
            (siteConfig.eventDate.getTime() - Date.now()) / 10
        ),
        intervalMs: 10,
    });

    useEffect(startCountdown);

    const milliseconds = count * 10;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return (
        <div>
            <TimeDisplay
                seconds={seconds % 60}
                minutes={minutes % 60}
                hours={hours % 24}
                days={days}
                compact={window.innerWidth > 1536 || window.innerWidth < 600}
            />
        </div>
    );
}

export default function () {
    return (
        <Fadein duration="0.3s" once={true}>
            <DefaultLayout>
                <Fadein duration="0.5s" once={true}>
                    <Title />

                    <section className="flex flex-col m-2">
                        <div className="main-inner form-contents">
                            <div>
                                <FadeinBottom duration="0.8s" distance="30px">
                                    <h1
                                        className="header mb-3"
                                        style={{
                                            fontSize: "28pt",
                                            fontFamily: "Kode Mono",
                                        }}
                                    >
                                        Access
                                    </h1>
                                </FadeinBottom>

                                <FadeinBottom duration="0.8s" distance="50px">
                                    <div className="" id="google-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.6828428356785!2d140.85490131569682!3d38.263661191653135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1492608506872"
                                            className="h-[50vh]"
                                            width="100%"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </FadeinBottom>

                                <p>
                                    <FadeinBottom
                                        duration="0.5s"
                                        distance="20px"
                                    >
                                        <span className="inline-flex items-center">
                                            <FaSignsPost className="mr-3" />
                                            980-8631
                                        </span>
                                    </FadeinBottom>
                                    <br />

                                    <FadeinBottom
                                        duration="0.5s"
                                        distance="20px"
                                    >
                                        <span className="inline-flex items-center">
                                            <FaLocationDot className="mr-3" />
                                            宮城県仙台市青葉区川内澱橋通1
                                        </span>
                                    </FadeinBottom>
                                    <br />

                                    <FadeinBottom
                                        duration="0.5s"
                                        distance="20px"
                                    >
                                        <span className="inline-flex items-center">
                                            <BsFillTelephoneFill className="mr-3" />
                                            <a
                                                className="text-primary"
                                                href="tel:0222215626"
                                            >
                                                022-221-5626
                                            </a>
                                        </span>
                                    </FadeinBottom>
                                    <br />
                                </p>
                                <section>
                                    <h2 id="train">
                                        <i
                                            className="fa fa-subway fa-fw"
                                            aria-hidden="true"
                                        ></i>
                                        公共交通機関でお越しの方
                                    </h2>
                                    {/* <dl>
              <dt>仙台市地下鉄東西線 国際センター駅</dt>
              <dd>西1出口より、本校まで徒歩5分。<a className="button searchRoots" onClick="searchRoots('国際センター駅')">ルート検索する</a></dd>
              <dt>仙台市地下鉄南北線 広瀬通駅</dt>
              <dd>西5出口より、本校まで徒歩20分。<a className="button searchRoots" onClick="searchRoots('広瀬通駅')">ルート検索する</a></dd>
              <dt>JR 仙台駅</dt>
              <dd>本校まで徒歩30分。<a className="button searchRoots" onClick="searchRoots('仙台駅')">ルート検索する</a></dd>
            </dl> */}
                                    <p>
                                        ※
                                        <a className="button">ルート検索する</a>
                                        というボタンをクリック(タップ)すると、ページ上部の
                                        <a href="#google-map">Google Map</a>
                                        に結果が表示されます。
                                    </p>
                                    <h2 id="car">
                                        <i
                                            className="fa fa-car fa-fw"
                                            aria-hidden="true"
                                        ></i>
                                        お車でお越しの方
                                    </h2>
                                    <p>
                                        本校敷地内に駐車場はございません。近隣の有料駐車場をご利用ください。
                                        <strong>
                                            本校敷地及び宮城県美術館様駐車場への駐車はご遠慮ください。
                                        </strong>
                                    </p>
                                    <dl>
                                        <dt>
                                            <a
                                                href="http://www.aobayama.jp/access/parking.html"
                                                target="_blank"
                                            >
                                                せんだい青葉山交流広場駐車場
                                                <i
                                                    className="fa fa-external-link"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </dt>
                                        <dd>
                                            本校まで徒歩3分。仙台国際センター隣に設けられている駐車場です。詳細はリンク先をご覧ください。
                                        </dd>
                                    </dl>
                                    <h2 id="bycycle">
                                        <i
                                            className="fa fa-bicycle fa-fw"
                                            aria-hidden="true"
                                        ></i>
                                        自転車でお越しの方
                                    </h2>
                                    <p>
                                        来場者の方専用の駐輪場がございますので、係の指示に従ってご利用ください。
                                    </p>
                                </section>
                            </div>
                        </div>
                    </section>
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
}
