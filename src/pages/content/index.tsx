import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { FadeinSlide } from "@/components/animations";
import { GrassCard } from "@/components/grass-card";
import { chooseRandom } from "@/functions/utility";

function DummyCard() {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-small lg:text-medium 2xl:text-large uppercase font-bold text-default-600">
                    {[...new Array(5)]
                        .map(() => chooseRandom("■●◆▲★▼".split("")))
                        .join("")}
                </p>
                <small
                    className="text-tiny lg:text-small 2xl:text-medium text-default-500"
                    style={{ fontFamily: "Kode Mono" }}
                >
                    {chooseRandom(["Shop", "Shop", "Stage"])}
                </small>
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-default-600">
                    {[...new Array(5)]
                        .map(() => chooseRandom("■●◆▲★▼".split("")))
                        .join("")}
                </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage: "url(./logo.png)",
                        backgroundSize: "288px",
                        borderRadius: "16px",
                    }}
                >
                    <GrassCard className="flex justify-center items-center h-44 w-44 sm:h-52 sm:w-52 lg:h-64 lg:w-64 2xl:h-72 2xl:w-72">
                        <div>
                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl mt-4 text-center text-gray-600 dark:text-gray-800"
                                style={{
                                    fontFamily: "Bona Nova SC",
                                }}
                            >
                                Coming Soon
                            </h1>
                        </div>
                    </GrassCard>
                </div>
            </CardBody>
        </Card>
    );
}

export default function ContentsSection() {
    return (
        <div className="flex flex-col m-2">
            <div className="main-inner form-contents">
                <div className="header mb-3">
                    <FadeinSlide distance={20} duration={0.8}>
                        <h1
                            className="text-default-700"
                            style={{
                                fontSize: "28pt",
                                fontFamily: "Kode Mono",
                            }}
                        >
                            Contents
                        </h1>
                        <p className="text-right text-medium text-default-600 pr-3">
                            近日公開
                        </p>
                    </FadeinSlide>
                </div>

                <div className="blurred-border border-x-1">
                    <div className="simple-scrollbar flex flex-row gap-3  py-5">
                        {[...new Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="inline-block min-w-fit w-fit"
                            >
                                <DummyCard />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
