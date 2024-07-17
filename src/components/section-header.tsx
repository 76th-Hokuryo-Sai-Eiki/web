import { ReactNode } from "react";

import { FadeinSlide } from "./animations";
import HashLink from "./hash-link";

export default function SectionHeader({
    children,
    hashlink,
}: {
    children: ReactNode;
    hashlink: string;
}) {
    return (
        <div className="mb-3">
            <HashLink plane className="header" to={hashlink}>
                <FadeinSlide distance={20} duration={0.8}>
                    <span
                        className="text-default-700"
                        style={{
                            fontSize: "28pt",
                            fontFamily: "Kode Mono",
                        }}
                    >
                        {children}
                    </span>
                </FadeinSlide>
            </HashLink>
        </div>
    );
}
