import { Link } from "@nextui-org/link";

import { licenseRef } from "../license/ref";

import Hashlink from "@/components/hashlink";
import { AiOutlineCopyright, Logo } from "@/components/icons";
import { Inline } from "@/components/inline";

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
                        <Inline>仙台第二高等学校</Inline>
                    </small>
                    <Inline>
                        <Inline className="ml-2 mr-1.5 text-[1.4rem]">
                            第76回
                        </Inline>
                        <Inline>北陵祭実行委員会</Inline>
                    </Inline>
                </p>
                <p className="flex flex-row justify-center gap-1 text-tiny">
                    <Inline>広報局</Inline>
                    <Inline>映像記録部</Inline>
                    <Inline>WEB班</Inline>/<Inline>協力: 美術部</Inline>
                </p>

                <p className="mt-0.5 inline-flex">
                    <Hashlink className="mr-1" to="#head">
                        <Logo size={24} />
                    </Hashlink>

                    <small className="inline-flex flex-row items-center gap-x-1 text-small">
                        <AiOutlineCopyright className="-mb-0.5" />
                        <Inline>2024</Inline>
                        <Inline>
                            76th <Inline>Hokuryo-sai Eiki</Inline>
                        </Inline>

                        <Inline className="-mx-0.5 text-small">│</Inline>

                        <Link
                            isExternal
                            className="text-small tracking-tight text-default-600"
                            href={licenseRef["MIT License"]}
                        >
                            <Inline>MIT License</Inline>
                        </Link>
                    </small>
                </p>
            </div>
        </div>
    );
}
