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

window.addEventListener("hashchange", onHashchange);

export default function HashLink({
    to,
    plane = false,
    onClick,
    className,
    ...props
}: HTMLAttributes<HTMLButtonElement> & { to: string; plane?: boolean }) {
    return cloneElement(
        <button
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

HashLink.Provider = function HashLinkProvider({
    children,
}: {
    children: ReactNode;
}) {
    useEffect(() => {
        onHashchange();
        // window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    return children;
};
