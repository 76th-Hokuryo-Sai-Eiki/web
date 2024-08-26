import { lazy, Suspense, SuspenseProps } from "react";
import { IconType } from "react-icons";

import { IconSvgProps } from "./internal/props";

import lazyImport from "@/functions/lazy-import";

export type { IconSvgProps } from "./internal/props";

export { default as Logo } from "./logo";

const MODULES = {
    GoogleCalendarIcon: lazy(() => import("./google-calendar")),
    NextUILogo: lazy(() => import("./nextui")),
    ReactLogo: lazy(() => import("./react")),
    ViteLogo: lazy(() => import("./vite")),

    ...lazyImport(
        () => import("./react-icons"),
        [
            "AiOutlineCopyright",

            "BiSolidToTop",

            "BsFillSunFill",
            "BsFillTelephoneFill",

            "FaCarAlt",
            "FaDownload",
            "FaEye",
            "FaMoon",
            "FaRoute",
            "FaSearch",
            "FaWalking",

            "FaBusSimple",
            "FaChevronDown",
            "FaCircleInfo",
            "FaFilter",
            "FaLocationDot",
            "FaRegCircleQuestion",
            "FaSignsPost",
            "FaTrainSubway",

            "IoSchool",

            "MdLocalParking",
            "MdPedalBike",

            "PiTrain",

            "SiGooglemaps",
            "TbLicense",

            "VscDiffRemoved",
        ],
    ),
} as unknown as Record<string, IconType>;

export const {
    GoogleCalendarIcon,
    NextUILogo,
    ReactLogo,
    ViteLogo,

    AiOutlineCopyright,

    BiSolidToTop,

    BsFillSunFill,
    BsFillTelephoneFill,

    FaCarAlt,
    FaDownload,
    FaEye,
    FaMoon,
    FaRoute,
    FaSearch,
    FaWalking,

    FaBusSimple,
    FaChevronDown,
    FaCircleInfo,
    FaFilter,
    FaLocationDot,
    FaRegCircleQuestion,
    FaSignsPost,
    FaTrainSubway,

    IoSchool,

    MdLocalParking,
    MdPedalBike,

    PiTrain,

    SiGooglemaps,
    TbLicense,

    VscDiffRemoved,
} = Object.fromEntries(
    Object.entries(MODULES).map(([name, Component]) => [
        name,
        (props: IconSvgProps, suspenseProps: SuspenseProps = {}) => (
            <Suspense {...suspenseProps}>
                <Component {...props} />
            </Suspense>
        ),
    ]),
);
