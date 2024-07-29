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
import { removeHash } from "@/functions/utility";

const onHashchange = () => {
    const hash = window.location.hash;

    const anchor = document.getElementById(hash);

    if (!anchor) return;

    scrollIntoViewIfNeeded(anchor, {
        marginTop: 10,
        behavior: "smooth",
        forceTop: true,
    });

    console.log(hash);

    if (hash === "#head") removeHash();
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

                if (window.location.hash === to) {
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                } else {
                    window.location.hash = to;
                }
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
