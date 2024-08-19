import { ReactNode } from "react";

import { FadeinSlide } from "./animations";
import Hashlink from "./hashlink";
import { PhraseDiv } from "./inline";

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
                    <PhraseDiv
                        className="text-default-700"
                        style={{
                            fontSize: "2.5rem",
                            fontFamily: "Kode Mono",
                        }}
                    >
                        {children}
                    </PhraseDiv>
                </FadeinSlide>
            </Hashlink>
        </div>
    );
}
