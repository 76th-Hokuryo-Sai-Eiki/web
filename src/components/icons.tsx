import { Image as NextUIImage } from "@nextui-org/image";
import {
    cloneElement,
    HTMLAttributes,
    ReactElement,
    SVGProps,
    useContext,
    useEffect,
    useState,
} from "react";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";

import { SuspendImage } from "./image";

import { ThemeContext } from "@/context/theme";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export function Logo({
    size = 36,
    height,
    width,
}: {
    size?: number;
    height?: number;
    width?: number;
}) {
    const { theme } = useContext(ThemeContext);

    return (
        <NextUIImage
            height={size || height}
            src={`logo.${theme}.png`}
            width={size || width}
        />
    );
}

export function Banner() {
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

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        PRELOAD_IMAGES.forEach((path) => (new Image().src = path));
    });

    return (
        <div className="flex justify-center">
            <div className="max-w-xl sm:max-w-lg sm:px-4">
                <SuspendImage
                    blurhash={BLURHASH[theme as "light" | "dark"]}
                    height={463}
                    layout="constrained"
                    priority={true}
                    src={`banner.${theme}.png`}
                    width={1250}
                />
            </div>
        </div>
    );
}

export function XTwitterIcon(
    props: HTMLAttributes<SVGElement> & { size: number }
) {
    const [icon, setIcon] = useState<ReactElement>(<FaXTwitter {...props} />);

    return cloneElement(icon, {
        onTouchStart: () => setIcon(<FaTwitter {...props} />),
        onTouchEnd: () => setIcon(<FaXTwitter {...props} />),
        onClick: () => setIcon(<FaXTwitter {...props} />),
        onMouseEnter: () => setIcon(<FaTwitter {...props} />),
        onMouseLeave: () => setIcon(<FaXTwitter {...props} />),
    });
}

export function GoogleCalendarIcon({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) {
    return (
        <svg
            height={size || height}
            viewBox="0 0 200 200"
            width={size || width}
            {...props}
        >
            <g>
                <g transform="translate(3.75 3.75)">
                    <path
                        d="M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579
            l5.263-53.947L148.882,43.618z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342
            c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026
            s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487
            c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276
            l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145
            c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184
            c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211
            s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421
            C73.408,129.263,69.145,127.934,65.211,125.276z"
                        fill="#1A73E8"
                    />
                    <path
                        d="M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z"
                        fill="#1A73E8"
                    />
                    <path
                        d="M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z"
                        fill="#EA4335"
                    />
                    <path
                        d="M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z"
                        fill="#34A853"
                    />
                    <path
                        d="M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263
            l10.526-23.684L148.882-3.75H12.039z"
                        fill="#4285F4"
                    />
                    <path
                        d="M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z"
                        fill="#188038"
                    />
                    <path
                        d="M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z"
                        fill="#FBBC04"
                    />
                    <path
                        d="M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z"
                        fill="#1967D2"
                    />
                </g>
            </g>
        </svg>
    );
}

export function NextUILogo(props: IconSvgProps) {
    const { width, height = 40 } = props;

    return (
        <svg
            fill="none"
            height={height}
            viewBox="0 0 161 32"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                className="fill-black dark:fill-white"
                d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
            />
            <path
                className="fill-black dark:fill-white"
                d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
            />
            <path
                className="fill-white dark:fill-black"
                d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
            />
        </svg>
    );
}
