import { ReactNode } from "react";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col h-fit">
            <Navbar />
            <main className="container mx-auto px-6 flex-grow pt-16">
                {children}
            </main>
        </div>
    );
}
