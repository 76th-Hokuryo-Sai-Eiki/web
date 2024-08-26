import { Image } from "@nextui-org/image";
import { useContext, useEffect, useMemo, useReducer, useState } from "react";

import { ParallaxY } from "../../components/parallax";

import { ThemeContext } from "@/context/theme";
import { getImageUrl, randomRange } from "@/functions/utility";

export function Banner({ className }: { className?: string }) {
    const { theme } = useContext(ThemeContext);

    const [timerId, setTimerId] = useState<number | undefined>(undefined);

    const [rotate, setRotate] = useReducer(
        (current: number, value: number) => current + randomRange(0, value),
        80,
    );

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => (prev + 1) % 2);
        }, 4800);

        return () => {
            clearInterval(id);
        };
    });

    const ruby = useMemo(
        () =>
            [0, 1].map((id) => (
                <div
                    key={id}
                    style={{
                        clipPath: "inset(30% 0px 10px 0px)",
                    }}
                >
                    <Image
                        disableSkeleton
                        isBlurred
                        isZoomed
                        alt="wakuwaku/futsuyo"
                        className={`dark:hue-rotate-0 ${className}`}
                        classNames={{
                            zoomedWrapper: "overflow-visible",
                        }}
                        src={getImageUrl(`banner/ruby-${id}.${theme}.png`)}
                        style={{
                            filter: `hue-rotate(${rotate}deg)`,
                        }}
                        onClick={() => setRotate(50)}
                        onMouseEnter={() =>
                            setTimerId(window.setInterval(setRotate, 100, 1))
                        }
                        onMouseLeave={() => window.clearInterval(timerId)}
                    />
                </div>
            )),
        [className, rotate, theme, timerId],
    );

    return (
        <div className="flex justify-center">
            <div className="mt-10 max-w-md sm:px-4 xl:mt-0">
                {/* <ParallaxY from={200} to={-70}> */}
                <div className="flex flex-col items-center">
                    <Image
                        disableSkeleton
                        isBlurred
                        isZoomed
                        alt="banner"
                        className={`dark:hue-rotate-0 xs:h-[257.03px] xs:w-[432px] ${className}`}
                        classNames={{ zoomedWrapper: "overflow-visible" }}
                        src={getImageUrl(`banner/main.${theme}.png`)}
                        style={{
                            filter: `hue-rotate(${rotate}deg)`,
                        }}
                        onClick={() => setRotate(50)}
                        onMouseEnter={() =>
                            setTimerId(window.setInterval(setRotate, 100, 1))
                        }
                        onMouseLeave={() => window.clearInterval(timerId)}
                    />

                    <div className="relative -mb-[60px] -mt-[60px] h-[170px] w-full xs:-mb-[40px] xs:-mt-[100px] xs:w-[416px] 2xl:-mb-[60px]">
                        {ruby.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 z-50 ${index === count ? "transition-rotate-in" : "transition-rotate-out"} `}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                {/* </ParallaxY> */}
            </div>
        </div>
    );
}
