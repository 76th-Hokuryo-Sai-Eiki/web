import { Spacer } from "@nextui-org/spacer";
import { memo, Suspense, useRef } from "react";

import AccessSection from "./access";
import Theme from "./common/theme";
import ContentsSection from "./content";
import InfoSection from "./info";
import Title from "./title";

import { Fadein } from "@/components/animations";
import DefaultLayout from "@/layouts/default";

// const AccessSection = lazy(() => import("./access"));
// const InfoSection = lazy(() => import("./info"));
// const ContentsSection = lazy(() => import("./content"));
// const Theme = lazy(() => import("./common/theme"));

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
                        <Suspense fallback="Loading...">
                            <AccessSection />
                        </Suspense>
                    </section>

                    <Spacer y={20} />

                    <Suspense>
                        <Theme infoRef={infoRef} />
                    </Suspense>

                    <section ref={infoRef} id="#info">
                        <Suspense fallback="Loading...">
                            <InfoSection />
                        </Suspense>
                    </section>

                    <Spacer y={20} />

                    <section id="#contents">
                        <Suspense fallback="Loading...">
                            <ContentsSection />
                        </Suspense>
                    </section>
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
});
