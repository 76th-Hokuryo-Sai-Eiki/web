import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";
import { ReactNode } from "react";
import { FaCircleInfo, FaRegCircleQuestion } from "react-icons/fa6";

import { data } from "./content/faq";

import { FadeinSlide } from "@/components/animations";
import { LocationCard } from "@/components/location-card";

function Faq() {
    return (
        <div className="mt-5">
            <h1 className="text-default-600 text-3xl">よくあるご質問</h1>
            <Card className="mt-3">
                <CardBody>
                    <Accordion>
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
                                    title={
                                        <p className="text-default-600 text-large">
                                            {title}
                                        </p>
                                    }
                                >
                                    <FadeinSlide distance={10} duration={0.3}>
                                        <div className="ml-2 mb-3 text-default-500 text-medium">
                                            {description}
                                        </div>
                                    </FadeinSlide>
                                </AccordionItem>
                            )
                        )}
                    </Accordion>
                </CardBody>
                <div className="px-3">
                    <Divider />
                </div>
                <CardFooter>
                    <p className="text-small text-default-600">
                        その他の疑問点については最寄りの北陵祭実行委員
                        (緑の法被) までお尋ねください。
                    </p>
                </CardFooter>
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
