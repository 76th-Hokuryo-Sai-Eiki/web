import { Accordion, AccordionItem } from "@nextui-org/accordion";

import SectionHeader from "@/components/section-header";

export default function NewsSection() {
    return (
        <div className="m-2">
            <SectionHeader hashlink="#contents">
                <p>News</p>
            </SectionHeader>

            <Accordion
                className="w-full bg-opacity-50"
                variant="light" // radius="sm"
                // shadow="lg"
            >
                <AccordionItem
                    // aria-label={`Question No. ${index + 1}`}
                    // id={`faq-item-${index}`}
                    hideIndicator
                    isDisabled
                    className="opacity-100"
                    title={
                        <div className="flex items-end gap-8">
                            <h3 className="text-3xl text-default-600">
                                2024.07
                            </h3>
                            <p className="text-2xl text-default-600">
                                第76回 北稜祭公式ウェブサイト開設
                            </p>
                        </div>
                    }
                />
            </Accordion>
        </div>
    );
}
