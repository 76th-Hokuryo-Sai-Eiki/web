import { Image } from "@nextui-org/image";

import { Phrase } from "@/components/inline";
import SectionHeader from "@/components/section-header";
import { getImageUrl } from "@/functions/utility";

export default function GoodsSection() {
    return (
        <div className="m-2">
            <SectionHeader hashlink="#booths">
                <h2>Goods</h2>
            </SectionHeader>

            <div className="grid max-w-[50rem] grid-cols-2 gap-4 [grid-template-rows:fit-content_fit-content]">
                <div className="col-start-1 row-start-1 flex-col items-center justify-center">
                    <Image alt="fan" src={getImageUrl("/goods/0000.jpg")} />
                    <p className="w-full text-center text-large">
                        <Phrase className="mx-1">うちわ</Phrase>
                        <Phrase className="mx-1">¥100</Phrase>
                    </p>
                </div>
                <div className="row-span-2 row-start-1 flex flex-col items-center justify-center">
                    <Image
                        alt="plastic file folder"
                        src={getImageUrl("/goods/0001.jpg")}
                    />
                    <p className="w-full text-center text-large">
                        <Phrase className="mx-1">クリアファイル</Phrase>
                        <Phrase className="mx-1">¥500</Phrase>
                    </p>
                </div>
                <div className="col-start-1 row-start-2 flex flex-col items-center justify-center">
                    <Image
                        alt="hand towel"
                        src={getImageUrl("/goods/0002.jpg")}
                    />
                    <p className="w-full text-center text-large">
                        <Phrase className="mx-1">フェイスタオル</Phrase>
                        <Phrase className="mx-1">¥500</Phrase>
                    </p>
                </div>
            </div>
        </div>
    );
}
