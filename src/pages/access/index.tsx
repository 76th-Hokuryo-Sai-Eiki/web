import { Divider } from "@nextui-org/divider";
import { useRef } from "react";

import { Routes } from "./routes";

import { Fadein } from "@/components/animations";
import SectionHeader from "@/components/section-header";
import { scrollIntoViewIfNeeded } from "@/functions/scroll";
import { LocationCard } from "@/pages/common/location-card";

const PLANE_MAP =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.6828428356785!2d140.85490131569682!3d38.263661191653135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1492608506872";

export default function AccessSection() {
    const mapRef = useRef<HTMLIFrameElement | null>(null);

    function showRoute(route: string) {
        if (mapRef.current && route) {
            if (mapRef.current.src != route) mapRef.current.src = route;

            if (mapRef.current) {
                scrollIntoViewIfNeeded(mapRef.current, { behavior: "smooth" });
            }
        }
    }

    return (
        <div className="m-2">
            <SectionHeader hashlink="#access">Access</SectionHeader>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-[2px] md:flex-row">
                    <div className="z-10 w-full border-2 border-default-200">
                        <Fadein duration={0.8}>
                            <iframe
                                ref={mapRef}
                                allowFullScreen
                                className="h-[50vh] opacity-95 dark:opacity-80"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={PLANE_MAP}
                                title="route-map"
                                width="100%"
                            />
                        </Fadein>
                    </div>

                    <div className="h-fit">
                        <Fadein>
                            <LocationCard
                                className="-mt-1 rounded-b-xl bg-default-200 px-1 pb-1 pt-1 sm:max-w-[350px] md:-ml-1 md:mt-5 md:rounded-r-xl md:rounded-bl-none md:pl-1 md:pt-0"
                                divider={
                                    <div className="px-3 md:-ml-1 md:pl-0 md:pr-3">
                                        <Divider className="mr-10" />
                                    </div>
                                }
                                onRoute={() => {
                                    showRoute(PLANE_MAP);
                                }}
                            />
                        </Fadein>
                    </div>
                </div>

                <Routes onRoute={showRoute} />
            </div>
        </div>
    );
}
