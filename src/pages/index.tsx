import { Spacer } from "@nextui-org/spacer";

import { Access } from "./access";
import { Content } from "./content";
import { Title } from "./title";

import { Fadein } from "@/components/animations";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <Fadein duration="0.3s" once={true}>
            <DefaultLayout>
                <Fadein duration="0.5s" once={true}>
                    <Title />
                    <Access />
                    <Spacer y={20} />
                    <Content />
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
}
