import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Divider } from "@nextui-org/divider";
import { ReactNode } from "react";

import data from "./data/items";

import { FadeinSlide } from "@/components/animations";
import SectionHeader from "@/components/section-header";

export default function NewsSection() {
    const allSelected =
        new URLSearchParams(window.location.search).get("news") === "all";

    return (
        <div className="m-2">
            <SectionHeader hashlink="#news">
                <h2>News</h2>
            </SectionHeader>

            <div
                className="simple-scrollbar mt-3 h-[300px] overflow-y-scroll sm:h-[240px] sm:overflow-y-visible"
                style={allSelected ? { height: "max-content" } : {}}
            >
                <Accordion
                    className="w-full bg-opacity-50"
                    selectedKeys={allSelected ? "all" : undefined}
                    variant="light"
                >
                    {data.map(
                        (
                            {
                                date,
                                title,
                                description,
                            }: {
                                date: ReactNode;
                                title: ReactNode;
                                description: ReactNode;
                            },
                            index: number,
                        ) => (
                            <AccordionItem
                                key={`news-item-${index}`}
                                HeadingComponent={"h3"}
                                aria-label={`News No.${index + 1}`}
                                className="overflow-y-clip opacity-100"
                                hideIndicator={!description}
                                isDisabled={!description}
                                title={
                                    <FadeinSlide distance={40} duration={0.8}>
                                        <span className="mb-2 flex flex-col sm:mb-0 sm:flex-row sm:items-end sm:gap-8">
                                            <span
                                                className="text-3xl text-default-600"
                                                style={{
                                                    fontFamily: "Arsenal SC",
                                                }}
                                            >
                                                {date}
                                            </span>
                                            <span className="text-xl text-default-600 sm:absolute sm:left-40 sm:top-0 sm:text-2xl">
                                                {title}
                                            </span>
                                        </span>
                                    </FadeinSlide>
                                }
                            >
                                <div className="px-6 text-default-500">
                                    {description}
                                </div>
                            </AccordionItem>
                        ),
                    )}
                </Accordion>
                <div className="px-3">
                    <Divider />
                </div>
            </div>
        </div>
    );
}
