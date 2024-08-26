import { Spacer } from "@nextui-org/spacer";
import { memo, Suspense, useRef } from "react";

import AccessSection from "./access";
import BoothsSection from "./booths";
import Theme from "./common/theme";
import GoodsSection from "./goods";
import InfoSection from "./info";
import MessagesSection from "./messages";
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

            <section id="#booths">
                <BoothsSection />
            </section>

            <Spacer y={20} />

            <section id="#goods">
                <GoodsSection />
            </section>

            <Spacer y={20} />
        </DefaultLayout>
    );
});
