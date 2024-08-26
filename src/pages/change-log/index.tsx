import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";

import data from "./data/log";

import { TbLicense } from "@/components/icons";

export default function ChangeLog() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="relative">
                <Button
                    disableRipple
                    isIconOnly
                    aria-label="Show changelog"
                    className="inline-flex items-center bg-inherit"
                    radius="none"
                    onPress={onOpen}
                >
                    <TbLicense className="text-default-500" size={22} />
                </Button>

                <Modal
                    className="bg-default-50 dark:opacity-90"
                    isOpen={isOpen}
                    radius="sm"
                    size="lg"
                    onClose={onClose}
                >
                    <ModalContent style={{ fontFamily: "Kode Mono" }}>
                        <ModalHeader className="py-0 pt-4">
                            Changelog
                        </ModalHeader>
                        <ModalBody className="mb-4 max-h-[80vh] overflow-y-auto pt-1">
                            <ul className="px-4">
                                {data.map(
                                    (
                                        {
                                            date,
                                            description,
                                        }: {
                                            date: ReactNode;
                                            description: ReactNode;
                                        },
                                        index,
                                    ) => (
                                        <li
                                            key={`change-log-item-${index}`}
                                            className="mt-3"
                                        >
                                            <h2 className="text-medium">
                                                {date}
                                            </h2>
                                            <p className="pl-4 text-small">
                                                {description}
                                            </p>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                aria-label="Close"
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}
