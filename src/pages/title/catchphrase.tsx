import { Fadein, FadeinSlide } from "@/components/animations";
import { subtitle } from "@/components/primitives";

export function Catchphrase() {
    return (
        <Fadein duration={0.3}>
            <div
                className="inline-block w-fit px-4 sm:px-8 mt-5 sm:mt-7 2xl:mt-12"
                style={{
                    borderTop: "solid 1px hsl(var(--nextui-default-400))",
                    borderBottom: "solid 1px hsl(var(--nextui-default-400))",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                }}
            >
                <FadeinSlide>
                    <p
                        className={subtitle({
                            class: "max-w-lg my-0",
                        })}
                        style={{
                            marginInline: "auto",
                            fontFamily: "Noto Serif JP",
                            fontSize: "13pt",
                        }}
                    >
                        <span className="inline-block ml-1">
                            <span
                                style={{
                                    color: "royalblue",
                                    fontSize: "22pt",
                                    paddingLeft: "5px",
                                }}
                            >
                                湧
                            </span>
                            き
                            <span
                                style={{
                                    fontSize: "15pt",
                                }}
                            >
                                出
                            </span>
                            る
                            <span
                                style={{
                                    fontSize: "17pt",
                                }}
                            >
                                想
                            </span>
                            像
                            <span
                                style={{
                                    fontSize: "15pt",
                                }}
                            >
                                力
                            </span>
                            で
                        </span>

                        <span className="inline-block mr-1">
                            <span className="inline-block ml-1">
                                <span
                                    style={{
                                        fontSize: "18pt",
                                        margin: "1px",
                                    }}
                                >
                                    秘
                                </span>
                                <span
                                    style={{
                                        verticalAlign: "2px",
                                    }}
                                >
                                    め
                                </span>
                                る
                                <span
                                    style={{
                                        fontSize: "17pt",
                                    }}
                                >
                                    好
                                </span>
                                <span
                                    style={{
                                        fontSize: "14pt",
                                    }}
                                >
                                    奇
                                </span>
                                <span
                                    style={{
                                        fontSize: "16pt",
                                    }}
                                >
                                    心
                                </span>
                                を
                            </span>
                            <span className="inline-block">
                                <span
                                    style={{
                                        color: "violet",
                                        fontSize: "22pt",
                                        margin: "1px",
                                    }}
                                >
                                    沸
                                </span>
                                き
                                <span
                                    style={{
                                        fontSize: "16pt",
                                        verticalAlign: "1px",
                                    }}
                                >
                                    起
                                </span>
                                こ
                                <span
                                    style={{
                                        fontSize: "18pt",
                                    }}
                                >
                                    せ
                                </span>
                                <span
                                    style={{
                                        fontSize: "20pt",
                                        paddingRight: "5px",
                                        margin: "3px",
                                    }}
                                >
                                    !
                                </span>
                            </span>
                        </span>
                    </p>
                </FadeinSlide>
            </div>
        </Fadein>
    );
}
