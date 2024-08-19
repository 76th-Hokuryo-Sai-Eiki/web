import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

function Phrase_(
    { className = "", ...props }: HTMLAttributes<HTMLSpanElement> = {},
    ref: ForwardedRef<HTMLSpanElement>,
) {
    return (
        <span className={`inline-block ${className}`} {...props} ref={ref} />
    );
}

export const Phrase = forwardRef(Phrase_);

function PhraseDiv_(
    { className = "", ...props }: HTMLAttributes<HTMLDivElement> = {},
    ref: ForwardedRef<HTMLDivElement>,
) {
    return <div className={`inline-block ${className}`} {...props} ref={ref} />;
}

export const PhraseDiv = forwardRef(PhraseDiv_);
