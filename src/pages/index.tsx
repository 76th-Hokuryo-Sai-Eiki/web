import { Spacer } from "@nextui-org/spacer";
import { memo, Suspense, useRef } from "react";

import AccessSection from "./access";
import Theme from "./common/theme";
import ContentsSection from "./content";
import InfoSection from "./info";
import MessagesSection from "./message";
import NewsSection from "./news";
import Title from "./title";

import DefaultLayout from "@/layouts/default";

export default memo(function IndexPage() {
    const infoRef = useRef<HTMLElement>(null);

    return (
        <DefaultLayout>
            <section id="#title">
                <Title />
            </section>

            <Spacer y={5} />

            <section id="#access">
                <AccessSection />
            </section>

            <Spacer y={20} />

            <section id="#news">
                <NewsSection />
            </section>

            <Spacer y={20} />

            <Suspense>
                <Theme infoRef={infoRef} />
            </Suspense>

            <section ref={infoRef} id="#info">
                <InfoSection />
            </section>

            <Spacer y={40} />

            <section id="#messages">
                <MessagesSection />
            </section>

            <Spacer y={20} />

            <section id="#contents">
                <ContentsSection />
            </section>

            <Spacer y={20} />
        </DefaultLayout>
    );
});
