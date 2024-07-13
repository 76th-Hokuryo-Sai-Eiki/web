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
    const { ref, inView } = once
        ? { ref: null, inView: true }
        : useInView({
              triggerOnce: false,
          });

    return (
        <div
            className={once || inView ? "fade-in" : "opacity-0"}
            ref={ref}
            style={{
                ["--duration" as string]: duration,
                ["--easing" as string]: easing,
            }}
        >
            {children}
        </div>
    );
}

export const FadeinBottom = ({
    children,
    duration = "0.7s",
    distance = "20px",
    once = false,
}: {
    children: ReactNode;
    duration?: string;
    distance?: string;
    once?: boolean;
}) => {
    const { ref, inView } = useInView({
        rootMargin: "-" + distance,
        triggerOnce: once,
    });

    const className = inView ? "fade-in-bottom" : "opacity-0";

    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child as ReactElement, {
                ref,
                className: [child.props.className, className]
                    .filter((e) => e)
                    .join(" "),
                style: {
                    "--duration": duration,
                    "--distance": distance,
                    ...child.props.style,
                },
            });
        } else {
            return child;
        }
    });
};
