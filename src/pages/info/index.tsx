import type { Selection } from "@nextui-org/table";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";
import { Spacer } from "@nextui-org/spacer";
import { Key, ReactNode, useState } from "react";

import { data } from "./content/faq";

import { FadeinSlide } from "@/components/animations";
import { LocationCard } from "@/components/location-card";

function Faq() {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

    return (
        <div className="mt-5">
            <h1 className="text-default-600 text-3xl">よくあるご質問</h1>
            <Card className="mt-3">
                <CardBody>
                    <Accordion
                        selectedKeys={selectedKeys}
                        selectionMode="multiple"
                        onSelectionChange={setSelectedKeys}
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
                                index
                            ) => (
                                <AccordionItem
                                    key={index}
                                    aria-label={`Question No. ${index + 1}`}
                                    title={
                                        <FadeinSlide
                                            distance={10}
                                            duration={
                                                selectedKeys === "all" ||
                                                (selectedKeys as Set<Key>).has(
                                                    String(index)
                                                )
                                                    ? 0
                                                    : 0.6
                                            }
                                        >
                                            <p className="text-default-600 text-large">
                                                {title}
                                            </p>
                                        </FadeinSlide>
                                    }
                                >
                                    <FadeinSlide>
                                        <div className="ml-2 mb-3 text-default-500 text-medium">
                                            {description}
                                        </div>
                                    </FadeinSlide>
                                </AccordionItem>
                            )
                        )}
                    </Accordion>
                </CardBody>
            </Card>
        </div>
    );
}

function Contact() {
    return (
        <div className="mt-5">
            <h1 className="text-default-600 text-3xl">お問い合わせ先</h1>
            <div className="mt-3">
                <LocationCard
                    className="sm:max-w-[400px] px-5 py-2"
                    radius="md"
                    shadow="sm"
                />
            </div>
        </div>
    );
}

export default function InfoSection() {
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
                            Info
                        </h1>
                    </FadeinSlide>
                </div>

                <Faq />

                <Spacer y={8} />

                <Contact />
            </div>
        </div>
    );
}
