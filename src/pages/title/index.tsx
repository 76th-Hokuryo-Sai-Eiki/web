import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import {
    cloneElement,
    ReactElement,
    useCallback,
    useEffect,
    useReducer,
    useRef,
    useState,
    useSyncExternalStore,
} from "react";
import { useInView } from "react-intersection-observer";
import { useCountdown } from "usehooks-ts";

import { Catchphrase } from "./catchphrase";

import { Fadein, FadeinSlide } from "@/components/animations";
import { Banner, GoogleCalendarIcon } from "@/components/icons";
import { ParallaxY } from "@/components/parallax";
import { subtitle, title } from "@/components/primitives";
import { TimeDisplay } from "@/components/time-display";
import { siteConfig } from "@/config/site";
import { chooseRandom } from "@/functions/utility";

function CountDown({ compact = false }: { compact?: boolean }) {
    const [count, { startCountdown, stopCountdown }] = useCountdown({
        countStart: Math.floor(
            (siteConfig.eventDate.getTime() - Date.now()) / 250,
        ),
        intervalMs: 250,
    });

    useEffect(() => {
        startCountdown();

        return () => {
            stopCountdown();
        };
    }, [startCountdown, stopCountdown]);

    const seconds = Math.floor(count / 4);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return (
        <TimeDisplay
            compact={compact}
            days={days}
            hours={hours % 24}
            minutes={minutes % 60}
            seconds={seconds % 60}
        />
    );
}

function CountDownContainer({ children }: { children: ReactElement }) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const subscribe = useCallback((onStoreChange: () => void) => {
        const observer = new ResizeObserver((entries) => {
            entries.forEach(onStoreChange);
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const width = useSyncExternalStore(subscribe, () => {
        return containerRef.current?.offsetWidth ?? 0;
    });

    return (
        <div
            ref={containerRef}
            className={`parallax flex w-52 justify-center opacity-80 xs:w-[400px] 2xl:w-32 2xl:[--scroll-y-from:750px] 2xl:[--scroll-y-to:-500px]`}
        >
            <div className="text-left">
                <p
                    className={title({
                        class: "-ml-6 text-default-600 sm:ml-0",
                    })}
                    id="#test"
                    style={{
                        fontFamily: "BIZ UDMincho",
                        fontSize: "24pt",
                        fontWeight: "normal",
                    }}
                >
                    あと
                </p>
                <div className="mt-4 sm:ml-6">
                    {cloneElement(children, {
                        compact: width < 400,
                    })}
                </div>
            </div>
        </div>
    );
}

export default function Title() {
    const { ref: titleRef, inView } = useInView({ triggerOnce: false });

    const [titleColor, setTitleColor] = useState<string>("pink");
    const [first, setFirst] = useReducer(() => false, true);

    useEffect(() => {
        if (!inView) {
            setTitleColor(chooseRandom(Object.keys(title.variants.color)));
        } else if (first) {
            setFirst();
            setTitleColor("pink");
        }
    }, [inView, first, setTitleColor]);

    return (
        <div className="grid min-h-[90vh] min-w-52 grid-cols-5 items-center justify-center gap-4 px-0 py-8 xl:px-12">
            <div className="col-span-full justify-center text-center 2xl:col-span-3 2xl:col-start-2">
                <Banner />

                <Catchphrase />
            </div>

            <div className="col-span-full 2xl:col-span-3 2xl:col-start-2">
                <div className="flex flex-col justify-center text-center">
                    <Fadein once duration={1.2} easing="ease-in">
                        <div className="mt-3 sm:flex sm:items-center sm:justify-center">
                            <h2
                                className={title({
                                    size: "xl",
                                    class: "m-4 pt-1 text-[2.5rem] text-default-800 sm:mr-6 sm:text-5xl",
                                })}
                                style={{
                                    fontFamily: "Noto Serif JP",
                                }}
                            >
                                第 76 回
                            </h2>

                            <span className="sm:hidden">
                                <br />
                                <span className="mt-5 inline-flex h-14" />
                            </span>

                            <ParallaxY className="md:[--scroll-y-from:40px] md:[--scroll-y-to:-40px]">
                                <h1
                                    ref={titleRef}
                                    className={title({
                                        size: "xl",
                                        class: "-ml-2 text-[4.25rem] sm:ml-0 sm:text-7xl 2xl:ml-2 2xl:text-[4.7rem]",
                                        color: titleColor as any,
                                    })}
                                    style={{
                                        fontFamily: "Noto Serif JP",
                                    }}
                                >
                                    北稜祭
                                </h1>
                            </ParallaxY>
                        </div>
                    </Fadein>
                </div>
            </div>

            <div className="col-span-full row-start-3 justify-center text-center 2xl:col-span-3 2xl:col-start-2">
                <FadeinSlide duration={0.5}>
                    <h4
                        className={subtitle({ class: "mt-6" })}
                        style={{ fontFamily: "Arsenal SC" }}
                    >
                        2024/08/31 ー 2024/09/01
                    </h4>
                </FadeinSlide>

                <ParallaxY className="md:[--scroll-y-from:40px] md:[--scroll-y-to:-60px]">
                    <Link
                        isExternal
                        className={buttonStyles({
                            class: "mt-3",
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                        href={siteConfig.links.calendar}
                    >
                        <GoogleCalendarIcon size={20} />
                        Google Calendar に追加
                    </Link>
                </ParallaxY>
            </div>

            <div className="col-span-full justify-center text-center 2xl:col-span-1 2xl:col-start-5 2xl:row-span-4 2xl:row-start-1">
                <div className="inline-flex flex-row items-center">
                    <div className="col-span-1 mt-8 inline-block 2xl:mt-0">
                        <CountDownContainer>
                            <CountDown />
                        </CountDownContainer>
                    </div>
                </div>
            </div>

            <div className="col-span-full row-start-5 2xl:col-span-3 2xl:col-start-2" />
        </div>
    );
}
