import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/modal";
import { Spinner } from "@nextui-org/spinner";
import { Selection } from "@nextui-org/table";
import {
    memo,
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { Credits } from "./credits";
// import _licenses from "./fetch-list";
import _licenses from "./fetch-list";
import { licenseRef } from "./ref";

import { Fadein } from "@/components/animations";
import { FaEye } from "@/components/icons";

export interface LicenseInfo {
    licenses: string;
    repository: string;
    hash: string;
}

type Entry = [string, LicenseInfo];

let licenses: Record<string, LicenseInfo>;
let entries: [string, LicenseInfo][];

(async () => {
    licenses = await _licenses;
    entries = Object.entries(licenses);
})();

let loaded = false;

const List = memo(
    function _List({
        onSelectionChange,
    }: {
        onSelectionChange?: (keys: Selection) => void;
    }) {
        if (!loaded || !licenses || !entries) {
            throw new Promise((resolve) =>
                setTimeout(() => {
                    loaded = true;
                    resolve(undefined);
                }, 200),
            );
        }

        const items = useMemo(
            () =>
                entries.map(([name, { repository, licenses }]: Entry) => {
                    return (
                        <ListboxItem
                            key={name}
                            selectedIcon={({ isSelected }) =>
                                isSelected ? (
                                    <div className="absolute left-0 ml-3">
                                        <Fadein duration={0.15}>
                                            <FaEye className="text-default-600" />
                                        </Fadein>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }
                            textValue={name}
                        >
                            <div className="ml-8 flex items-center gap-6">
                                <div className="flex flex-col">
                                    <span className="text-small">{`${name} (${licenses})`}</span>
                                    <span className="text-tiny text-default-400">
                                        {repository}
                                    </span>
                                </div>
                            </div>
                        </ListboxItem>
                    );
                }),
            [],
        );

        return (
            <Listbox
                className="w-max min-w-full"
                defaultSelectedKeys={[]}
                label="Assigned to"
                selectionMode="single"
                variant="flat"
                onSelectionChange={onSelectionChange}
            >
                {items}
            </Listbox>
        );
    },
    () => {
        return true;
    },
);

export function LicenseList({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>("");

    useEffect(() => {
        setSelected("");
        setContent("");
    }, []);

    const onSelectionChange = useCallback(async (_keys: Selection) => {
        const keys = _keys as Set<string>;

        setContent(null);

        if (keys.size === 0) {
            setSelected("");

            return;
        }

        const name = [...keys][0] as string;

        setSelected(name);

        if (!name) return;

        const hash = licenses[name]?.hash ?? "";

        if (hash.length !== 64) {
            setSelected(null);

            return;
        }

        const url = `./licenses/${hash}.txt`;

        fetch(url, { cache: "force-cache" })
            .then(async (res) => {
                const data = await res.text();

                return data;
            })
            .then((data) => {
                setContent(data);
            })
            .catch(() => {
                setSelected(null);
            });
    }, []);

    return (
        <Modal
            className="h-[80rem] max-w-[min(90vw,80rem)] !rounded-2xl bg-default-50 dark:opacity-90"
            isOpen={isOpen}
            radius="lg"
            scrollBehavior="inside"
            size="full"
            onClose={() => {
                loaded = false;
                setSelected("");
                setContent("");
                onClose();
            }}
        >
            <ModalContent style={{ fontFamily: "Kode Mono" }}>
                {(onClose: () => void) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl text-default-600">
                            Licenses of dependencies
                        </ModalHeader>

                        <ModalBody className="grid grid-rows-2 text-default-600 lg:grid-cols-2 lg:grid-rows-1">
                            <div className="simple-scrollbar h-full w-full overflow-scroll lg:w-full">
                                <Suspense
                                    fallback={
                                        <Spinner
                                            aria-label="Loading..."
                                            className="ml-8 mt-4"
                                        />
                                    }
                                >
                                    <List
                                        onSelectionChange={onSelectionChange}
                                    />
                                </Suspense>
                            </div>

                            <div className="flex flex-col px-3">
                                {selected === null || !licenses ? (
                                    <h3 className="text-xl">FETCH ERROR</h3>
                                ) : selected === "" ? (
                                    <Credits />
                                ) : (
                                    <>
                                        <div className="">
                                            <h3>
                                                <Link
                                                    isExternal
                                                    className="inherit text-xl text-inherit"
                                                    href={`https://www.npmjs.com/package/${selected.split("@").slice(0, -1).join("@")}`}
                                                >
                                                    {selected}
                                                </Link>
                                            </h3>
                                            <h4>
                                                <Link
                                                    isExternal
                                                    aria-disabled={
                                                        !licenses[selected]
                                                            ?.licenses
                                                    }
                                                    className="text-medium text-secondary"
                                                    href={
                                                        (licenseRef as any)[
                                                            licenses[selected]
                                                                ?.licenses ?? ""
                                                        ]
                                                    }
                                                    isDisabled={
                                                        !licenses[selected]
                                                            ?.licenses
                                                    }
                                                >
                                                    {licenses[selected]
                                                        ?.licenses ?? ""}
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="simple-scrollbar mt-1 h-min overflow-y-auto whitespace-pre-wrap px-4 pt-3">
                                            <pre className="text-tiny">
                                                {content === null
                                                    ? "Loading..."
                                                    : content}
                                            </pre>
                                        </div>
                                    </>
                                )}
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
