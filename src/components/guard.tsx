import { sha256 } from "js-sha256";
import { ReactNode, useEffect, useState } from "react";

export function makeGuard() {
    let asked = false;
    let view = false;

    function Guard({ children }: { children: ReactNode }) {
        const HASH = import.meta.env.VITE_PASS_HASH;
        const [hash, setHash] = useState<string | null>(null);

        useEffect(() => {
            if (HASH && !asked && hash === null) {
                asked = true;
                setHash(sha256(window.prompt("Pass?") ?? ""));
                view = true;
            }
        }, [HASH, hash]);

        if (!HASH) return children;
        if (!view) return null;

        return hash === HASH ? (
            children
        ) : (
            <h1 style={{ fontSize: "30pt" }}>Forbidden</h1>
        );
    }

    return Guard;
}
