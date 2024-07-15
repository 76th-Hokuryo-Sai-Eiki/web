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
    duration = "0.6s",
    easing = "ease-in",
    once = false,
}: {
    children: ReactNode;
    duration?: string;
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
                ["--duration" as string]: duration,
                ["--easing" as string]: easing,
            }}
        >
            {children}
        </span>
    );
}

export function FadeinSlide({
    children,
    duration = "0.7s",
    distance = 20,
    once = false,
}: {
    children: ReactNode;
    duration?: string;
    distance?: number;
    once?: boolean;
}) {
    const { ref, inView } = useInView({
        rootMargin: `${-distance}px`,
        triggerOnce: once,
    });

    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child as ReactElement, {
                ref,
                className: [
                    child.props.className,
                    inView ? "fade-in-bottom" : "opacity-0",
                ]
                    .filter((e) => e)
                    .join(" "),
                style: {
                    "--duration": duration,
                    "--distance": `${distance}px`,
                    ...child.props.style,
                },
            });
        } else {
            return child;
        }
    });
}
