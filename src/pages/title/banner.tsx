import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { useContext, useEffect, useMemo, useReducer, useState } from "react";

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
        }, 2400);

        return () => {
            clearInterval(id);
        };
    });

    const ruby = useMemo(
        () =>
            [0, 1].map((id) => (
                <div key={id}>
                    <Image
                        disableSkeleton
                        isBlurred
                        isZoomed
                        alt={["wakuwaku", "futsuyo"][id]}
                        className={className}
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
            <div className="mt-16 max-w-md sm:px-4">
                {/* <ParallaxY from={200} to={-70}> */}
                <div className="flex flex-col items-center px-2">
                    <Image
                        disableSkeleton
                        isBlurred
                        isZoomed
                        alt="banner"
                        className={className}
                        classNames={{
                            zoomedWrapper: "overflow-visible ",
                            blurredImg: "px-4",
                            img: "px-4",
                        }}
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

                    <Spacer y={3} />

                    <div className="relative h-14 w-full">
                        {ruby.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 z-50 max-w-[416px] ${index === count ? "transition-rotate-in" : "transition-rotate-out"} `}
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
