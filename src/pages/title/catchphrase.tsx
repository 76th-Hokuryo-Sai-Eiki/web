import { FadeinSlide } from "@/components/animations";
import { Inline, InlineDiv } from "@/components/inline";
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
                        fontSize: "1.0625em",
                    }}
                >
                    <Inline className="ml-1">
                        <FadeinSlide once distance={30} duration={1.4}>
                            <InlineDiv
                                style={{
                                    color: "royalblue",
                                    fontSize: "1.8125rem",
                                    paddingLeft: "5px",
                                }}
                            >
                                湧
                            </InlineDiv>
                        </FadeinSlide>
                        き
                        <span
                            style={{
                                fontSize: "1.25em",
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
                                fontSize: "1.25em",
                            }}
                        >
                            力
                        </span>
                        で
                    </Inline>

                    <Inline className="mr-1">
                        <Inline className="ml-1">
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
                        </Inline>
                        <Inline>
                            <FadeinSlide once distance={30} duration={1}>
                                <InlineDiv
                                    style={{
                                        color: "violet",
                                        fontSize: "1.8125rem",
                                        margin: "1px",
                                    }}
                                >
                                    沸
                                </InlineDiv>
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
                        </Inline>
                    </Inline>
                </div>
            </FadeinSlide>
        </div>
    );
}
