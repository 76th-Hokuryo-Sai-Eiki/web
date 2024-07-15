import { FadeinSlide } from "@/components/animations";

export function Content() {
    return (
        <section className="flex flex-col m-2">
            <div className="main-inner form-contents">
                <div>
                    <FadeinSlide distance={20} duration="0.8s">
                        <h1
                            className="header mb-3"
                            style={{
                                fontSize: "28pt",
                                fontFamily: "Kode Mono",
                            }}
                        >
                            Content
                        </h1>
                    </FadeinSlide>
                </div>
            </div>
        </section>
    );
}
