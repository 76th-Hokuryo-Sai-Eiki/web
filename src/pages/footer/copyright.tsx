import { Link } from "@nextui-org/link";

import { licenseRef } from "../license/ref";

import Hashlink from "@/components/hashlink";
import { AiOutlineCopyright, Logo } from "@/components/icons";
import { Phrase } from "@/components/inline";

export function Copyright() {
    return (
        <div
            className="flex min-w-max flex-col justify-center"
            style={{
                fontFamily: "'Zen Kaku Gothic Antique'",
                zoom: 1.04,
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            }}
        >
            <div className="mb-0.5 flex flex-col items-center text-center text-small text-default-600 xs:text-medium sm:text-large">
                <p className="-mb-1">
                    <small>
                        <Phrase>仙台第二高等学校</Phrase>
                    </small>
                    <Phrase>
                        <Phrase className="ml-2 mr-1.5 text-[1.4rem]">
                            第76回
                        </Phrase>
                        <Phrase>北陵祭実行委員会</Phrase>
                    </Phrase>
                </p>
                <p className="flex flex-row justify-center gap-1 text-tiny">
                    <Phrase>広報局</Phrase>
                    <Phrase>映像記録部</Phrase>
                    <Phrase>WEB班</Phrase>/<Phrase>協力: 美術部･書道部</Phrase>
                </p>

                <p className="mt-0.5 inline-flex">
                    <Hashlink className="mr-1" to="#head">
                        <Logo size={24} />
                    </Hashlink>

                    <small className="inline-flex flex-row items-center gap-x-1 text-small">
                        <AiOutlineCopyright className="-mb-0.5" />
                        <Phrase>2024</Phrase>
                        <Phrase>
                            76th <Phrase>Hokuryo-sai Eiki</Phrase>
                        </Phrase>

                        <Phrase className="-mx-0.5 text-small">│</Phrase>

                        <Link
                            isExternal
                            className="text-small tracking-tight text-default-600"
                            href={licenseRef["MIT License"]}
                        >
                            <Phrase>MIT License</Phrase>
                        </Link>
                    </small>
                </p>
            </div>
        </div>
    );
}
