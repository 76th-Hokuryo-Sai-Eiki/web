import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";
import { Selection } from "@nextui-org/table";
import { ReactNode, useRef } from "react";

import data from "./data/faq";

import { FadeinSlide } from "@/components/animations";
import { FaCircleInfo, FaRegCircleQuestion } from "@/components/icons";
import { Phrase } from "@/components/inline";
import SectionHeader from "@/components/section-header";
import Sp from "@/components/sp";
import { siteConfig } from "@/config/site";
import { scrollIntoViewIfNeeded } from "@/functions/scroll";
import { LocationCard } from "@/pages/common/location-card";

function Abstract() {
    return (
        <article className="mt-5">
            <h3 className="text-3xl text-default-600">
                一般公開
                <Phrase className="text-2xl">（出店・展示・企画)</Phrase>
            </h3>
            <ul
                className="ml-4 mt-3 text-[1.4rem] text-default-600 sm:text-[1.7rem]"
                style={{ fontFamily: "Kode Mono" }}
            >
                {Object.entries(siteConfig.event.schedule).map(
                    ([_, { date, day, start, end }], index) => (
                        <FadeinSlide key={index}>
                            <li className="flex items-center">
                                <span className="mr-2 px-3 text-tiny">■</span>
                                <Phrase className="text-center">
                                    <h4>
                                        DAY
                                        <Sp />
                                        {index + 1}
                                    </h4>
                                </Phrase>
                                <Phrase className="ml-5 text-center xs:ml-12 xs:text-left">
                                    {date.replaceAll("/", ".")}
                                    <Sp />(
                                    <Phrase
                                        className="[vertical-align:-0.1rem]"
                                        style={{ fontFamily: "Noto Sans JP" }}
                                    >
                                        {day}
                                    </Phrase>
                                    )
                                    <Phrase className="xs:ml-8">
                                        {start}
                                        <Phrase className="mx-[3px]">
                                            &ndash;
                                        </Phrase>
                                        {end}
                                    </Phrase>
                                </Phrase>
                            </li>
                        </FadeinSlide>
                    ),
                )}
            </ul>
        </article>
    );
}

function Faq() {
    const containerRef = useRef<HTMLDivElement>(null);

    const allSelected =
        new URLSearchParams(window.location.search).get("faq") === "all";

    const onSelectionChange = (_selection: Selection) => {
        const selection = _selection as unknown as Set<number>;

        if (selection.size == 0) return;

        const index = [...selection.values()][0];
        const item = document.getElementById(`faq-item-${index}`);

        if (!item) return;

        if (!containerRef.current) return;

        setTimeout(() => {
            if (!containerRef.current) return;

            scrollIntoViewIfNeeded(containerRef.current, {
                offsetTop: siteConfig.navbarHeight + 30,
                behavior: "smooth",
            });

            scrollIntoViewIfNeeded(item, {
                root: containerRef.current,
                offsetTop: 0,
                behavior: "smooth",
            });
        }, 200);
    };

    return (
        <article className="mt-5 w-full">
            <h3 className="text-3xl text-default-600">よくあるご質問</h3>
            <div
                ref={containerRef}
                className="simple-scrollbar mt-3 h-[540px] overflow-y-scroll sm:overflow-y-visible md:h-[500px]"
                style={allSelected ? { height: "max-content" } : {}}
            >
                <Accordion
                    selectedKeys={allSelected ? "all" : undefined}
                    onSelectionChange={onSelectionChange}
                >
                    {data.map(
                        (
                            {
                                title,
                                description,
                            }: {
                                title: ReactNode;
                                description: ReactNode;
                            },
                            index,
                        ) => (
                            <AccordionItem
                                key={index}
                                HeadingComponent={"h4"}
                                aria-label={`Question No.${index + 1}`}
                                classNames={{
                                    title: "ml-1 text-large text-default-600 title",
                                    content: "pt-0",
                                }}
                                id={`faq-item-${index}`}
                                indicator={({ isOpen }) =>
                                    isOpen ? (
                                        <FaCircleInfo
                                            className="rotate-90"
                                            size={20}
                                        />
                                    ) : (
                                        <FaRegCircleQuestion size={20} />
                                    )
                                }
                                title={title}
                            >
                                <FadeinSlide distance={10} duration={0.5}>
                                    <span className="mb-3 ml-2 flex text-medium text-default-500">
                                        {description}
                                    </span>
                                </FadeinSlide>
                            </AccordionItem>
                        ),
                    )}
                </Accordion>
                <div className="px-3">
                    <Divider />
                </div>
                <div className="flex">
                    <p className="ml-auto w-fit px-3 text-left text-[0.8rem] text-default-500">
                        <Phrase>
                            その他の疑問点についても、お近くの北陵祭実行委員までお気軽にお尋ねください。
                        </Phrase>
                        <Phrase>法被が目印です。</Phrase>
                    </p>
                </div>
            </div>
        </article>
    );
}

function Contact() {
    return (
        <div className="mt-5">
            <h3 className="text-3xl text-default-600">お問い合わせ先</h3>
            <div className="mt-3">
                <LocationCard
                    className="px-5 py-2 sm:max-w-[400px]"
                    radius="md"
                    shadow="sm"
                    style={{
                        opacity: "90%",
                    }}
                />
            </div>
        </div>
    );
}

export default function InfoSection() {
    return (
        <div className="m-2">
            <SectionHeader hashlink="#info">
                <h2>Info</h2>
            </SectionHeader>

            <Abstract />

            <Spacer y={20} />

            <Faq />

            <Spacer y={8} />

            <Contact />
        </div>
    );
}
