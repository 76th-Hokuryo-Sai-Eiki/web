import { memo, useEffect, useRef } from "react";
import DraggableGrid, { DraggableGridHandle } from "ruuri";

import { ShopCard } from "./card";
import shops from "./data/shops";

const shopData = shops.map(({ id, ...rest }, index) => ({
    id: String(index),
    index,

    num: id,

    ...rest,
}));

let loaded = false;

export const ShopList = memo(function ShopList_({
    filter,
    sort,
    size,
    reversed,
}: {
    filter: (item: any) => boolean;
    size: number;
    sort: any;
    reversed: boolean;
}) {
    const ref = useRef<DraggableGridHandle>(null);

    useEffect(() => {
        ref.current?.grid?.refreshItems();
        ref.current?.grid?.layout();
    }, [size]);

    useEffect(() => {
        if (ref.current?.grid) {
            ref.current.grid.sort(sort, {
                layout: false,
                descending: reversed,
            });

            ref.current?.grid?.filter(filter, {
                instant: false,
                layout: true,
            });
        }
    }, [filter, reversed, sort]);

    if (!loaded) {
        throw new Promise((resolve) =>
            setTimeout(() => {
                loaded = true;
                resolve(undefined);
            }, 400),
        );
    }

    return (
        <DraggableGrid
            ref={ref}
            layoutOnInit
            className="h-[35rem]"
            data={shopData}
            dragEnabled={false}
            dragSort={false}
            layout={{
                horizontal: true,
                fillGaps: true,
            }}
            layoutOnResize={true}
            renderItem={({ num, ...rest }) => {
                return (
                    <div className={`mx-1 ${size === 0 ? "my-1" : ""}`}>
                        <ShopCard num={num} size={size} {...rest} />
                    </div>
                );
            }}
            sortData={{
                index: (_, element) => Number(element.dataset.ruuriId),
                id: (_, element) =>
                    shopData[Number(element.dataset.ruuriId)].num,
                name: (_, element) => {
                    const data = shopData[Number(element.dataset.ruuriId)];

                    return data?.plain_name ?? data.name;
                },
            }}
        />
    );
});
