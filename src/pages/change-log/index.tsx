import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";
import { TbLicense } from "react-icons/tb";

import data from "./data/log";

export default function ChangeLog() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="relative inline-flex items-center">
                <Button
                    disableRipple
                    isIconOnly
                    className="mt-0.5 inline-flex items-center bg-inherit"
                    radius="none"
                    onPress={onOpen}
                >
                    <TbLicense className="text-default-500" size={22} />
                </Button>

                <Modal isOpen={isOpen} radius="sm" size="lg" onClose={onClose}>
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
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}
