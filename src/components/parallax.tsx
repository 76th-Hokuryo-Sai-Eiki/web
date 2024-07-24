import { HTMLAttributes } from "react";

import { InlineDiv } from "./inline";

export function ParallaxY({
    className = "",
    style,
    depth = 0,
    from,
    to,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    depth?: number;
    from?: number;
    to?: number;
    responsive?: string;
}) {
    return (
        <InlineDiv
            className={`parallax ${className}`}
            style={{
                ...((from ?? -depth)
                    ? { ["--scroll-y-from" as string]: `${from ?? -depth}px` }
                    : {}),
                ...((to ?? depth)
                    ? { ["--scroll-y-to" as string]: `${to ?? depth}px` }
                    : {}),
                ...style,
            }}
            {...props}
        />
    );
}
