import { ReactNode } from "react";

import { FadeinSlide } from "./animations";
import Hashlink from "./hashlink";
import { InlineDiv } from "./inline";

export default function SectionHeader({
    children,
    hashlink,
}: {
    children: ReactNode;
    hashlink: string;
}) {
    return (
        <div className="mb-3">
            <Hashlink plane className="header" to={hashlink}>
                <FadeinSlide distance={20} duration={0.8}>
                    <InlineDiv
                        className="text-default-700"
                        style={{
                            fontSize: "28pt",
                            fontFamily: "Kode Mono",
                        }}
                    >
                        {children}
                    </InlineDiv>
                </FadeinSlide>
            </Hashlink>
        </div>
    );
}
