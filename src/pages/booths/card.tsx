import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { ReactNode, useEffect, useState } from "react";

import { FadeinSlide } from "@/components/animations";
import { Phrase } from "@/components/inline";
import Sp from "@/components/sp";
import { imageExists } from "@/functions/utility";

export function ShopCard({
    index,
    name,
    num,
    size,
    locations,
    organization,
    description,
}: {
    index: number;
    num: number;
    name: ReactNode;
    size: number;
    locations: string[];
    organization: string;
    description: ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [posterExists, setPosterExists] = useState<boolean>(false);

    const posterURL = `./images/shops/poster/${String(num).padStart(4, "0")}.jpg`;

    useEffect(() => {
        if (loaded) return;
        setLoaded(true);

        imageExists(posterURL)
            .then(() => setPosterExists(true))
            .catch(() => {});
    }, [loaded, posterURL]);

    return (
        <article className="inline-block w-fit min-w-fit">
            <Modal
                isOpen={isOpen}
                size={["xl", "4xl"][+posterExists] as "2xl" | "3xl"}
                onClose={onClose}
            >
                <ModalContent>
                    <div className="my-12 flex flex-row items-center justify-center">
                        <div className="flex h-full w-full flex-col items-center justify-center">
                            <img
                                alt="test"
                                className={`float-start -mt-[2%] contrast-[160%]`}
                                src={`./images/shops/icon/${String(index).padStart(4, "0")}.png`}
                                style={{
                                    clipPath: "inset(2%)",
                                }}
                            />
                        </div>

                        {posterExists && (
                            <div className="w-full">
                                <img
                                    alt="test"
                                    className={`float-start`}
                                    src={posterURL}
                                    style={{
                                        clipPath: "inset(0.5%)",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </ModalContent>
            </Modal>

            <Card
                className={`card-base ${["h-[18rem]", "h-[30rem]", "h-[34rem]"][size]} ${["w-64", "w-52", "w-72"][size]} py-2`}
            >
                <CardHeader
                    className={`flex-col items-start ${["px-4", "px-3", "px-4"][size]} py-2`}
                >
                    <div className="flex-between flex w-full">
                        <div className="flex-bet flex w-full items-start gap-3">
                            <p
                                className={`min-w-max ${["text-medium", "text-small", "text-medium"][size]} font-bold text-default-600`}
                                style={{
                                    fontFamily: "Kode Mono, Noto Sans JP",
                                }}
                            >
                                {organization}
                            </p>

                            <FadeinSlide distance={20} duration={0.4}>
                                <small
                                    className="flex-fit mb-1 mt-[0.2rem] text-tiny text-default-500"
                                    style={{
                                        fontFamily: "Kode Mono, Noto Sans JP",
                                    }}
                                >
                                    {locations
                                        .flatMap((location, index) => [
                                            <Phrase key={index * 2}>
                                                {location
                                                    .split(" ")
                                                    .map((item, index) => [
                                                        <Phrase
                                                            key={index}
                                                            className="mx-0.5"
                                                        >
                                                            {item}
                                                        </Phrase>,
                                                    ])}
                                            </Phrase>,
                                            <span key={index * 2 + 1}>
                                                <Sp />
                                                <Sp />
                                            </span>,
                                        ])
                                        .slice(0, -1)}
                                </small>
                            </FadeinSlide>
                        </div>

                        <p
                            className="absolute right-1 top-0.5 text-medium"
                            style={{ fontFamily: "Kode Mono" }}
                        >
                            {num + 1}
                        </p>
                    </div>

                    <h3
                        className={`font-bold text-default-600 ${["text-xl", "text-lg", "text-xl"][size]}`}
                        id={`shop-name-${index}`}
                        style={{ fontFamily: "Zen Kaku Gothic Antique" }}
                    >
                        {name}
                    </h3>
                </CardHeader>

                <Divider />

                <CardBody
                    className={`h-fit flex-none overflow-visible ${size === 0 ? "py-2" : "py-4"} `}
                    onClick={onOpen}
                >
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
                                className={`float-start contrast-[160%] ${size === 0 ? "m-2" : ""}`}
                                src={`./images/shops/icon/${String(index).padStart(4, "0")}.png`}
                                style={{
                                    clipPath: "inset(2%)",
                                }}
                                width={size === 0 ? "38%" : "none"}
                            />
                            {size === 0 && (
                                <div
                                    className={`w-full text-justify text-small`}
                                    style={{
                                        fontFamily: "Noto Serif JP",
                                        lineBreak: "strict",
                                    }}
                                >
                                    {description}
                                </div>
                            )}
                        </div>
                    </div>
                </CardBody>

                {size >= 1 && (
                    <>
                        <Divider />

                        <CardFooter className="flex-grow items-start">
                            <FadeinSlide distance={20} duration={0.4}>
                                <div
                                    className={`w-full ${["", "text-small", "text-medium"][size]}`}
                                    style={{ fontFamily: "Noto Serif JP" }}
                                >
                                    {description}
                                </div>
                            </FadeinSlide>
                        </CardFooter>
                    </>
                )}
            </Card>
        </article>
    );
}
