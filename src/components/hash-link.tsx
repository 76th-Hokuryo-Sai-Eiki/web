import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { cloneElement } from "react";
import {
    HashLinkProps,
    HashLink as ReactRouterHashLink,
} from "react-router-hash-link";

import { scrollIntoViewIfNeeded } from "@/functions/scroll";

export default function HashLink({ to, ...props }: HashLinkProps) {
    return cloneElement(
        <ReactRouterHashLink
            smooth
            className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            scroll={(e) =>
                scrollIntoViewIfNeeded(e, {
                    behavior: "smooth",
                    forceTop: true,
                })
            }
            to={to}
        />,
        props
    );
}
