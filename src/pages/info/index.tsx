import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ReactNode } from "react";

import { data } from "./faq";

import { FadeinSlide } from "@/components/animations";

function Faq() {
    return (
        <div>
            <h1 className="text-default-600 text-3xl">よくあるご質問</h1>
            <div>
                <Accordion selectionMode="multiple">
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
                                    <p className="text-default-600">{title}</p>
                                }
                            >
                                <div className="ml-2 mb-3 text-default-500">
                                    {description}
                                </div>
                            </AccordionItem>
                        )
                    )}
                </Accordion>
            </div>
        </div>
    );
}

export default function InfoSection() {
    return (
        <div className="flex flex-col m-2">
            <div className="main-inner form-contents">
                <div className="header mb-3">
                    <FadeinSlide distance={20} duration="0.8s">
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
            </div>
        </div>
    );
}
