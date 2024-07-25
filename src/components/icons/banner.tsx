import { Image } from "@unpic/react";
import { useContext } from "react";

import { ThemeContext } from "@/context/theme";
import { getImageUrl } from "@/functions/utility";

export default function Banner({ className }: { className?: string }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex justify-center">
            <div className="max-w-xl sm:max-w-lg sm:px-4">
                <Image
                    className={className}
                    height={463}
                    layout="constrained"
                    src={getImageUrl(`banner.${theme}.png`)}
                    width={1250}
                />
            </div>
        </div>
    );
}
