import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Switch } from "@nextui-org/switch";
import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Inline } from "@/components/inline";

export default function Footer() {
    const [isSelected, setIsSelected] = useState(true);

    return (
        <Card
            className="rounded-b-none bg-default-100 px-0 pt-2 sm:px-[5%]"
            radius="none"
        >
            <CardBody>
                <div className="flex flex-col">
                    <div>
                        <Link
                            showAnchorIcon
                            anchorIcon={<FaGithub className="mx-2" size={40} />}
                            className="text-2xl"
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
                            isSelected={isSelected}
                            size="sm"
                            onValueChange={setIsSelected}
                        >
                            Loading Screen
                        </Switch>{" "}
                        <p className="text-small text-default-500">
                            {isSelected ? "Normal" : "Simple"}
                        </p>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="grid w-full grid-cols-3 items-center justify-between py-3">
                <div className="col-span-3 col-start-1 row-start-1 flex min-w-max flex-col justify-center">
                    <div className="text-center text-small text-default-600 xs:text-medium sm:text-large">
                        <p>第76回北稜祭実行委員会</p>
                        <p>映像記録部 WEB班</p>
                    </div>
                </div>
                <div className="col-start-3 row-start-1 flex h-full flex-col items-end">
                    <div className="flex h-full flex-row items-end">
                        <span className="hidden text-right text-tiny text-default-500 sm:text-medium [@media(min-width:350px)]:inline">
                            build-id:
                            <Tooltip content="コピーする">
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
