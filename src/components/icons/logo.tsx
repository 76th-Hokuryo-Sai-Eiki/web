import { Image } from "@unpic/react";
import { useContext } from "react";

import { ThemeContext } from "@/context/theme";
import { getImageUrl } from "@/functions/utility";

export default function Logo({
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
        <Image
            alt="logo"
            height={height ?? size}
            layout="constrained"
            src={getImageUrl(`logo.${theme}.png`)}
            width={width ?? size}
        />
    );
}
