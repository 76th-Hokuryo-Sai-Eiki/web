import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@unpic/react";

import { GrassCard } from "@/components/grass-card";
import SectionHeader from "@/components/section-header";
import { chooseRandom } from "@/functions/utility";

function DummyCard() {
    return (
        <Card aria-hidden className="card-base py-4">
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
                <h3 className="text-lg font-bold text-default-600 sm:text-xl lg:text-2xl 2xl:text-3xl">
                    {[...new Array(5)]
                        .map(() => chooseRandom("■●◆▲★▼".split("")))
                        .join("")}
                </h3>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        aspectRatio={1}
                        className="absolute rounded-3xl object-cover p-4 dark:brightness-75"
                        layout="fullWidth"
                        src="./images/content-bg.jpg"
                    />

                    <GrassCard className="flex h-[clamp(12rem,18vw,19rem)] w-[clamp(12rem,18vw,19rem)] items-center justify-center">
                        <div>
                            <p
                                className="mt-4 text-center text-5xl text-gray-600 dark:text-gray-800 md:text-5xl xl:text-6xl 2xl:text-7xl"
                                style={{
                                    fontFamily: "Bona Nova SC",
                                }}
                            >
                                Coming Soon
                            </p>
                        </div>
                    </GrassCard>
                </div>
            </CardBody>
        </Card>
    );
}

const dummyCards = [...new Array(8)].map((_, index) => (
    <article key={index} className="inline-block w-fit min-w-fit">
        <DummyCard />
    </article>
));

export default function ContentsSection() {
    return (
        <div className="m-2">
            <SectionHeader hashlink="#contents">
                <>
                    <h2>Contents</h2>
                    <p className="mr-3 text-right text-large">近日公開</p>
                </>
            </SectionHeader>

            <div className="blurred-border border-x-1">
                <div className="simple-scrollbar flex flex-row gap-3 overflow-x-scroll py-5">
                    {dummyCards}
                </div>
            </div>
        </div>
    );
}
