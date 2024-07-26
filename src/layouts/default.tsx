import { Spacer } from "@nextui-org/spacer";
import { lazy, ReactNode, Suspense, useRef } from "react";

import { PagePreferenceContext } from "@/context/page-preference";
import { useOpacity } from "@/hooks/opacity";
import Footer from "@/pages/footer";
import { Navbar } from "@/pages/navbar";

const Background = lazy(() => import("./internal/background"));

export default function DefaultLayout({ children }: { children: ReactNode }) {
    const opacityConfig = useOpacity(() => {
        return {
            light: {
                bgImage: 0.3,
                bgProp: Math.min(0.6, window.innerWidth * 0.0007),
            },
            dark: {
                bgImage: 0.15,
                bgProp: 0.3,
            },
        };
    });

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <PagePreferenceContext.Provider value={opacityConfig}>
            <div ref={containerRef} className="relative flex h-fit flex-col">
                <Navbar />

                <header id="#head" />

                <Suspense>
                    <Background
                        containerRef={containerRef}
                        opacityConfig={opacityConfig}
                    />
                </Suspense>

                <main className="container z-[5] mx-auto flex-grow px-6 pt-16">
                    {children}
                </main>

                <Spacer y={20} />

                <footer className="z-[5] flex justify-center" id="#footer">
                    <div className="w-screen">
                        <Footer />
                    </div>
                </footer>
            </div>
        </PagePreferenceContext.Provider>
    );
}
