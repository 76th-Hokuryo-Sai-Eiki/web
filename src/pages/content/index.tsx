import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { CircularProgress } from "@nextui-org/progress";
import { difference } from "lodash-es";
import { Dispatch, memo, ReactNode, Suspense, useRef, useState } from "react";
import DraggableGrid, { DraggableGridHandle } from "ruuri";

import shops from "./data/shops";

import SectionHeader from "@/components/section-header";

// function DummyCard() {
//     return (
//         <Card aria-hidden className="card-base py-4">
//             <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
//                 <p className="text-small font-bold uppercase text-default-600 lg:text-medium 2xl:text-large">
//                     {[...new Array(5)]
//                         .map(() => chooseRandom("■●◆▲★▼".split("")))
//                         .join("")}
//                 </p>
//                 <small
//                     className="text-tiny text-default-500 lg:text-small 2xl:text-medium"
//                     style={{ fontFamily: "Kode Mono" }}
//                 >
//                     {chooseRandom(["Shop", "Shop", "Stage"])}
//                 </small>
//                 <h3 className="text-lg font-bold text-default-600 sm:text-xl lg:text-2xl 2xl:text-3xl">
//                     {[...new Array(5)]
//                         .map(() => chooseRandom("■●◆▲★▼".split("")))
//                         .join("")}
//                 </h3>
//             </CardHeader>
//             <CardBody className="overflow-visible py-2">
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Image
//                         className="absolute rounded-3xl p-4 dark:brightness-75"
//                         src="./images/content-bg.jpg"
//                         style={{
//                             clipPath: "inset(10px 10px 10px 10px)",
//                         }}
//                     />

//                     <GrassCard className="flex h-[clamp(12rem,18vw,19rem)] w-[clamp(12rem,18vw,19rem)] items-center justify-center">
//                         <div>
//                             <p
//                                 className="mt-4 text-center text-5xl text-gray-600 dark:text-gray-800 md:text-5xl xl:text-6xl 2xl:text-7xl"
//                                 style={{
//                                     fontFamily: "Bona Nova SC",
//                                 }}
//                             >
//                                 Coming Soon
//                             </p>
//                         </div>
//                     </GrassCard>
//                 </div>
//             </CardBody>
//         </Card>
//     );
// }

// const dummyCards = [...new Array(8)].map((_, index) => (
//     <article key={index} className="inline-block w-fit min-w-fit">
//         <DummyCard />
//     </article>
// ));

function ShopCard({
    index,
    name,
    locations,
    organization,
    description,
}: {
    index: number;
    num: number;
    name: ReactNode;
    locations: string[];
    organization: string;
    description: ReactNode;
}) {
    return (
        <article className="inline-block w-fit min-w-fit">
            <Card aria-hidden className="card-base h-[34rem] w-72 py-2">
                <CardHeader className="flex-col items-start px-4 py-2">
                    <div className="flex w-full items-end">
                        <p
                            className="items-start text-lg font-bold uppercase text-default-600"
                            style={{ fontFamily: "Kode Mono, Noto Sans JP" }}
                        >
                            {organization}
                        </p>
                        <small
                            className="mb-1 ml-4 text-tiny text-default-500"
                            style={{
                                fontFamily: "Kode Mono, Noto Sans JP",
                            }}
                        >
                            {locations.join(",")}
                        </small>
                    </div>
                    <h3
                        className="text-xl font-bold text-default-600"
                        style={{ fontFamily: "Zen Kaku Gothic Antique" }}
                    >
                        {name}
                    </h3>
                </CardHeader>

                <Divider />

                <CardBody className="h-fit flex-none overflow-visible py-4">
                    <div
                        className="relative"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="border-default-400">
                            <img
                                alt="test"
                                className="contrast-[160%]"
                                src={`./images/shops/${String(index).padStart(4, "0")}.png`}
                                style={{
                                    clipPath: "inset(4px)",
                                }}
                            />
                        </div>
                    </div>
                </CardBody>
                <Divider />

                <CardFooter className="flex-grow items-start">
                    <div
                        className="w-full"
                        style={{ fontFamily: "Noto Serif JP" }}
                    >
                        {description}
                    </div>
                </CardFooter>
            </Card>
        </article>
    );
}

let loaded = false;

const FILTER = {
    organization: {
        "1st": (x: string) => x.startsWith("1-"),
        "2nd": (x: string) => x.startsWith("2-"),
        "3rd": (x: string) => x.startsWith("3-"),
        club: (x: string) => x.endsWith("部"),
    },
    locations: {
        "1f": (x: string) => x.startsWith("1階"),
        "2f": (x: string) => x.startsWith("2階"),
        "3f": (x: string) => x.startsWith("3階"),
        outdoor: (x: string) => x.startsWith("外"),
    },
};

const shopData = shops.map(({ id, ...rest }, index) => ({
    id: String(index),
    index,

    num: id,

    ...rest,
}));

