import { ComponentType, ForwardedRef, forwardRef } from "react";
import { useInView } from "react-intersection-observer";

export function defer<PropsType>(Component: ComponentType<PropsType>) {
    function DeferredComponent(props: any, forwardedRef: ForwardedRef<any>) {
        const { ref, inView } = useInView({ triggerOnce: true });

        return (
            <>
                <div ref={ref} />
                {inView && <Component ref={forwardedRef} {...props} />}
            </>
        );
    }

    return forwardRef(DeferredComponent);
}
