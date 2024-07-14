import {
    cloneElement,
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useSyncExternalStore,
} from "react";

import { useCountdown } from "usehooks-ts";

import { Fadein, FadeinBottom } from "@/components/animations";
import { GoogleCalendarIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { TimeDisplay } from "@/components/time-display";
import { SuspendImage as Img } from "@/components/image";

import { siteConfig } from "@/config/site";
import { ThemeContext } from "@/context/theme";

import { chooseRandom } from "@/functions/utility";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { Catchphrase } from "./catchphrase";

function CountDown({ compact = false }: { compact?: boolean }) {
    const [count, { startCountdown }] = useCountdown({
        countStart: Math.floor(
            (siteConfig.eventDate.getTime() - Date.now()) / 250
        ),
        intervalMs: 250,
    });

    useEffect(startCountdown);

    const seconds = Math.floor(count / 4);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return (
        <TimeDisplay
            seconds={seconds % 60}
            minutes={minutes % 60}
            hours={hours % 24}
            days={days}
            compact={compact}
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
            className="w-52 xs:w-[400px] 2xl:w-32 flex justify-center"
        >
            <div className="text-left">
                <h1
                    className={title({
                        class: "-ml-6 sm:ml-0",
                    })}
                    style={{
                        fontFamily: "BIZ UDMincho",
                        fontSize: "24pt",
                        fontWeight: "normal",
                    }}
                >
                    あと
                </h1>
                <div className="sm:ml-6 mt-4">
                    {cloneElement(children, {
                        compact: width < 400,
                    })}
                </div>
            </div>
        </div>
    );
}

const BLURHASH = {
    light: "UJRf:}oL}YWX$%a|R+j@raa|NIj@I@fQxFfQ",
    dark: "U61rsRjFl:kqhzfkg$f6qKfkh0e.l.fQd=f6",
};

const PRELOAD_IMAGES = [
    "banner.light.png",
    "banner.dark.png",
    "logo.light.png",
    "logo.dark.png",
];

PRELOAD_IMAGES.forEach((path) => (new Image().src = path));

export function Title() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className="grid grid-cols-5 min-w-52 min-h-[90vh]  items-center justify-center gap-4 py-8 px-0 xl:px-12">
            <div className="col-span-full 2xl:col-span-3 2xl:col-start-2 text-center justify-center">
                <div className="flex justify-center">
                    <div className="max-w-xl sm:max-w-lg sm:px-4">
                        <Img
                            src={`banner.${theme}.png`}
                            layout="constrained"
                            height={463}
                            width={1250}
                            priority={true}
                            blurhash={BLURHASH[theme as "light" | "dark"]}
                        />
                    </div>
                </div>

                <Catchphrase />
            </div>

            <div className="col-span-full 2xl:col-start-2 2xl:col-span-3">
                <div className="flex text-center justify-center flex-col">
                    <Fadein duration="1.2s" easing="ease-in" once={true}>
                        <div className="sm:flex mt-3 sm:items-center sm:justify-center">
                            <h1
                                className={title({
                                    size: "xl",
                                    class: "m-4 pt-1 sm:mr-6 text-[2.5rem] sm:text-5xl",
                                })}
                                style={{
                                    fontFamily: "Noto Serif JP",
                                }}
                            >
                                第 76 回
                            </h1>

                            <span className="sm:hidden">
                                <br />
                                <p className="inline-flex h-14 mt-5" />
                            </span>
                            <h1
                                className={title({
                                    size: "xl",
                                    class: "-ml-2 sm:ml-0 2xl:ml-2 text-[4.25rem]  sm:text-7xl 2xl:text-[4.7rem]",
                                    color: chooseRandom(
                                        Object.keys(title.variants.color)
                                    ),
                                })}
                                style={{
                                    fontFamily: "Noto Serif JP",
                                }}
                            >
                                北稜祭
                            </h1>
                        </div>
                    </Fadein>
                </div>
            </div>

            <div className="col-span-full row-start-3 2xl:col-start-2 2xl:col-span-3 text-center justify-center">
                <FadeinBottom duration="0.5s">
                    <h4
                        className={subtitle({ class: "mt-6" })}
                        style={{ fontFamily: "Arsenal SC" }}
                    >
                        2024/08/31 ー 2024/09/01
                    </h4>
                </FadeinBottom>
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
            </div>

            <div className="col-span-full 2xl:col-span-1 2xl:col-start-5 2xl:row-start-1 2xl:row-span-4 text-center justify-center">
                <div className="inline-flex flex-row items-center">
                    <div className="mt-8 2xl:mt-0 inline-block col-span-1">
                        <CountDownContainer>
                            <CountDown />
                        </CountDownContainer>
                    </div>
                </div>
            </div>

            <div className="row-start-5 col-span-full 2xl:col-start-2 2xl:col-span-3"></div>
        </section>
    );
}
