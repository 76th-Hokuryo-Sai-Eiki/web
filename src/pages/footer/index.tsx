import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Switch } from "@nextui-org/switch";
import { Tooltip } from "@nextui-org/tooltip";
import { useContext } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import HashLink from "@/components/hash-link";
import { Logo } from "@/components/icons";
import { Inline } from "@/components/inline";
import { LoadingScreenContext } from "@/context/loading-screen";

export default function Footer() {
    const { isNormal, toggleLoadingKind } = useContext(LoadingScreenContext);

    return (
        <Card
            className="rounded-b-none bg-default-100 px-0 pt-2 sm:px-[5%]"
            radius="none"
            shadow="none"
        >
            <CardBody>
                <div className="grid grid-cols-2">
                    <div className="col-start-1 flex flex-col">
                        <div>
                            <Link
                                showAnchorIcon
                                anchorIcon={
                                    <FaGithub className="mx-2" size={40} />
                                }
                                className="xm:text-xl text-lg sm:text-2xl"
                                color="foreground"
                                href="https://github.com/76th-Hokuryo-Sai-Eiki/web"
                                style={{ fontFamily: "Kode Mono" }}
                            >
                                GitHub
                            </Link>
                        </div>

                        <div className="mt-3">
                            <Switch
                                color="primary"
                                isSelected={isNormal}
                                size="sm"
                                onValueChange={toggleLoadingKind}
                            >
                                Loading Screen
                            </Switch>{" "}
                            <p className="text-small text-default-500">
                                {isNormal ? "Normal" : "Simple"}
                            </p>
                        </div>
                    </div>
                    <div className="col-start-2 flex flex-col items-end">
                        <div>
                            <p className="inline-flex items-center text-default-600">
                                <span className="text-medium">
                                    &quot;
                                    <Link
                                        className="text-small text-default-600"
                                        href="https://fontawesome.com/"
                                    >
                                        Font Awesome
                                    </Link>
                                    &quot; icons by Fonticons, Inc. is licensed
                                    under
                                    <Link
                                        className="ml-1 text-small text-default-600"
                                        href="https://creativecommons.org/licenses/by/4.0/"
                                    >
                                        CC BY 4.0
                                    </Link>
                                    .
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="grid w-full grid-cols-3 items-center justify-between p-0 pt-3">
                <div className="col-span-3 col-start-1 row-start-1 flex min-w-max flex-col justify-center">
                    <div className="text-center text-small text-default-600 xs:text-medium sm:text-large">
                        <p>第76回北稜祭実行委員会</p>
                        <p>映像記録部 WEB班</p>
                        <div>
                            <p className="inline-flex items-center text-left">
                                <HashLink className="mr-1" to="#head">
                                    <Logo size={24} />
                                </HashLink>
                                <small className="inline-flex items-center">
                                    Copyright
                                    <AiOutlineCopyright className="mx-1 -mb-0.5" />{" "}
                                    2024 76th Hokuryo-sai Eiki
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 row-start-1 flex h-full flex-col items-end">
                    <div className="flex h-full flex-row items-end">
                        <span className="hidden max-w-32 pb-2 text-right text-tiny text-default-500 md:max-w-max md:text-medium [@media(min-width:480px)]:inline">
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
