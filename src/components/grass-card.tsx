import { HTMLAttributes } from "react";
export function GrassCard({
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            {...props}
        >
            {children}
        </div>
    );
}
