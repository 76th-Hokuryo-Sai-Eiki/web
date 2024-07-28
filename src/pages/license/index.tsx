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
import { Selection } from "@nextui-org/table";
import { memo, useEffect, useRef, useState } from "react";

import { Credits } from "./credits";
import _licenses from "./fetch-list";
import { licenseRef } from "./ref";

import { Fadein } from "@/components/animations";
import { defer } from "@/components/defer";
import { FaEye } from "@/components/icons";

export interface LicenseInfo {
    licenses: string;
    repository: string;
    hash: string;
}

type Entry = [string, LicenseInfo];

const List = memo(function _List({
    entries,
    onSelectionChange,
}: {
    entries: Entry[];
    onSelectionChange?: (keys: Selection) => void;
}) {
    const renderItem = ([name, { repository, licenses }]: Entry) => {
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
    };

    return (
        <Listbox
            className="w-max min-w-full"
            defaultSelectedKeys={[]}
            items={entries ?? []}
            label="Assigned to"
            selectionMode="single"
            variant="flat"
            onSelectionChange={onSelectionChange}
        >
            {renderItem}
        </Listbox>
    );
});

function _LicenseList({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const fetcher = useRef<Worker>();
    const licenses = useRef<Record<string, LicenseInfo>>();

    useEffect(() => {
        (async () => {
            if (!licenses.current) {
                licenses.current = await _licenses;
            }
        })();
    }, []);

    useEffect(() => {
        if (window.Worker && !fetcher.current) {
            fetcher.current = new Worker(
                new URL("./fetcher", import.meta.url),
                {
                    type: "module",
                },
            );

            fetcher.current.addEventListener("message", handleMessage);
        }

        return () => {
            if (window.Worker && fetcher.current) {
                fetcher.current.removeEventListener("message", handleMessage);
                fetcher.current.terminate();
                fetcher.current = undefined;
            }
        };
    }, []);

    const [selected, setSelected] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>("");

    useEffect(() => {
        setSelected("");
        setContent("");
    }, []);

    const handleMessage = (
        e: MessageEvent<{ type: string; value: string }>,
    ) => {
        if (e.data.type === "selection") {
            setSelected(e.data.value);
        } else if (e.data.type === "content") {
            setContent(e.data.value);
        }
    };

    const onSelectionChange = (keys: Set<string>) => {
        if (!fetcher.current) return;

        setContent(null);
        fetcher.current.postMessage(keys);
    };

    return (
        <Modal
            className="h-[80rem] max-w-[min(90vw,80rem)] !rounded-2xl bg-default-50 dark:opacity-90"
            isOpen={isOpen}
            radius="lg"
            scrollBehavior="inside"
            size="full"
            onClose={() => {
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

                        <ModalBody className="grid grid-rows-2 text-default-600 lg:grid-rows-1 lg:[grid-template-columns:max-content_auto]">
                            <div className="simple-scrollbar h-full w-full overflow-scroll lg:w-max">
                                {licenses.current && (
                                    <List
                                        entries={Object.entries(
                                            licenses.current,
                                        )}
                                        onSelectionChange={(keys: Selection) =>
                                            onSelectionChange(
                                                keys as Set<string>,
                                            )
                                        }
                                    />
                                )}
                            </div>
                            <div className="simple-scrollbar flex flex-col overflow-y-auto px-3">
                                {selected === null || !licenses.current ? (
                                    <h3 className="text-xl">FETCH ERROR</h3>
                                ) : selected === "" ? (
                                    <Credits />
                                ) : (
                                    <>
                                        <div className="mb-4">
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
                                                        !licenses.current[
                                                            selected
                                                        ]?.licenses
                                                    }
                                                    className="text-medium text-secondary"
                                                    href={
                                                        (licenseRef as any)[
                                                            licenses.current[
                                                                selected
                                                            ]?.licenses ?? ""
                                                        ]
                                                    }
                                                    isDisabled={
                                                        !licenses.current[
                                                            selected
                                                        ]?.licenses
                                                    }
                                                >
                                                    {licenses.current[selected]
                                                        ?.licenses ?? ""}
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="h-min whitespace-pre-wrap px-4">
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

export const LicenseList = defer(_LicenseList);
