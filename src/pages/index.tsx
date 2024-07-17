import { Spacer } from "@nextui-org/spacer";

import AccessSection from "./access";
import ContentsSection from "./content";
import InfoSection from "./info";
import Title from "./title";

import { Fadein } from "@/components/animations";
import HashLink from "@/components/hash-link";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <HashLink.Provider>
            <Fadein duration={0.3} once={true}>
                <DefaultLayout>
                    <Fadein duration={0.5} once={true}>
                        <section id="#title">
                            <Title />
                        </section>

                        <section id="#access">
                            <AccessSection />
                        </section>

                        <Spacer y={20} />

                        <section id="#info">
                            <InfoSection />
                        </section>

                        <Spacer y={20} />

                        <section id="#contents">
                            <ContentsSection />
                        </section>
                    </Fadein>
                </DefaultLayout>
            </Fadein>
        </HashLink.Provider>
    );
}
