import { Image } from "@nextui-org/image";
import { useContext, useReducer, useState } from "react";

import { ParallaxY } from "../parallax";

import { ThemeContext } from "@/context/theme";
import { getImageUrl, randomRange } from "@/functions/utility";

export default function Banner({ className }: { className?: string }) {
    const { theme } = useContext(ThemeContext);

    const [timerId, setTimerId] = useState<number | undefined>(undefined);

    const [rotate, setRotate] = useReducer(
        (current: number, value: number) => current + randomRange(0, value),
        80,
    );

    return (
        <div className="flex justify-center">
            <div className="max-w-md sm:px-4">
                <ParallaxY from={200} to={-70}>
                    <Image
                        disableSkeleton
                        isBlurred
                        isZoomed
                        alt="banner"
                        className={`dark:hue-rotate-0 xs:h-[257.03px] xs:w-[432px] ${className}`}
                        classNames={{ zoomedWrapper: "overflow-visible" }}
                        src={getImageUrl(`banner.${theme}.png`)}
                        style={{
                            filter: `hue-rotate(${rotate}deg)`,
                        }}
                        onClick={() => setRotate(50)}
                        onMouseEnter={() =>
                            setTimerId(window.setInterval(setRotate, 100, 1))
                        }
                        onMouseLeave={() => window.clearInterval(timerId)}
                    />
                </ParallaxY>
            </div>
        </div>
    );
}
