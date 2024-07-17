import { Spacer } from "@nextui-org/spacer";
import { ReactNode } from "react";

import Footer from "@/pages/footer";
import { Navbar } from "@/pages/navbar";

export default function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex h-fit flex-col">
            <Navbar />

            <header id="#head" />

            <main className="container mx-auto flex-grow px-6 pt-16">
                {children}
            </main>

            <Spacer y={20} />

            <footer className="flex justify-center" id="#footer">
                <div className="w-screen">
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
