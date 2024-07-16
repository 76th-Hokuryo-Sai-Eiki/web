import { forwardRef, HTMLAttributes } from "react";

function Inline_({
    className,
    ...props
}: HTMLAttributes<HTMLSpanElement> = {}) {
    return <span className={`inline-block ${className}`} {...props} />;
}

export const Inline = forwardRef(Inline_);
