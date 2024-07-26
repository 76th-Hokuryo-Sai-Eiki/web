import { Collection } from "@discordjs/collection";
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
import { memo, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

import { Credits } from "./credits";
import { LicenseInfo } from "./data/list";

import { Fadein } from "@/components/animations";

type Entry = [string, LicenseInfo];

const cache = new Collection<string, string>();

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

export function LicenseList({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>("");

    const [licenses, setLicenses] = useState<Record<
        string,
        LicenseInfo
    > | null>(null);

    useEffect(() => {
        if (licenses) return;

        import("./data/list").then(({ default: licenses }) => {
            setLicenses(licenses);
        });
    }, [licenses, setLicenses]);

    useEffect(() => {
        setSelected("");
        setContent("");
    }, []);

    const onSelectionChange = (keys: Set<string>) => {
        if (keys.size === 0) {
            setSelected("");

            return;
        }

        const name = [...keys][0] as string;

        setSelected(name);

        if (!name) return;

        const hash = (licenses as any)[name]?.hash ?? "";

        if (hash.length !== 64) {
            setSelected(null);

            return;
        }

        if (cache.has(name)) {
            setContent(cache.get(name) as string);

            return;
        }

        setContent(null);

        fetch(`./licenses/${hash}.txt`)
            .then((res) => res.text())
            .then((data) => {
                setContent(data);

                cache.set(name, data);
            })
            .catch(() => setSelected(null));
    };

    if (cache.size >= 16) cache.delete(cache.firstKey() ?? "");

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
            <ModalContent>
                {(onClose: () => void) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl text-default-600">
                            Licenses of dependencies
                        </ModalHeader>

                        <ModalBody className="grid grid-rows-2 text-default-600 lg:grid-rows-1 lg:[grid-template-columns:max-content_auto]">
                            <div className="simple-scrollbar h-full w-full overflow-auto lg:w-max">
                                {licenses && (
                                    <List
                                        entries={Object.entries(licenses)}
                                        onSelectionChange={(keys: Selection) =>
                                            onSelectionChange(
                                                keys as Set<string>,
                                            )
                                        }
                                    />
                                )}
                            </div>
                            <div className="simple-scrollbar flex flex-col overflow-y-auto px-3">
                                {selected === null || !licenses ? (
                                    <h3 className="text-xl">FETCH ERROR</h3>
                                ) : selected === "" ? (
                                    <Credits />
                                ) : (
                                    <>
                                        <div className="mb-4">
                                            <h3>
                                                <Link
                                                    isExternal
                                                    className="text-xl text-inherit"
                                                    href={`https://www.npmjs.com/package/${selected.split("@").slice(0, -1).join("@")}`}
                                                >
                                                    {selected}
                                                </Link>
                                            </h3>
                                            <h4 className="text-medium">
                                                {licenses[selected]?.licenses ??
                                                    ""}
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
