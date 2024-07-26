import { lazy, Suspense, useContext } from "react";

import { OpacitySliderProps } from "./internal/opacity-slider";

import { PagePreferenceContext } from "@/context/page-preference";

const InternalSlider = lazy(() => import("./internal/opacity-slider"));

export const OpacitySlider = ({ className }: OpacitySliderProps) => {
    const {
        opacity,
        setBgImageOpacity,
        setBgPropOpacity,
        resetBgImageOpacity,
        resetBgPropOpacity,
    } = useContext(PagePreferenceContext);

    return (
        <>
            <div className={`flex w-40 flex-col ${className}`}>
                <Suspense>
                    <InternalSlider
                        maxValue={0.5}
                        opacity={opacity.bgImage}
                        resetOpacity={resetBgImageOpacity}
                        setOpacity={setBgImageOpacity}
                    />
                    <InternalSlider
                        opacity={opacity.bgProp}
                        resetOpacity={resetBgPropOpacity}
                        setOpacity={setBgPropOpacity}
                    />
                </Suspense>
            </div>
        </>
    );
};
