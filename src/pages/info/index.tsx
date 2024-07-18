import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";
import { ReactNode } from "react";
import { FaCircleInfo, FaRegCircleQuestion } from "react-icons/fa6";

import { data } from "./data/faq";

import { FadeinSlide } from "@/components/animations";
import { Inline } from "@/components/inline";
import SectionHeader from "@/components/section-header";
import { LocationCard } from "@/pages/common/location-card";

function Abstract() {
    return (
        <div className="mt-5">
            <h1 className="text-3xl text-default-600">
                一般公開<span className="text-2xl">（出店・展示・企画)</span>
            </h1>
            <ul
                className="ml-4 mt-3 text-[1.4rem] text-default-600 sm:text-[1.7rem]"
                style={{ fontFamily: "Kode Mono" }}
            >
                <FadeinSlide>
                    <li className="flex items-center">
                        <span className="mr-2 px-3 text-tiny">■</span>
                        <Inline className="text-center">DAY 1</Inline>
                        <Inline className="ml-5 text-center xs:ml-12 xs:text-left">
                            08.31 (
                            <Inline style={{ fontFamily: "Noto Sans JP" }}>
                                土
                            </Inline>
                            )
                            <Inline className="xs:ml-8">
                                XX:XX
                                <Inline className="mx-[1px]">&ndash;</Inline>
                                XX:XX
                            </Inline>
                        </Inline>
                    </li>
                </FadeinSlide>
                <FadeinSlide>
                    <li className="my-2 flex items-center">
                        <span className="mr-2 px-3 text-tiny">■</span>
                        <Inline className="text-center">DAY 2</Inline>
                        <Inline className="ml-5 text-center xs:ml-12 xs:text-left">
                            09.01 (
                            <Inline style={{ fontFamily: "Noto Sans JP" }}>
                                日
                            </Inline>
                            )
                            <Inline className="xs:ml-8">
                                XX:XX
                                <Inline className="mx-[1px]">&ndash;</Inline>
                                XX:XX
                            </Inline>
                        </Inline>
                    </li>
                </FadeinSlide>
            </ul>
        </div>
    );
}

function Faq() {
    return (
        <div className="mt-5">
            <h1 className="text-3xl text-default-600">よくあるご質問</h1>
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
                        index,
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
                                <div className="宮城県仙台第二高等学校text-large ml-1 text-default-600">
                                    {title}
                                </div>
                            }
                        >
                            <FadeinSlide distance={10} duration={0.3}>
                                <div className="mb-3 ml-2 text-medium text-default-500">
                                    {description}
                                </div>
                            </FadeinSlide>
                        </AccordionItem>
                    ),
                )}
            </Accordion>
            <div className="px-3">
                <Divider />
            </div>
            <div className="flex">
                <p className="ml-auto w-fit px-3 text-left text-[10.5pt] text-default-600">
                    <Inline>
                        その他の疑問点についても、お近くの北陵祭実行委員までお気軽にお尋ねください。
                    </Inline>
                    <Inline>緑の法被が目印です。</Inline>
                </p>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="mt-5">
            <h1 className="text-3xl text-default-600">お問い合わせ先</h1>
            <div className="mt-3">
                <LocationCard
                    className="px-5 py-2 sm:max-w-[400px]"
                    radius="md"
                    shadow="sm"
                />
            </div>
        </div>
    );
}

export default function InfoSection() {
    return (
        <div className="m-2 flex flex-col">
            <div className="main-inner form-contents">
                <SectionHeader hashlink="#info">Info</SectionHeader>

                <Abstract />

                <Spacer y={8} />

                <Faq />

                <Spacer y={8} />

                <Contact />
            </div>
        </div>
    );
}
