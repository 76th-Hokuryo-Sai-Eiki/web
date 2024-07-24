import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Switch } from "@nextui-org/switch";
import { Tooltip } from "@nextui-org/tooltip";
import { useContext } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BiSolidToTop } from "react-icons/bi";

import Hashlink from "@/components/hashlink";
import { Logo, NextUILogo, ReactLogo, ViteLogo } from "@/components/icons";
import { Inline } from "@/components/inline";
import { LoadingScreenContext } from "@/context/loading-screen";

export default function Footer() {
    const { isNormal, toggleLoadingKind } = useContext(LoadingScreenContext);

    return (
        <Card
            className="rounded-b-none bg-default-100 px-0 pt-2 sm:px-[0px] md:px-[max(2rem,10%-100px)]"
            radius="none"
            shadow="none"
        >
            <CardBody className="overflow-visible py-0">
                <div className="grid gap-x-4 [grid-template-columns:min-content_auto] sm:[grid-template-rows:auto_auto]">
                    <div className="row-start-1 sm:row-span-2">
                        <div className="hidden w-min xs:block">
                            <p
                                className="text-large"
                                style={{ fontFamily: "Kode Mono" }}
                            >
                                Powered by:
                            </p>
                            <ul className="flex flex-row gap-4">
                                <li>
                                    <Link
                                        isExternal
                                        color="foreground"
                                        href="https://nextui.org/"
                                    >
                                        <NextUILogo
                                            className="-mr-9"
                                            height={50}
                                        />
                                    </Link>
                                </li>
                                <li className="hidden sm:block">
                                    <ul className="flex flex-col gap-1">
                                        <li className="-my-1">
                                            <Link
                                                isExternal
                                                className="text-xl"
                                                color="foreground"
                                                href="https://react.dev/"
                                                style={{
                                                    fontFamily: "Kode Mono",
                                                }}
                                            >
                                                <ReactLogo
                                                    className="mr-1.5"
                                                    height={20}
                                                />
                                                React
                                            </Link>
                                        </li>
                                        <li className="-my-1">
                                            <Link
                                                isExternal
                                                className="text-xl"
                                                color="foreground"
                                                href="https://react-icons.github.io/react-icons/"
                                                style={{
                                                    fontFamily: "Kode Mono",
                                                }}
                                            >
                                                <ViteLogo
                                                    className="ml-0.5 mr-1.5"
                                                    height={20}
                                                />
                                                Vite
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p className="text-tiny text-default-500">
                                We do <small>NOT</small> have any official
                                association or endorsement with these products.
                            </p>
                        </div>
                    </div>

                    <div className="col-start-2 row-start-2 mt-auto xs:row-start-1 sm:row-start-2 sm:mb-2 sm:mt-3 md:col-start-1 md:row-start-3 md:mb-6 md:mt-0">
                        <Switch
                            color="primary"
                            isSelected={isNormal}
                            size="sm"
                            onValueChange={toggleLoadingKind}
                        >
                            <p className="w-max text-default-600">
                                <Inline>Loading Screen</Inline>
                            </p>
                        </Switch>
                        <p className="text-small text-default-500">
                            {isNormal ? "Normal" : "Simple"}
                        </p>
                    </div>

                    <div className="col-span-2 col-start-1 row-start-1 ml-4 flex flex-col justify-start xs:row-start-2 xs:ml-0 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:items-end">
                        <ul className="my-4 whitespace-pre-wrap text-default-600 [line-height:1.2rem] sm:my-0">
                            <li className="mb-2">
                                <p className="block w-fit">
                                    <span>
                                        &quot;
                                        <Link
                                            className="text-small text-inherit [line-height:inherit]"
                                            href="https://fontawesome.com/"
                                        >
                                            Font Awesome
                                        </Link>
                                        &quot; icons by Fonticons, Inc.
                                        <Inline>
                                            is licensed under
                                            <Link
                                                className="ml-1 text-small text-inherit [line-height:inherit]"
                                                href="https://creativecommons.org/licenses/by/4.0/"
                                            >
                                                CC BY 4.0
                                            </Link>
                                            .
                                        </Inline>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className="block">
                                    <span>
                                        &quot;
                                        <Link
                                            isExternal
                                            className="text-small text-inherit [line-height:inherit]"
                                            href="https://microsoft.github.io/vscode-codicons/dist/codicon.html"
                                        >
                                            Codicons
                                        </Link>
                                        &quot; by
                                        <Link
                                            isExternal
                                            className="mx-1 text-small text-inherit [line-height:inherit]"
                                            href="https://github.com/microsoft"
                                        >
                                            Microsoft
                                        </Link>
                                        <Inline>
                                            is licensed under
                                            <Link
                                                isExternal
                                                className="ml-1 text-small text-inherit [line-height:inherit]"
                                                href="https://creativecommons.org/licenses/by/4.0/"
                                            >
                                                CC BY 4.0
                                            </Link>
                                            .
                                        </Inline>
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-start-2 row-start-2 flex flex-col items-end justify-end xs:row-start-1 sm:row-start-2 sm:-mb-2 md:-mb-4 md:mr-10 md:mt-4">
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
                </div>
            </CardBody>

            <CardFooter
                className="bottom-0 grid w-full grid-cols-3 items-center justify-between p-0 md:absolute md:right-0"
                style={{
                    fontFamily: "Zen Kaku Gothic Antique",
                    zoom: 1.07,
                }}
            >
                <div className="col-span-3 col-start-1 row-start-1 flex min-w-max flex-col justify-center">
                    <div className="text-center text-small text-default-600 xs:text-medium sm:text-large">
                        <p className="-mb-1">
                            <small>
                                <Inline>仙台第二高等学校</Inline>
                            </small>
                            <Inline className="ml-2 mr-1.5 text-[1.4rem]">
                                第76回
                            </Inline>
                            北稜祭実行委員会
                        </p>
                        <p className="text-tiny">
                            広報局 映像記録部 WEB班 / 協力: 美術部
                        </p>
                        <div>
                            <p className="inline-flex items-center text-left">
                                <Hashlink className="mr-1" to="#head">
                                    <Logo size={24} />
                                </Hashlink>
                                <small className="inline-flex items-center">
                                    <AiOutlineCopyright className="mx-1 -mb-0.5" />
                                    2024 76th Hokuryo-sai Eiki &ndash;
                                    <Link
                                        isExternal
                                        className="ml-1 text-[10.5pt] text-default-600"
                                        href="https://opensource.org/license/mit"
                                    >
                                        MIT License
                                    </Link>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 row-start-1 flex h-full flex-col items-end">
                    <div className="flex h-full flex-row items-end">
                        <span className="hidden max-w-32 pb-2 text-right text-tiny text-default-500 md:max-w-max md:text-medium [@media(min-width:500px)]:inline">
                            build-id:
                            <Tooltip content="クリップボードにコピー">
                                <Button
                                    className="m-0 ml-1 h-fit w-fit bg-inherit p-0 text-inherit"
                                    data-pressed="false"
                                    radius="none"
                                    variant="flat"
                                >
                                    <Inline className="px-[1px]">
                                        {__BUILT_AT__.match(/.{3}/g)?.join(".")}
                                    </Inline>
                                </Button>
                            </Tooltip>
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