function ShopListPanel({
    selectors,
}: {
    selectors: { organization: Object; locations: Object };
}) {
    return (
        <Card className="w-fit p-2 px-4">
            <CardHeader>
                <h4 className="text-2xl">絞り込み</h4>
            </CardHeader>

            <Divider />

            <CardBody className="flex flex-row gap-4">
                <CheckboxGroup label="ORGANIZATION" {...selectors.organization}>
                    <Checkbox value="1st">1年生</Checkbox>
                    <Checkbox value="2nd">2年生</Checkbox>
                    <Checkbox value="3rd">3年生</Checkbox>
                    <Checkbox value="club">部活動</Checkbox>
                    <Checkbox value="">その他</Checkbox>
                    <Divider />
                    <Checkbox value="all">全て</Checkbox>
                </CheckboxGroup>

                <CheckboxGroup label="LOCATION" {...selectors.locations}>
                    <Checkbox value="1f">本棟1階</Checkbox>
                    <Checkbox value="2f">本棟2階</Checkbox>
                    <Checkbox value="3f">本棟3階</Checkbox>
                    <Checkbox value="outdoor">外</Checkbox>
                    <Checkbox value="">その他</Checkbox>
                    <Divider />
                    <Checkbox value="all">全て</Checkbox>
                </CheckboxGroup>
            </CardBody>
        </Card>
    );
}

const ShopList = memo(function ShopList_({
    filter,
}: {
    filter: (item: any) => boolean;
}) {
    const ref = useRef<DraggableGridHandle>(null);

    ref.current?.grid?.hide(ref.current?.grid.getItems(), {
        instant: true,
        layout: false,
        onFinish: () => {
            ref.current?.grid?.filter(filter, {
                // instant: true,
                layout: true,
            });
        },
    });

    if (!loaded) {
        throw new Promise((resolve) =>
            setTimeout(() => {
                loaded = true;
                resolve(undefined);
            }, 400),
        );
    }

    return (
        <DraggableGrid
            ref={ref}
            layoutOnInit
            className="h-[34.5rem]"
            data={shopData}
            dragEnabled={false}
            dragSort={false}
            layout={{
                // rounding: true,
                horizontal: true,
                fillGaps: true,
            }}
            layoutOnResize={true}
            renderItem={({ num, ...rest }) => {
                return (
                    <div className="mx-1">
                        <ShopCard num={num} {...rest} />
                    </div>
                );
            }}
        />
    );
});

const shopIndex = shops.map(({ organization, locations }) => ({
    organization: Object.entries(FILTER.organization)
        .filter(([_, fn]) => fn(organization))
        .map(([key, _]) => key),
    locations: Object.entries(FILTER.locations)
        .filter(([_, fn]) => locations.some((location) => fn(location)))
        .map(([key, _]) => key),
}));

function makeOnChangeValue(value: string[], setValues: Dispatch<string[]>) {
    return (selected: string[]) => {
        const diff = difference(selected, value);

        if (diff.includes("all") && selected.includes("all")) {
            setValues(["all"]);

            return;
        } else {
            selected = selected.filter((selection) => selection !== "all");
        }

        setValues(selected);
    };
}

function ShopListContainer() {
    const [organizationSelector, setOrganizationSelector] = useState(["all"]);
    const [locationSelector, setLocationSelector] = useState(["all"]);

    const selectors = {
        organization: {
            value: organizationSelector,
            onValueChange: makeOnChangeValue(
                organizationSelector,
                setOrganizationSelector,
            ),
        },
        locations: {
            value: locationSelector,
            onValueChange: makeOnChangeValue(
                locationSelector,
                setLocationSelector,
            ),
        },
    };

    function filter(item: any) {
        const id = Number(item.getElement().dataset.ruuriId);
        const index = shopIndex[id];

        return (
            selectors.organization.value.some(
                (tag: string) =>
                    tag === "all" ||
                    index.organization.includes(tag) ||
                    (tag === "" && index.organization.length === 0),
            ) &&
            selectors.locations.value.some(
                (tag: string) =>
                    tag === "all" ||
                    index.locations.includes(tag) ||
                    (tag === "" && index.locations.length === 0),
            )
        );
    }

    return (
        <>
            <ShopListPanel selectors={selectors} />

            <div className="blurred-border border-x-1">
                <div className="simple-scrollbar overflow-x-scroll py-5">
                    <div className="flex h-[34.5rem]">
                        <Suspense
                            fallback={
                                <div
                                    className="flex h-full w-full items-center justify-center backdrop-blur-2xl"
                                    style={{ zoom: 2 }}
                                >
                                    <CircularProgress
                                        aria-label="Loading..."
                                        size="lg"
                                    />
                                </div>
                            }
                        >
                            <ShopList filter={filter} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function ContentsSection() {
    return (
        <div className="m-2">
            <SectionHeader hashlink="#contents">
                <>
                    <h2>Contents</h2>
                    <p className="mr-3 text-right text-large">近日公開</p>
                </>
            </SectionHeader>

            <ShopListContainer />
        </div>
    );
}
