import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { GrassCard } from "@/components/grass-card";
import SectionHeader from "@/components/section-header";
import { chooseRandom } from "@/functions/utility";

function DummyCard() {
    return (
        <Card className="py-4">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <p className="text-small font-bold uppercase text-default-600 lg:text-medium 2xl:text-large">
                    {[...new Array(5)]
                        .map(() => chooseRandom("■●◆▲★▼".split("")))
                        .join("")}
                </p>
                <small
                    className="text-tiny text-default-500 lg:text-small 2xl:text-medium"
                    style={{ fontFamily: "Kode Mono" }}
                >
                    {chooseRandom(["Shop", "Shop", "Stage"])}
                </small>
                <h4 className="text-lg font-bold text-default-600 sm:text-xl lg:text-2xl 2xl:text-3xl">
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
                    <GrassCard className="flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52 lg:h-64 lg:w-64 2xl:h-72 2xl:w-72">
                        <div>
                            <h1
                                className="mt-4 text-center text-4xl text-gray-600 dark:text-gray-800 sm:text-5xl lg:text-6xl 2xl:text-7xl"
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
        <div className="m-2 flex flex-col">
            <div className="main-inner form-contents">
                <SectionHeader hashlink="#contents">Contents</SectionHeader>

                <div className="blurred-border border-x-1">
                    <div className="simple-scrollbar flex flex-row gap-3 py-5">
                        {[...new Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="inline-block w-fit min-w-fit"
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
