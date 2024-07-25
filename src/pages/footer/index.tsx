import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/modal";
import { Switch } from "@nextui-org/switch";
import { Tooltip } from "@nextui-org/tooltip";
import { useContext } from "react";
import { BiSolidToTop } from "react-icons/bi";

import { LicenseList } from "../license";

import { Copyright } from "./copyright";
import { Logos } from "./logos";

import Hashlink from "@/components/hashlink";
import { Inline } from "@/components/inline";
import { LoadingScreenContext } from "@/context/loading-screen";

function License() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="z-10 flex flex-wrap gap-3">
                <Button radius="none" onPress={onOpen}>
                    <span className="text-default-700">LICENSES</span>
                </Button>
            </div>
            <LicenseList isOpen={isOpen} onClose={onClose} />
        </>
    );
}

function BuildId() {
    return (
        <div className="flex h-full flex-row items-end">
            <p
                className="max-w-32 pb-2 text-right text-tiny text-default-500 md:max-w-max md:text-medium"
                style={{
                    fontFamily: "Arsenal SC",
                    zoom: 1.02,
                }}
            >
                build-id:
                <Tooltip content="クリップボードにコピー">
                    <Button
                        className="m-0 ml-1 h-fit w-fit bg-inherit p-0 text-inherit"
                        data-pressed="false"
                        radius="none"
                        variant="flat"
                        onPress={() => {
                            navigator.clipboard.writeText(__BUILT_AT__);
                        }}
                    >
                        <Inline className="px-[1px]">
                            {__BUILT_AT__.match(/.{3}/g)?.join(".")}
                        </Inline>
                    </Button>
                </Tooltip>
            </p>
        </div>
    );
}

export default function Footer() {
    const { isNormal, toggleLoadingKind } = useContext(LoadingScreenContext);

    return (
        <Card
            className="rounded-b-none bg-default-100 px-[1rem] pt-2 md:px-[max(2rem,10%-100px)]"
            radius="none"
            shadow="none"
        >
            <CardBody className="grid items-center gap-4 p-0 px-2 [grid-template-columns:auto_auto] [grid-template-rows:auto_auto] sm:[grid-template-columns:auto_auto_auto]">
                <div className="row-start-1 hidden xs:block">
                    <Logos />
                </div>

                <div className="col-start-2 row-start-1 flex flex-col items-end justify-end xs:col-start-3 xs:row-start-2 sm:row-start-1 sm:-mb-2 md:-mb-4 md:mr-10 md:mt-4">
                    <Hashlink
                        className="flex flex-col justify-center text-center"
                        to="#head"
                    >
                        <p className="w-full gap-2 text-center indent-[4pt] text-small tracking-[4pt] md:text-medium">
                            TOP
                        </p>
                        <BiSolidToTop
                            className="-mt-2 text-default-700"
                            size={40 + window.innerWidth * 0.02}
                        />
                    </Hashlink>
                </div>

                <div className="col-span-2 col-start-1 row-start-1 flex flex-row gap-x-4 xs:col-span-2 xs:col-start-2 sm:col-span-1 md:gap-x-8 lg:col-start-1 lg:row-start-2">
                    <License />

                    <div>
                        <Switch
                            color="primary"
                            isSelected={isNormal}
                            size="sm"
                            onValueChange={toggleLoadingKind}
                        >
                            <p className="w-max text-default-600">
                                Loading <br className="lg:hidden" />
                                Screen
                            </p>
                        </Switch>

                        <p className="text-small text-default-500">
                            {isNormal ? "Normal" : "Simple"}
                        </p>
                    </div>
                </div>

                <div className="col-span-2 col-start-1 row-start-2 xs:col-end-3 xs:mx-0 sm:col-end-4 sm:row-start-2 lg:col-start-1 lg:col-end-4">
                    <Copyright />
                </div>

                <div className="col-span-2 col-start-2 row-start-2 hidden h-full flex-col items-end sm:flex">
                    <BuildId />
                </div>
            </CardBody>
        </Card>
    );
}
