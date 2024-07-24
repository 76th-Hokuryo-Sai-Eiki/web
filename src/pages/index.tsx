import { Spacer } from "@nextui-org/spacer";
import { memo, useRef } from "react";

import AccessSection from "./access";
import { Theme } from "./common/theme";
import ContentsSection from "./content";
import InfoSection from "./info";
import Title from "./title";

import { Fadein } from "@/components/animations";
import DefaultLayout from "@/layouts/default";

export default memo(function IndexPage() {
    const infoRef = useRef<HTMLElement>(null);

    return (
        <Fadein once duration={0.3}>
            <DefaultLayout>
                <Fadein once duration={0.5}>
                    <section id="#title">
                        <Title />
                    </section>

                    <section id="#access">
                        <AccessSection />
                    </section>

                    <Spacer y={20} />

                    <Theme infoRef={infoRef} />

                    <section ref={infoRef} id="#info">
                        <InfoSection />
                    </section>

                    <Spacer y={20} />

                    <section id="#contents">
                        <ContentsSection />
                    </section>
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
});
