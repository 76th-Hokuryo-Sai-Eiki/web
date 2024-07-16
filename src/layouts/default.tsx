import { Spacer } from "@nextui-org/spacer";
import { ReactNode } from "react";

import Footer from "@/pages/footer";
import { Navbar } from "@/pages/navbar";

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col h-fit">
            <Navbar />

            <main className="container mx-auto px-6 flex-grow pt-16">
                {children}
            </main>

            <Spacer y={20} />

            <footer className="flex justify-center" id="#footer">
                <div className="w-[94vw]">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
