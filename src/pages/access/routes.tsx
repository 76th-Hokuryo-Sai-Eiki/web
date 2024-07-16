import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { User } from "@nextui-org/user";
import { ReactNode, useCallback } from "react";
import { FaCarAlt, FaWalking } from "react-icons/fa";
import { FaRoute, FaTrainSubway } from "react-icons/fa6";
import { MdLocalParking, MdPedalBike } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

import carRoute, { columns as carColumns } from "./contents/car.tsx";
import publicRoute, { columns as publicColumns } from "./contents/public.tsx";

import { FadeinSlide } from "@/components/animations.tsx";
import { Inline } from "@/components/inline.tsx";

function builder(item: any, key: any, handler: any) {
    const cellValue = item[key];

    switch (key) {
        case "point":
            return (
                <User
                    avatarProps={{
                        radius: "lg",
                        showFallback: true,
                        fallback: item.icon,
                    }}
                    description={
                        <FadeinSlide>
                            <Link
                                isExternal
                                className="text-tiny text-default-400 opacity-100"
                                href={item.sub_link}
                                isDisabled={!item.sub_link}
                            >
                                {item.description}
                            </Link>
                        </FadeinSlide>
                    }
                    name={
                        <Link
                            isExternal
                            className="text-small text-inherit opacity-100"
                            href={item.link}
                            isDisabled={!item.link}
                        >
                            {cellValue}
                        </Link>
                    }
                    onClick={() => {
                        handler(item.route);
                    }}
                />
            );
        case "time":
            return (
                <div className="flex flex-col">
                    <p className="text-bold text-sm">
                        <span className="inline-flex items-center">
                            <FaWalking className="mr-1" />
                            <span>{cellValue} min</span>
                        </span>
                    </p>
                    <p className="text-bold text-tiny text-default-400">
                        <FadeinSlide>
                            <Link
                                isExternal
                                className="text-small text-default-400 opacity-100"
                                href={item.extra_link}
                                isDisabled={!item.extra_link}
                            >
                                {item.epexegesis}
                            </Link>
                        </FadeinSlide>
                    </p>
                </div>
            );
        case "actions":
            return (
                <div className="relative flex items-center gap-2">
                    <Tooltip content="ルートを表示">
                        <Button
                            isIconOnly
                            className="text-lg text-default-400 cursor-pointer active:opacity-50"
                            startContent={
                                <FaRoute className="mb-2" size={20} />
                            }
                            style={{
                                background: "inherit",
                            }}
                            variant="flat"
                            onPress={() => {
                                handler(item.route);
                            }}
                        />
                    </Tooltip>
                    <Tooltip content="Google Maps で開く">
                        <Link
                            isExternal
                            showAnchorIcon
                            anchorIcon={
                                <SiGooglemaps className="mb-2" size={24} />
                            }
                            className="text-lg text-default-400 cursor-pointer active:opacity-50"
                            href={item.map_link}
                        />
                    </Tooltip>
                </div>
            );
        default:
            return cellValue;
    }
}

function TopContent({
    icon,
    children: title,
}: {
    icon: ReactNode;
    children: string;
}) {
    return (
        <>
            <div className="flex gap-5 pl-1.5">
                {icon}
                <div className="w-full flex justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-medium font-semibold leading-none text-default-600">
                            {title}
                        </h4>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
}

function Public({ onRoute }: any) {
    const renderCell = useCallback(builder, []);

    return (
        <Table
            hideHeader
            aria-label="付近の駅・バス停から仙台二高までの徒歩による所要時間を示した表"
            layout="auto"
            shadow="md"
            topContent={
                <TopContent icon={<FaTrainSubway size={30} />}>
                    公共交通機関でお越しの方
                </TopContent>
            }
        >
            <TableHeader columns={publicColumns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        // className={column.uid == "actions" ? "hidden" : "none"}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>

            <TableBody items={publicRoute}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(key) => (
                            <TableCell>
                                {renderCell(item, key, onRoute)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

function Car({ onRoute }: any) {
    const renderCell = useCallback(builder, []);

    return (
        <Table
            hideHeader
            aria-label="付近の駐車場から仙台二高までの徒歩による所要時間を示した表"
            bottomContent={
                <>
                    <Divider />
                    <div className="flex text-sm text-default-600">
                        <FadeinSlide distance={10}>
                            <p>
                                本校敷地内に駐車場はございません。近隣の有料駐車場をご利用ください。
                                <br />
                                <strong>
                                    本校敷地及び宮城県美術館様駐車場への駐車はご遠慮ください。
                                </strong>
                            </p>
                        </FadeinSlide>
                    </div>
                </>
            }
            layout="auto"
            shadow="md"
            topContent={
                <TopContent icon={<FaCarAlt size={30} />}>
                    車でお越しの方
                </TopContent>
            }
        >
            <TableHeader columns={carColumns}>
                {(column) => (
                    <TableColumn key={column.uid}>{column.name}</TableColumn>
                )}
            </TableHeader>

            <TableBody items={carRoute}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(key) => (
                            <TableCell>
                                {renderCell(
                                    {
                                        icon: <MdLocalParking size={24} />,
                                        ...item,
                                    },
                                    key,
                                    onRoute
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

function Bike() {
    return (
        <Card className="w-fit lg:w-auto h-fit">
            <CardHeader>
                <div className="pl-1.5 flex gap-5">
                    <MdPedalBike size={36} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-medium font-semibold leading-none text-default-600">
                            自転車でお越しの方
                        </h4>
                    </div>
                </div>
            </CardHeader>
            <div className="px-3 mt-0.5">
                <Divider />
            </div>
            <CardBody>
                <div className="w-fit">
                    <p className="text-[15px] text-default-600">
                        <FadeinSlide distance={10}>
                            <span>
                                来場者の方専用の駐輪場がございます。
                            </span>
                        </FadeinSlide>
                        <span className="inline lg:hidden 2xl:inline">
                            <br />
                        </span>
                        <FadeinSlide distance={10}>
                            <span>係の指示に従ってご利用ください。</span>
                        </FadeinSlide>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
}

export function Routes({ onRoute }: any) {
    return (
        <div className="lg:-mt-2 z-30 blurred-border border-x-1 lg:border-x-0">
            <div className="simple-scrollbar whitespace-nowrap py-5 lg:overflow-x-visible flex lg:flex-wrap lg:items-start lg:gap-3">
                <div className="inline-block items-start mx-1.5 min-w-[28rem] lg:w-auto lg:mx-0 lg:min-w-fit flex-1">
                    <Public onRoute={onRoute} />
                </div>
                <div className="inline-block items-start mx-1.5 min-w-[34rem] lg:w-auto lg:mx-0 lg:min-w-fit flex-1">
                    <Car onRoute={onRoute} />
                </div>
                <div className="inline-block items-start mx-1.5 flex-auto 2xl:flex-none 2xl:flex-shrink lg:w-auto lg:mx-0 lg:min-w-fit">
                    <Bike />
                </div>
            </div>
        </div>
    );
}
