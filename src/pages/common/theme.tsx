import { RefObject, useContext } from "react";
import { useResizeObserver } from "usehooks-ts";

import { Phrase } from "@/components/inline";
import { PagePreferenceContext } from "@/context/page-preference";

function Content() {
    return (
        <div
            className="text-slate-700 [writing-mode:vertical-rl] dark:text-slate-300"
            style={{ fontFamily: "Noto Serif JP" }}
        >
            <div>
                <span className="grid [grid-template-columns:auto_auto] [grid-template-rows:auto_auto_auto]">
                    <Phrase className="row-span-2 text-4xl">
                        わく
                        <Phrase className="-mb-1 align-text-top">&#45;</Phrase>
                        わく
                    </Phrase>
                    <Phrase className="-mt-2 text-medium">
                        【沸湧】
                        <Phrase className="align-sub text-[60%] [line-height:100%]">
                            フツ
                            <br />
                            ヨウ
                        </Phrase>
                    </Phrase>
                    <Phrase className="-ml-1 -mr-2 -mt-1.5 text-medium">
                        《名・副<small className="align-middle">ト</small>》
                    </Phrase>
                </span>
                <p className="pt-3">
                    二高生から湧き出す無限の力で、北陵祭に参加する全員の秘めたる好奇心が大いに沸くこと。また、そのさま。
                </p>
            </div>
        </div>
    );
}

export default function Theme({
    infoRef,
}: {
    infoRef: RefObject<HTMLElement>;
}) {
    const {
        opacity: { bgProp: bgPropOpacity },
    } = useContext(PagePreferenceContext);

    useResizeObserver({
        ref: infoRef,
    });

    if (!infoRef.current || infoRef.current.offsetHeight < 10) {
        throw new Promise((resolve) => setTimeout(resolve, 100));
    }

    return (
        <div
            aria-hidden
            className="absolute right-0 -z-10 mt-24 flex w-[100vw] overflow-x-clip overflow-y-visible"
            style={{
                height: infoRef.current.offsetHeight ?? 0,
            }}
        >
            <div className="ml-auto mr-auto mt-auto">
                <div
                    className={`${bgPropOpacity > 0 ? "parallax" : ""} h-64 [--rotate-from:-45deg] [--rotate-to:45deg] [--scroll-x-from:600px] [--scroll-x-to:-400px] [--scroll-y-from:32rem] [--scroll-y-to:-100px] [transform-origin:300px] xs:[--scroll-x-from:450px] xs:[--scroll-x-to:-100px] sm:[--scroll-x-from:500px] sm:[--scroll-y-from:10rem] sm:[--scroll-y-to:-300px] lg:[--scroll-x-from:400px] lg:[--scroll-x-to:-400px]`}
                    style={{ opacity: bgPropOpacity, zoom: 1.03 }}
                >
                    <Content />
                </div>
            </div>
        </div>
    );
}
