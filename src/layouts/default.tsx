import { Spacer } from "@nextui-org/spacer"
import { ReactNode } from "react";

import { Navbar } from "@/components/navbar";
import Footer from "@/pages/footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col h-fit">
            <Navbar />

            <main className="container mx-auto px-6 flex-grow pt-16">
                {children}
            </main>

            <Spacer y={20} />

            <footer id="footer" className="flex justify-center">
                <div className="w-[94vw]">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
