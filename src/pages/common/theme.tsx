import { RefObject, useContext } from "react";

import { PagePreferenceContext } from "@/context/page-preference";

function Content() {
    return (
        <div
            className="text-slate-600 [writing-mode:vertical-rl] dark:text-slate-400"
            style={{ fontFamily: "Noto Serif JP" }}
        >
            <div>
                <span className="grid [grid-template-columns:auto_auto] [grid-template-rows:auto_auto_auto]">
                    <span className="row-span-2 inline-block text-4xl">
                        わく
                        <span className="-mb-1 inline-block align-text-top">
                            &#45;
                        </span>
                        わく
                    </span>
                    <span className="-mt-2 inline-block text-medium">
                        【沸湧】
                        <span className="inline-block align-sub text-[60%] [line-height:100%]">
                            フツ
                            <br />
                            ヨウ
                        </span>
                    </span>
                    <span className="-ml-1 -mr-2 -mt-1.5 inline-block text-medium">
                        《名・副<small className="align-middle">ト</small>》
                    </span>
                </span>
                <p className="pt-3">
                    二高生から湧き出す無限の力で、北稜祭に参加する全員の秘めたる好奇心が大いに沸くこと。また、そのさま。
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

    return (
        <div
            className="absolute right-0 -z-10 mt-24 flex w-[100vw] overflow-x-clip overflow-y-visible"
            style={{
                height: infoRef.current?.offsetHeight ?? 0,
            }}
        >
            <div className="ml-auto mr-auto mt-auto">
                <div
                    className="parallax h-64 [--rotate-from:-45deg] [--rotate-to:45deg] [--scroll-x-from:600px] [--scroll-x-to:-400px] [--scroll-y-from:50vh] [--scroll-y-to:-100px] [transform-origin:300px] xs:[--scroll-x-from:450px] xs:[--scroll-x-to:-100px] sm:[--scroll-x-from:500px] sm:[--scroll-y-from:10vh] sm:[--scroll-y-to:-300px] lg:[--scroll-x-from:400px] lg:[--scroll-x-to:-400px]"
                    style={{ opacity: bgPropOpacity }}
                >
                    <Content />
                </div>
            </div>
        </div>
    );
}
