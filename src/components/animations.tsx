import {
    Children,
    cloneElement,
    isValidElement,
    ReactElement,
    ReactNode,
} from "react";
import { useInView } from "react-intersection-observer";

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

    return (
        <span
            ref={ref}
            className={inView ? "fade-in" : "opacity-0"}
            style={{
                ["--duration" as string]: `${duration}s`,
                ["--easing" as string]: easing,
            }}
        >
            {children}
        </span>
    );
}

export function FadeinSlide({
    children,
    duration = 0.7,
    distance = 20,
    once = false,
}: {
    children: ReactNode;
    duration?: number;
    distance?: number;
    once?: boolean;
}) {
    const { ref, inView } = useInView({
        // rootMargin: `${-distance}px`,
        triggerOnce: once,
    });

    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child as ReactElement, {
                ref,
                className: [
                    child.props.className,
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
                    ...child.props.style,
                },
            });
        } else {
            return child;
        }
    });
}
