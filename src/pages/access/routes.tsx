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

import carRoute, { columns as carColumns } from "./data/car.tsx";
import publicRoute, { columns as publicColumns } from "./data/public.tsx";

import { FadeinSlide } from "@/components/animations.tsx";
import {
    FaCarAlt,
    FaRoute,
    FaTrainSubway,
    FaWalking,
    MdLocalParking,
    MdPedalBike,
    SiGooglemaps,
} from "@/components/icons";
import { Phrase } from "@/components/inline.tsx";

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
                            <div>
                                <Link
                                    isExternal
                                    className="text-tiny text-default-400 opacity-100"
                                    href={item.sub_link}
                                    isDisabled={!item.sub_link}
                                >
                                    {item.description}
                                </Link>
                            </div>
                        </FadeinSlide>
                    }
                    name={
                        <Link
                            isExternal
                            className="text-small text-inherit opacity-100"
                            href={item.link}
                            isDisabled={!item.link}
                        >
                            <h4>{cellValue}</h4>
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
                    <span className="text-bold text-sm">
                        <span className="inline-flex items-center">
                            <FaWalking className="mr-1" />
                            <span>{cellValue} min</span>
                        </span>
                    </span>
                    <span className="text-bold text-tiny text-default-400">
                        <FadeinSlide>
                            <Link
                                isExternal
                                aria-disabled={!item.extra_link}
                                aria-label="details"
                                className="text-small text-default-400 opacity-100"
                                href={item.extra_link}
                                isDisabled={!item.extra_link}
                            >
                                {item.epexegesis}
                            </Link>
                        </FadeinSlide>
                    </span>
                </div>
            );
        case "actions":
            return (
                <div className="relative flex items-center gap-2">
                    <Tooltip content="ルートを表示">
                        <Button
                            isIconOnly
                            aria-label="Draw root"
                            className="cursor-pointer text-lg text-default-400 active:opacity-50"
                            style={{
                                background: "inherit",
                            }}
                            variant="flat"
                            onPress={() => {
                                handler(item.route);
                            }}
                        >
                            <FaRoute className="mb-2" size={20} />
                        </Button>
                    </Tooltip>
                    <Tooltip content="Google Maps で開く">
                        <Link
                            isExternal
                            aria-label="Open Google Maps"
                            className="cursor-pointer text-lg text-default-400 active:opacity-50"
                            href={item.map_link}
                        >
                            <SiGooglemaps className="mb-2" size={24} />
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
            <div className="flex gap-5 pl-1.5">
                {icon}
                <div className="flex w-full justify-between">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-medium font-semibold leading-none text-default-600">
                            {title}
                        </h3>
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
        <Card className="card-base">
            <CardBody className="p-4">
                <Table
                    hideHeader
                    removeWrapper
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
                            <TableColumn key={column.uid}>
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
            </CardBody>
        </Card>
    );
}

function Car({ onRoute }: any) {
    const renderCell = useCallback(builder, []);

    return (
        <Card className="card-base">
            <CardBody className="p-4">
                <Table
                    hideHeader
                    removeWrapper
                    aria-label="付近の駐車場から仙台二高までの徒歩による所要時間を示した表"
                    bottomContent={
                        <>
                            <Divider />
                            <div className="flex px-3 text-sm text-default-600">
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
                            <TableColumn key={column.uid}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>

                    <TableBody items={carRoute}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(key) => (
                                    <TableCell>
                                        {renderCell(
                                            {
                                                icon: (
                                                    <MdLocalParking size={24} />
                                                ),
                                                ...item,
                                            },
                                            key,
                                            onRoute,
                                        )}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
    );
}

function Bike() {
    return (
        <Card className="card-base h-fit w-fit xl:w-auto">
            <CardHeader>
                <div className="flex gap-5 pl-1.5">
                    <MdPedalBike size={36} />
                    <div className="flex flex-col items-start justify-center gap-1">
                        <h3 className="text-medium font-semibold leading-none text-default-600">
                            自転車でお越しの方
                        </h3>
                    </div>
                </div>
            </CardHeader>
            <div className="mt-0.5 px-3">
                <Divider />
            </div>
            <CardBody>
                <div className="w-fit">
                    <p className="text-[15px] text-default-600">
                        <FadeinSlide distance={10}>
                            <Phrase>
                                来場者の方専用の駐輪場がございます。
                            </Phrase>
                        </FadeinSlide>
                        <span className="inline xl:hidden 2xl:inline">
                            <br />
                        </span>
                        <FadeinSlide distance={10}>
                            <Phrase>係の指示に従ってご利用ください。</Phrase>
                        </FadeinSlide>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
}

export function Routes({ onRoute }: any) {
    return (
        <div className="blurred-border z-30 border-x-1 xl:-mt-2 xl:border-x-0">
            <ul className="simple-scrollbar flex overflow-x-scroll whitespace-nowrap py-5 xl:flex-wrap xl:items-start xl:gap-3 xl:overflow-x-visible">
                <li className="mx-1.5 inline-block min-w-[28rem] flex-1 items-start xl:mx-0 xl:w-auto xl:min-w-fit">
                    <Public onRoute={onRoute} />
                </li>
                <li className="mx-1.5 inline-block min-w-[34rem] flex-1 items-start xl:mx-0 xl:w-auto xl:min-w-fit">
                    <Car onRoute={onRoute} />
                </li>
                <li className="mx-1.5 inline-block flex-auto items-start xl:mx-0 xl:w-auto xl:min-w-fit 2xl:flex-none 2xl:flex-shrink">
                    <Bike />
                </li>
            </ul>
        </div>
    );
}
