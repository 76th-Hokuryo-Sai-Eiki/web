import { Title } from "./title";
import { Access } from "./access";

import { Fadein } from "@/components/animations";
import DefaultLayout from "@/layouts/default";

export default function Page() {
    return (
        <Fadein duration="0.3s" once={true}>
            <DefaultLayout>
                <Fadein duration="0.5s" once={true}>
                    <Title />
                    <Access />
                </Fadein>
            </DefaultLayout>
        </Fadein>
    );
}
