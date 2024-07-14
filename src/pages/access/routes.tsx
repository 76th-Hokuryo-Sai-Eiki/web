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

import { FaCarAlt, FaRoute, FaWalking } from "react-icons/fa";
import { MdLocalParking, MdPedalBike } from "react-icons/md";

import { Divider } from "@nextui-org/divider";
import { ReactNode, useCallback } from "react";

import { BrowserView, MobileView } from "react-device-detect";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { FaTrainSubway } from "react-icons/fa6";
import carRoute, { columns as carColumns } from "./info/car.tsx";
import publicRoute, { columns as publicColumns } from "./info/public.tsx";
import { Fadein, FadeinBottom } from "@/components/animations.tsx";

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
                    onClick={() => {
                        handler(item.route);
                    }}
                    name={
                        <Link
                            isExternal
                            isDisabled={!item.link}
                            href={item.link}
                            className="text-small text-inherit opacity-100"
                        >
                            {cellValue}
                        </Link>
                    }
                    description={
                        <FadeinBottom>
                            <Link
                                isExternal
                                isDisabled={!item.sub_link}
                                href={item.sub_link}
                                className="text-tiny text-default-400 opacity-100"
                            >
                                {item.description}
                            </Link>
                        </FadeinBottom>
                    }
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
                    <p className="text-bold text-sm text-default-400">
                        <FadeinBottom>
                            <Link
                                isExternal
                                isDisabled={!item.extra_link}
                                href={item.extra_link}
                                className="text-small text-default-400 opacity-100"
                            >
                                {item.epexegesis}
                            </Link>
                        </FadeinBottom>
                    </p>
                </div>
            );
        case "actions":
            return (
                <div className="relative hidden sm:flex items-center gap-2">
                    <Tooltip content="Google Maps で開く">
                        <Link
                            isExternal
                            href={item.map_link}
                            className="text-lg text-default-400 cursor-pointer active:opacity-50"
                        >
                            <FaRoute />
                        </Link>
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
            <div className="flex gap-5">
                {icon}
                <div className="w-full flex justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                            {title}
                        </h4>
                    </div>
                    <BrowserView className="pr-3 flex flex-col justify-end">
                        <FadeinBottom>
                            <p className="text-tiny text-default-700">
                                行をクリックしてルート検索
                            </p>
                        </FadeinBottom>
                    </BrowserView>
                    <MobileView className="pr-3 flex flex-col justify-end">
                        <FadeinBottom>
                            <p className="text-tiny">
                                行をタップしてルート検索
                            </p>
                        </FadeinBottom>
                    </MobileView>
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
            aria-label="付近の駅・バス停から仙台二高までの徒歩による所要時間を示した表"
            layout="auto"
            shadow="md"
            hideHeader
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
                    <TableRow
                        key={item.id}
                        onClick={() => {
                            onRoute(item.route);
                        }}
                        className="hover:opacity-hover hover:cursor-pointer"
                    >
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
            aria-label="付近の駐車場から仙台二高までの徒歩による所要時間を示した表"
            layout="auto"
            shadow="md"
            hideHeader
            topContent={
                <TopContent icon={<FaCarAlt size={30} />}>
                    車でお越しの方
                </TopContent>
            }
            bottomContent={
                <>
                    <Divider />
                    <div className="flex text-sm text-default-600">
                        <FadeinBottom distance="10px">
                            <p>
                                本校敷地内に駐車場はございません。近隣の有料駐車場をご利用ください。
                                <br />
                                <strong>
                                    本校敷地及び宮城県美術館様駐車場への駐車はご遠慮ください。
                                </strong>
                            </p>
                        </FadeinBottom>
                    </div>
                </>
            }
        >
            <TableHeader columns={carColumns}>
                {(column) => (
                    <TableColumn key={column.uid}>{column.name}</TableColumn>
                )}
            </TableHeader>

            <TableBody items={carRoute}>
                {(item) => (
                    <TableRow
                        key={item.id}
                        onClick={() => {
                            onRoute(item.route);
                        }}
                        className="hover:opacity-hover hover:cursor-pointer"
                    >
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
                <div className="flex gap-5">
                    <MdPedalBike size={30} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <FadeinBottom>
                            <h4 className="text-small font-semibold leading-none text-default-600">
                                自転車でお越しの方
                            </h4>
                        </FadeinBottom>
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div>
                    <FadeinBottom distance="10px">
                        <p>
                            <span className="inline-block">
                                来場者の方専用の駐輪場がございます。
                            </span>
                            <span className="lg:hidden">
                                <br />
                            </span>
                            <span className="inline-block">
                                係の指示に従ってご利用ください。
                            </span>
                        </p>
                    </FadeinBottom>
                </div>
            </CardBody>
        </Card>
    );
}

export function Routes({ onRoute }: any) {
    return (
        <div className="lg:-mt-2 z-30 blurred-border border-x-1 lg:border-x-0">
            <div className="simple-scrollbar whitespace-nowrap py-5 lg:overflow-x-visible flex lg:flex-wrap lg:items-start lg:gap-3">
                <div className="inline-block items-start mx-1.5 min-w-[25rem] lg:w-auto lg:mx-0 lg:min-w-fit flex-1">
                    <Public onRoute={onRoute} />
                </div>
                <div className="inline-block items-start mx-1.5 min-w-[30rem] lg:w-auto lg:mx-0 lg:min-w-fit flex-1">
                    <Car onRoute={onRoute} />
                </div>
                <div className="inline-block items-start mx-1.5 lg:w-auto lg:mx-0 lg:min-w-fit flex-1">
                    <Bike />
                </div>
            </div>
        </div>
    );
}
