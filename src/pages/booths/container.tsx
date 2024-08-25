import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Spinner } from "@nextui-org/spinner";
import Fuse from "fuse.js";
import { difference } from "lodash-es";
import { Item } from "muuri";
import {
    Dispatch,
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { renderToString } from "react-dom/server";

import shops from "./data/shops";
import { ShopList } from "./list";
import { ShopListPanel } from "./panel";

import { FaFilter } from "@/components/icons";
import { encode, tokenize } from "@/functions/search";

const FILTER = {
    organization: {
        "1st": (x: string) => x.startsWith("1-"),
        "2nd": (x: string) => x.startsWith("2-"),
        "3rd": (x: string) => x.startsWith("3-"),
        club: (x: string) => x.endsWith("部") || x.endsWith("愛好会"),
    },
    locations: {
        "1f": (x: string) => x.startsWith("1F"),
        "2f": (x: string) => x.startsWith("2F"),
        "3f": (x: string) => x.startsWith("3F"),
        outdoor: (x: string) => x.startsWith("外"),
    },
};

const shopIndex = shops.map(({ organization, locations }) => ({
    organization: Object.entries(FILTER.organization)
        .filter(([_, fn]) => fn(organization))
        .map(([key, _]) => key),
    locations: Object.entries(FILTER.locations)
        .filter(([_, fn]) => locations.some((location) => fn(location)))
        .map(([key, _]) => key),
}));

function makeOnChangeValue(value: string[], setValues: Dispatch<string[]>) {
    return (selected: string[]) => {
        const diff = difference(selected, value);

        if (selected.length === 0) {
            setValues(["all"]);

            return;
        } else if (diff.includes("all") && selected.includes("all")) {
            setValues(["all"]);

            return;
        } else {
            selected = selected.filter((selection) => selection !== "all");
        }

        setValues(selected);
    };
}
const normalizedShopData = shops.map(({ name, organization, description }) => {
    const _name = renderToString(name);
    const _description = renderToString(description);
    const _organization = renderToString(organization);

    return {
        name: {
            original: encode(_name),
            trigram: tokenize(_name, "trigram"),
            segment: tokenize(_name),
        },
        description: {
            original: encode(_description),
            trigram: tokenize(_description, "trigram"),
            segment: tokenize(_description),
        },
        organization: {
            original: encode(_organization),
        },
    };
});

function getFuse(threshold: number) {
    return new Fuse(normalizedShopData, {
        keys: [
            { name: "name.original", weight: 2 },
            "name.trigram",
            "name.segment",
            "organization.original",
            { name: "description.original", weight: 2 },
            "description.trigram",
            "description.segment",
        ],
        includeScore: true,
        threshold,
        useExtendedSearch: true,
    });
}

const fuse = [getFuse(0.2), getFuse(0.6)];

export default function ShopListContainer() {
    const [organizationSelector, setOrganizationSelector] = useState(["all"]);
    const [locationSelector, setLocationSelector] = useState(["all"]);

    const [orderSelector, setOrderSelector] = useState("index");
    const [prevOrder, setPrevOrder] = useState<string | null>(null);

    const [reversed, setReversed] = useState(false);

    const [sizeSelector, setSizeSelector] = useState(
        window.innerWidth >= 1536 ? "2" : window.innerWidth >= 1024 ? "1" : "0",
    );

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [fuzzySearch, setFuzzySearch] = useState(true);

    useEffect(() => {
        if (searchQuery !== "") {
            if (orderSelector !== "search") {
                setPrevOrder(orderSelector);
                if (!prevOrder) {
                    setOrderSelector("search");
                }
            }
        } else if (prevOrder) {
            setOrderSelector(prevOrder);
            setPrevOrder(null);
        }
    }, [orderSelector, prevOrder, searchQuery]);

    const selectors = useMemo(
        () => ({
            organization: {
                value: organizationSelector,
                onValueChange: makeOnChangeValue(
                    organizationSelector,
                    setOrganizationSelector,
                ),
            },
            locations: {
                value: locationSelector,
                onValueChange: makeOnChangeValue(
                    locationSelector,
                    setLocationSelector,
                ),
            },
            order: {
                value: orderSelector,
                onValueChange: setOrderSelector,
            },
            size: {
                value: sizeSelector,
                onValueChange: setSizeSelector,
            },
            reverse: {
                isSelected: reversed,
                onValueChange: setReversed,
            },
            fuzzy: {
                isSelected: fuzzySearch,
                onValueChange: setFuzzySearch,
            },
        }),
        [
            fuzzySearch,
            locationSelector,
            orderSelector,
            organizationSelector,
            reversed,
            sizeSelector,
        ],
    );

    const searchResult = useMemo(
        () => fuse[+fuzzySearch].search(searchQuery.split(" ").join(" | ")),
        [fuzzySearch, searchQuery],
    );

    const filter = useCallback(
        (item: any) => {
            const indices = searchResult.map(({ refIndex }) => refIndex);

            const id = Number(item.getElement().dataset.ruuriId);

            if (searchQuery !== "" && !indices.includes(id)) return false;

            const index = shopIndex[id];

            return (
                selectors.organization.value.some(
                    (tag: string) =>
                        tag === "all" ||
                        index.organization.includes(tag) ||
                        (tag === "" && index.organization.length === 0),
                ) &&
                selectors.locations.value.some(
                    (tag: string) =>
                        tag === "all" ||
                        index.locations.includes(tag) ||
                        (tag === "" && index.locations.length === 0),
                )
            );
        },
        [
            searchQuery,
            searchResult,
            selectors.locations.value,
            selectors.organization.value,
        ],
    );

    const sort = useMemo(() => {
        if (orderSelector === "search") {
            return (a: Item, b: Item) => {
                const a_id = Number(a.getElement()?.dataset.ruuriId);
                const b_id = Number(b.getElement()?.dataset.ruuriId);

                const a_res = searchResult.filter(
                    ({ refIndex }) => refIndex === a_id,
                )[0] ?? { score: 1 };
                const b_res = searchResult.filter(
                    ({ refIndex }) => refIndex === b_id,
                )[0] ?? { score: 1 };

                const res = a_res.score! - b_res.score!;

                if (res === 0) return a_id - b_id;

                return res;
            };
        } else {
            return orderSelector;
        }
    }, [orderSelector, searchResult]);

    return (
        <>
            <Accordion
                defaultExpandedKeys={
                    window.innerHeight >= 800 && window.innerWidth >= 1536
                        ? ["0"]
                        : []
                }
                variant="shadow"
            >
                <AccordionItem
                    key="0"
                    classNames={{ content: "py-0" }}
                    startContent={
                        <FaFilter className="text-default-500" size={18} />
                    }
                    textValue="tools"
                    title={<h3 className="text-xl text-default-600">ツール</h3>}
                    onKeyDown={(e) => e.stopPropagation()}
                >
                    <ShopListPanel
                        selectors={selectors}
                        setSearchQuery={(query: string) =>
                            setSearchQuery(encode(query))
                        }
                    />
                </AccordionItem>
            </Accordion>

            <div className="blurred-border relative border-x-1">
                <div className="simple-scrollbar overflow-x-scroll py-5">
                    <div
                        className={`flex ${["h-[35.5rem]", "h-[31rem]", "h-[35rem]"][Number(sizeSelector)]}`}
                    >
                        <Suspense
                            fallback={
                                <div
                                    className="flex h-full w-full items-center justify-center backdrop-blur-2xl"
                                    style={{ zoom: 2 }}
                                >
                                    <Spinner
                                        aria-label="Loading..."
                                        size="lg"
                                    />
                                </div>
                            }
                        >
                            <ShopList
                                filter={filter}
                                reversed={reversed}
                                size={Number(sizeSelector)}
                                sort={sort}
                            />
                        </Suspense>
                    </div>

                    <p className="absolute bottom-2 right-0 w-full text-right text-medium text-default-600">
                        出店場所の詳細はパンフレットにて
                    </p>
                </div>
            </div>
        </>
    );
}
