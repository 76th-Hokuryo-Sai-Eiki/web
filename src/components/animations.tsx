import { Children, cloneElement, ReactElement, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

import isCrawler from "@/functions/is-crawler";

export function Fadein({
    children,
    duration = 0.6,
    easing = "ease-in",
    once = false,
}: {
    children: ReactNode;
    duration?: number;
    easing?: string;
    once?: boolean;
}) {
    const { ref, inView } = useInView({
        triggerOnce: once,
    });

    if (isCrawler) return children;

    return (
        <div
            ref={ref}
            className={inView ? "fade-in" : "opacity-0"}
            style={{
                ["--duration" as string]: `${duration}s`,
                ["--easing" as string]: easing,
            }}
        >
            {children}
        </div>
    );
}

export function FadeinSlide({
    children,
    duration = 0.7,
    distance = 20,
    once = false,
}: {
    children: ReactElement;
    duration?: number;
    distance?: number;
    once?: boolean;
}) {
    const { ref, inView } = useInView({
        triggerOnce: once,
    });

    if (isCrawler) return children;

    const element = Children.only(children);

    return cloneElement(element, {
        ref,
        className: [
            element.props.className,
            duration <= 0
                ? "opacity-1"
                : inView
                  ? "fade-in-bottom"
                  : "opacity-0",
        ]
            .filter((e) => e)
            .join(" "),
        style: {
            "--duration": `${duration}s`,
            "--distance": `${distance}px`,
            ...element.props.style,
        },
    });
}
