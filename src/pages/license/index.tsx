import { Button } from "@nextui-org/button";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import { Selection } from "@nextui-org/table";
import { memo, useEffect, useState } from "react";

import licenses, { LicenseInfo } from "./data/list";

type Entry = [string, LicenseInfo];

const entries = Object.entries(licenses) as Entry[];

const List = memo(function _List({
    onSelectionChange,
}: {
    onSelectionChange?: (keys: Selection) => void;
}) {
    const renderItem = ([name, { repository, licenses }]: Entry) => {
        return (
            <ListboxItem key={name} textValue={name}>
                <div className="flex items-center gap-2">
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
            hideSelectedIcon
            className="w-max"
            defaultSelectedKeys={[]}
            items={entries}
            label="Assigned to"
            selectionMode="single"
            variant="flat"
            onSelectionChange={onSelectionChange}
        >
            {renderItem}
        </Listbox>
    );
});

const Container = function Container({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [selected, setSelected] = useState<[string, string] | null>();

    useEffect(() => {
        setSelected(["", ""]);
    }, [setSelected]);

    const onSelectionChange = (keys: Set<string>) => {
        if (keys.size === 0) return;

        const name = [...keys][0] as string;
        const hash = (licenses as any)[name]?.hash ?? "";

        if (hash.length !== 64) {
            setSelected(null);

            return;
        }

        fetch(`./licenses/${hash}.txt`, { method: "GET" })
            .then((res) => res.text())
            .then((data) => {
                setSelected([name, data]);
            })
            .catch(() => setSelected(null));
    };

    return (
        <Modal
            className="h-[80rem] max-w-[min(90vw,80rem)] !rounded-2xl bg-default-50 dark:opacity-90"
            isOpen={isOpen}
            radius="lg"
            scrollBehavior="inside"
            size="full"
            onClose={() => {
                setSelected(["", ""]);
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
                            <div className="simple-scrollbar w-full overflow-y-auto pr-2 lg:w-max">
                                <List
                                    onSelectionChange={(keys: Selection) =>
                                        onSelectionChange(keys as Set<string>)
                                    }
                                />
                            </div>
                            <div className="simple-scrollbar flex flex-col overflow-y-auto px-3">
                                {!selected ? (
                                    <h3 className="text-xl">FETCH ERROR</h3>
                                ) : (
                                    <>
                                        <div className="mb-4">
                                            <h3 className="text-xl">
                                                {selected[0]}
                                            </h3>
                                            <h4 className="text-medium">
                                                {licenses[selected[0]]
                                                    ?.licenses ?? ""}
                                            </h4>
                                        </div>
                                        <div className="h-min whitespace-pre-wrap px-4">
                                            <pre className="text-tiny">
                                                {selected[1]}
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
};

export default function License() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="z-10 flex flex-wrap gap-3">
                <Button radius="none" onPress={onOpen}>
                    <span className="text-default-700">LICENSES</span>
                </Button>
            </div>
            <Container isOpen={isOpen} onClose={onClose} />
        </>
    );
}
