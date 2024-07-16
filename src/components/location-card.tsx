import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader, CardProps } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { ReactNode } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot, FaSignsPost } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

import { FadeinSlide } from "@/components/animations";

export function LocationCard({
    onRoute = null,
    divider = <Divider />,
    ...props
}: CardProps & { divider?: ReactNode; onRoute?: any }) {
    return (
        <Card radius="none" {...props}>
            <CardHeader className="flex gap-3">
                <Tooltip content="ルートを表示" isDisabled={!onRoute}>
                    <Button
                        disableAnimation
                        isIconOnly
                        radius="none"
                        startContent={<IoSchool size={47} />}
                        style={{
                            background: "inherit",
                            ...(!onRoute
                                ? {
                                      cursor: "default",
                                      opacity: 1,
                                  }
                                : {}),
                        }}
                        variant="flat"
                        onPress={onRoute}
                        {...(!onRoute ? { "data-pressed": "false" } : {})}
                    />
                </Tooltip>
                <div className="flex flex-col">
                    <Tooltip content="クリップボードにコピー">
                        <Button
                            className="justify-left h-fit p-0 m-0 text-md text-inherit"
                            size="sm"
                            style={{
                                background: "inherit",
                            }}
                            onPress={() => {
                                navigator.clipboard.writeText(
                                    "宮城県仙台第二高等学校"
                                );
                            }}
                        >
                            <FadeinSlide distance={10} duration={0.5}>
                                <p className="px-1">宮城県仙台第二高等学校</p>
                            </FadeinSlide>
                        </Button>
                    </Tooltip>
                    <FadeinSlide>
                        <Link
                            isExternal
                            className="px-1 text-small text-default-500"
                            href="https://sen2-h.myswan.ed.jp/"
                        >
                            sen2-h.myswan.ed.jp
                        </Link>
                    </FadeinSlide>
                </div>
            </CardHeader>
            {divider}
            <CardBody>
                <ul className="overflow-hidden">
                    <li className="inline-flex items-start">
                        <FaSignsPost className="mr-3 mt-1.5" />
                        <FadeinSlide distance={20} duration={0.5}>
                            <div>
                                <Tooltip content="クリップボードにコピー">
                                    <Button
                                        className="justify-left h-fit p-0 m-0 text-md text-inherit"
                                        size="sm"
                                        style={{
                                            background: "inherit",
                                        }}
                                        onPress={() => {
                                            navigator.clipboard.writeText(
                                                "980-8631"
                                            );
                                        }}
                                    >
                                        <p className="inline-block px-1">
                                            980-8631
                                        </p>
                                    </Button>
                                </Tooltip>
                            </div>
                        </FadeinSlide>
                    </li>

                    <li className="inline-flex items-start">
                        <Tooltip content="Google Maps で開く">
                            <Link
                                disableAnimation
                                isExternal
                                className="justify-left h-fit p-0 m-0 text-md text-inherit"
                                href={encodeURI(
                                    "https://www.google.com/maps/place/宮城県仙台第二高等学校/@38.2639163,140.8558536,17.23z/data=!3m1!5s0x5f8a283672a5ec03:0xa0c833d28ceb9651!4m6!3m5!1s0x5f8a2836682a9c3d:0x6f15d06231e808af!8m2!3d38.2636516!4d140.8570603!16s%2Fg%2F1220l780?entry=ttu"
                                )}
                                size="sm"
                                style={{
                                    background: "inherit",
                                }}
                            >
                                <FaLocationDot className="mr-3 mt-[0.35rem]" />
                            </Link>
                        </Tooltip>
                        <FadeinSlide distance={20} duration={0.5}>
                            <div>
                                <Tooltip content="クリップボードにコピー">
                                    <Button
                                        className="justify-left h-fit p-0 m-0 text-md text-inherit"
                                        size="sm"
                                        style={{
                                            background: "inherit",
                                        }}
                                        onPress={() => {
                                            navigator.clipboard.writeText(
                                                "宮城県仙台市青葉区川内澱橋通1-1"
                                            );
                                        }}
                                    >
                                        <p className="px-1">
                                            <span className="inline-block">
                                                宮城県仙台市青葉区
                                            </span>
                                            <span className="inline-block">
                                                川内澱橋通1-1
                                            </span>
                                        </p>
                                    </Button>
                                </Tooltip>
                            </div>
                        </FadeinSlide>
                    </li>

                    <li className="inline-flex items-start">
                        <BsFillTelephoneFill className="mr-3 mt-1.5" />
                        <FadeinSlide distance={20} duration={0.5}>
                            <Link
                                isExternal
                                className="text-primary"
                                href="tel:0222215626"
                            >
                                <p className="px-1">
                                    <span className="inline-block">
                                        022-221-5626
                                    </span>
                                </p>
                            </Link>
                        </FadeinSlide>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
}
