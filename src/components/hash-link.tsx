import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { cloneElement, HTMLAttributes } from "react";

export default function HashLink({
    to,
    className,
    ...props
}: HTMLAttributes<HTMLButtonElement> & { to: string }) {
    return cloneElement(
        <button
            className={clsx(
                className,
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            onClick={() => {
                window.location.hash = to;

                window.dispatchEvent(new HashChangeEvent("hashchange"));
            }}
            {...props}
        />
    );
}
