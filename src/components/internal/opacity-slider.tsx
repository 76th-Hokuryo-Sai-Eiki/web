import { Button } from "@nextui-org/button";
import { Slider, SliderValue } from "@nextui-org/slider";
import chroma from "chroma-js";

import { VscDiffRemoved } from "@/components/icons";

export interface OpacitySliderProps {
    className?: string;
}

export default function InternalSlider({
    opacity,
    setOpacity,
    resetOpacity,
    maxValue = 1,
}: {
    opacity: number;
    maxValue?: number;
    setOpacity: (value: number) => void;
    resetOpacity: () => void;
}) {
    return (
        <Slider
            aria-label="Background Props Setting"
            classNames={{
                base: "max-w-md gap-3",
                track: "border-x-0 mx-[0.625rem] bg-gradient-to-r from-cyan-100 to-cyan-500 ",
                filler: "mx-0.5 bg-default-200",
            }}
            fillOffset={maxValue}
            maxValue={maxValue}
            minValue={0}
            renderThumb={(props) => (
                <div
                    {...props}
                    className="group top-1/2 cursor-grab rounded-full border-small border-default-200 bg-background p-0.5 shadow-medium data-[dragging=true]:cursor-grabbing dark:border-default-400/50"
                >
                    <span
                        className="block h-4 w-4 rounded-full bg-gradient-to-br from-cyan-100 shadow-small transition-transform group-data-[dragging=true]:scale-85"
                        style={{
                            ["--tw-gradient-to" as string]: `${chroma.scale(["#CFFAFE", "#06B6D4"]).domain([0, maxValue])(opacity)} var(--tw-gradient-to-position)`,
                        }}
                    />
                </div>
            )}
            size="sm"
            startContent={
                <Button
                    disableAnimation
                    disableRipple
                    isIconOnly
                    aria-label="reset opacity config"
                    className="my-0 -mr-2 h-4 bg-inherit py-0 pt-0.5"
                    radius="none"
                    size="sm"
                    variant="flat"
                    onClick={() => resetOpacity()}
                >
                    <VscDiffRemoved
                        className="text-default-400 brightness-75"
                        size={16}
                    />
                </Button>
            }
            step={0.01}
            value={opacity}
            onChange={(value: SliderValue) => {
                setOpacity(value as number);
            }}
        />
    );
}
