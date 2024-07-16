import { Spacer } from "@nextui-org/spacer";

import AccessSection from "./access";
import ContentsSection from "./content";
import Footer from "./footer";
import InfoSection from "./info";
import Title from "./title";

import { Fadein } from "@/components/animations";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <Fadein duration={0.3} once={true}>
            <DefaultLayout>
                <Fadein duration={0.5} once={true}>
                    <section id="title">
                        <Title />
                    </section>

                    <section id="access">
                        <AccessSection />
                    </section>

                    <Spacer y={20} />

                    <section id="info">
                        <InfoSection />
                    </section>

                    <Spacer y={20} />

                    <section id="content">
                        <ContentsSection />
                    </section>
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
}
