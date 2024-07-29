import {
    RefObject,
    useCallback,
    useEffect,
    useReducer,
    useRef,
    useState,
} from "react";
import { useResizeObserver } from "usehooks-ts";

import isCrawler from "@/functions/is-crawler";
import { calcScrollOffset } from "@/functions/scroll";

export default function Background({
    containerRef,
    opacityConfig,
}: {
    containerRef: RefObject<HTMLDivElement>;
    opacityConfig: any;
}) {
    const bgImageRef = useRef<HTMLImageElement>(null);
    const bgThemeRefA = useRef<HTMLImageElement>(null);
    const bgThemeRefB = useRef<HTMLImageElement>(null);

    const extractHeight = (
        _: any,
        { height }: { height?: number; width?: number },
    ) => height;

    const [containerHeight, setContainerHeight] = useReducer(extractHeight, 0);
    const [bgImageHeight, setBgImageHeight] = useReducer(extractHeight, 0);
    const [bgThemeHeightA, setBgThemeHeightA] = useReducer(extractHeight, 0);
    const [bgThemeHeightB, setBgThemeHeightB] = useReducer(extractHeight, 0);

    const [bgImageScrollTo, setBgImageScrollTo] = useState<number>(0);

    const [bgThemeScrollRangeA, setBgThemeScrollRangeA] = useState<{
        from: number;
        to: number;
    }>({
        from: 0,
        to: 0,
    });
    const [bgThemeScrollRangeB, setBgThemeScrollRangeB] = useState<{
        from: number;
        to: number;
    }>({
        from: 0,
        to: 0,
    });

    const adjust = useCallback(() => {
        if (
            !containerHeight ||
            !bgImageHeight ||
            !bgThemeHeightA ||
            !bgThemeHeightB
        )
            return;

        if (opacityConfig.opacity.bgImage > 0) {
            const newScrollMax = containerHeight - bgImageHeight;

            setBgImageScrollTo(newScrollMax);
        }

        if (opacityConfig.opacity.bgProp > 0) {
            {
                const scrollTo = containerHeight - bgThemeHeightA - 400;
                const viewTo = scrollTo - 0.7 * window.innerHeight;

                setBgThemeScrollRangeA({
                    from: calcScrollOffset({
                        viewFrom: Math.max(350, 2400 - window.innerWidth * 3.2),
                        viewTo,
                        containerHeight,
                    }),
                    to: viewTo,
                });
            }

            {
                const infoSectionTop =
                    document.getElementById("#info")?.offsetTop ?? 0;

                const scrollTo = containerHeight - bgThemeHeightB;
                const viewTo = scrollTo - 0.7 * window.innerHeight;

                setBgThemeScrollRangeB({
                    from: calcScrollOffset({
                        viewFrom: infoSectionTop - 900,
                        viewTo,
                        containerHeight,
                    }),
                    to: viewTo,
                });
            }
        }
    }, [
        containerHeight,
        bgImageHeight,
        bgThemeHeightA,
        bgThemeHeightB,
        opacityConfig.opacity.bgImage,
        opacityConfig.opacity.bgProp,
    ]);

    useEffect(() => {
        adjust();
    }, [adjust]);

    useResizeObserver({ ref: containerRef, onResize: setContainerHeight });
    useResizeObserver({ ref: bgImageRef, onResize: setBgImageHeight });
    useResizeObserver({ ref: bgThemeRefA, onResize: setBgThemeHeightA });
    useResizeObserver({ ref: bgThemeRefB, onResize: setBgThemeHeightB });

    useEffect(() => {
        window.addEventListener("resize", adjust);

        return () => {
            window.removeEventListener("resize", adjust);
        };
    }, [adjust]);

    if (isCrawler) return null;

    return (
        <div
            className="absolute h-max w-full overflow-clip"
            style={{ height: containerHeight }}
        >
            <img
                ref={bgImageRef}
                alt="background"
                className={
                    opacityConfig.opacity.bgImage > 0
                        ? "parallax scroll-driven absolute min-h-[200vh] object-cover sm:h-fit sm:w-full"
                        : ""
                }
                src={`images/background${window.innerWidth < 1280 ? "-long" : ""}.png`}
                style={{
                    ["--scroll-y-to" as string]: `${bgImageScrollTo}px`,
                    opacity: opacityConfig.opacity.bgImage,
                }}
            />
            <img
                ref={bgThemeRefA}
                alt="background"
                className={
                    opacityConfig.opacity.bgProp > 0
                        ? "parallax scroll-driven absolute left-[4vw] max-h-[65vh] w-auto max-w-[70vw] dark:opacity-30 dark:brightness-[60%] sm:left-[8vw] lg:left-[12vw]"
                        : ""
                }
                src="images/themeA.png"
                style={{
                    ["--scroll-y-from" as string]: `${bgThemeScrollRangeA.from}px`,
                    ["--scroll-y-to" as string]: `${bgThemeScrollRangeA.to}px`,
                    opacity: opacityConfig.opacity.bgProp,
                }}
            />
            <img
                ref={bgThemeRefB}
                alt="background"
                className={
                    opacityConfig.opacity.bgProp > 0
                        ? "parallax scroll-driven absolute right-[4vw] max-h-[65vh] w-auto max-w-[70vw] dark:opacity-30 dark:brightness-[60%] sm:right-[8vw] lg:right-[12vw]"
                        : ""
                }
                src="images/themeB.png"
                style={{
                    ["--scroll-y-from" as string]: `${bgThemeScrollRangeB.from}px`,
                    ["--scroll-y-to" as string]: `${bgThemeScrollRangeB.to}px`,
                    opacity: opacityConfig.opacity.bgProp,
                }}
            />
        </div>
    );
}
