import { Spacer } from "@nextui-org/spacer";
import { Spinner } from "@nextui-org/spinner";
import { lazy, Suspense } from "react";

import SectionHeader from "@/components/section-header";
import "@/styles/content.scss";

const ShopListContainer = lazy(() => import("./container"));

export default function BoothsSection() {
    return (
        <div className="m-2">
            <SectionHeader hashlink="#booths">
                <h2>Booths</h2>
            </SectionHeader>

            <Suspense fallback={<Spinner size="lg" />}>
                <ShopListContainer />
            </Suspense>

            <Spacer y={10} />

            <div>
                <h3 className="text-3xl text-default-600">ワードラリー</h3>

                <div className="pl-4 text-large text-default-600">
                    <p>
                        文化部の出店をまわって文字を集め、クイズを完成させよう！
                        <br />
                        完成したクイズに答えて、数量限定の景品をゲット！
                    </p>
                    <small className="ml-4">※本校生徒は参加できません。</small>
                </div>
            </div>
        </div>
    );
}
