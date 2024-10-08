import { FadeinSlide } from "@/components/animations";
import { Phrase, PhraseDiv } from "@/components/inline";
import { subtitle } from "@/components/primitives";

export default function Catchphrase() {
    return (
        <div
            className="mt-5 inline-block w-fit px-4 sm:mt-7 sm:px-8 2xl:mt-12"
            style={{
                borderTop: "solid 1px hsl(var(--nextui-default-400))",
                borderBottom: "solid 1px hsl(var(--nextui-default-400))",
                paddingTop: "6px",
                paddingBottom: "6px",
            }}
        >
            <FadeinSlide>
                <div
                    className={subtitle({
                        class: "my-0 max-w-lg",
                    })}
                    style={{
                        marginInline: "auto",
                        fontFamily: "Noto Serif JP",
                        fontSize: "1.0625rem",
                    }}
                >
                    <Phrase className="ml-1">
                        <FadeinSlide once distance={30} duration={1.4}>
                            <PhraseDiv
                                style={{
                                    color: "royalblue",
                                    fontSize: "1.8125rem",
                                    paddingLeft: "5px",
                                }}
                            >
                                湧
                            </PhraseDiv>
                        </FadeinSlide>
                        き
                        <span
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >
                            出
                        </span>
                        る
                        <span
                            style={{
                                fontSize: "1.4375rem",
                            }}
                        >
                            想
                        </span>
                        像
                        <span
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >
                            力
                        </span>
                        で
                    </Phrase>

                    <Phrase className="mr-1">
                        <Phrase className="ml-1">
                            <span
                                style={{
                                    fontSize: "1.5rem",
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
                                    fontSize: "1.4375rem",
                                }}
                            >
                                好
                            </span>
                            <span
                                style={{
                                    fontSize: "1.1875rem",
                                }}
                            >
                                奇
                            </span>
                            <span
                                style={{
                                    fontSize: "1.3125rem",
                                }}
                            >
                                心
                            </span>
                            を
                        </Phrase>
                        <Phrase>
                            <FadeinSlide once distance={30} duration={1}>
                                <PhraseDiv
                                    style={{
                                        color: "violet",
                                        fontSize: "1.8125rem",
                                        margin: "1px",
                                    }}
                                >
                                    沸
                                </PhraseDiv>
                            </FadeinSlide>
                            き
                            <span
                                style={{
                                    fontSize: "1.3125rem",
                                    verticalAlign: "1px",
                                }}
                            >
                                起
                            </span>
                            こ
                            <span
                                style={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                せ
                            </span>
                            <span
                                style={{
                                    fontSize: "1.6875rem",
                                    paddingRight: "5px",
                                    margin: "3px",
                                }}
                            >
                                !
                            </span>
                        </Phrase>
                    </Phrase>
                </div>
            </FadeinSlide>
        </div>
    );
}
