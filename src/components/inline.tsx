import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

function Inline_(
    { className = "", ...props }: HTMLAttributes<HTMLSpanElement> = {},
    ref: ForwardedRef<HTMLSpanElement>,
) {
    return (
        <span className={`inline-block ${className}`} {...props} ref={ref} />
    );
}

export const Inline = forwardRef(Inline_);

function InlineDiv_(
    { className = "", ...props }: HTMLAttributes<HTMLDivElement> = {},
    ref: ForwardedRef<HTMLDivElement>,
) {
    return <div className={`inline-block ${className}`} {...props} ref={ref} />;
}

export const InlineDiv = forwardRef(InlineDiv_);
