import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import {
    cloneElement,
    HTMLAttributes,
    MouseEvent,
    ReactNode,
    useEffect,
} from "react";

import { scrollIntoViewIfNeeded } from "@/functions/scroll";

const onHashchange = () => {
    const anchor = document.getElementById(window.location.hash);

    if (anchor)
        scrollIntoViewIfNeeded(anchor, {
            marginTop: 10,
            behavior: "smooth",
            forceTop: true,
        });
};

export default function Hashlink({
    to,
    plane = false,
    onClick,
    className,
    ...props
}: HTMLAttributes<HTMLButtonElement> & { to: string; plane?: boolean }) {
    return cloneElement(
        <button
            aria-label={`Scroll to ${to}`}
            className={
                plane
                    ? className
                    : clsx(
                          className,
                          linkStyles({ color: "foreground" }),
                          "data-[active=true]:font-medium data-[active=true]:text-primary",
                      )
            }
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                if (onClick) onClick(e);

                window.location.hash = to;

                window.dispatchEvent(new HashChangeEvent("hashchange"));
            }}
            {...props}
        />,
    );
}

Hashlink.Provider = function HashlinkProvider({
    children,
}: {
    children: ReactNode;
}) {
    useEffect(() => {
        window.addEventListener("hashchange", onHashchange);

        return () => {
            window.removeEventListener("hashchange", onHashchange);
        };
    });

    return children;
};
