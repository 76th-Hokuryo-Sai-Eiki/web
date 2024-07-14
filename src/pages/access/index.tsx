import { FadeinBottom } from "@/components/animations";
import { Location } from "./location";
import { Routes } from "./routes";
import { useRef } from "react";

const PLANE_MAP =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.6828428356785!2d140.85490131569682!3d38.263661191653135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2836682a9c3d%3A0x6f15d06231e808af!2z5a6u5Z-O55yM5LuZ5Y-w56ys5LqM6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1492608506872";

export function Access() {
    const mapRef = useRef<HTMLIFrameElement | null>(null);

    function showRoute(route: string) {
        if (mapRef.current && route) mapRef.current.src = route;
    }

    return (
        <section className="flex flex-col m-2">
            <div className="main-inner form-contents">
                <div>
                    <FadeinBottom duration="0.8s" distance="20px">
                        <h1
                            className="header mb-3"
                            style={{
                                fontSize: "28pt",
                                fontFamily: "Kode Mono",
                            }}
                        >
                            Access
                        </h1>
                    </FadeinBottom>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row gap-[2px]">
                            <FadeinBottom duration="0.8s" distance="40px">
                                <div className="w-full z-10" id="google-map">
                                    <iframe
                                        ref={mapRef}
                                        src={PLANE_MAP}
                                        className="h-[50vh]"
                                        width="100%"
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </FadeinBottom>

                            <div className="h-fit">
                                <Location
                                    onRoute={() => {
                                        showRoute(PLANE_MAP);
                                    }}
                                />
                            </div>
                        </div>

                        <Routes onRoute={showRoute} />
                    </div>
                </div>
            </div>
        </section>
    );
}
