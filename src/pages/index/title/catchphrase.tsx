import { subtitle } from "@/components/primitives";

export function Catchphrase() {
    return (
        <p
            className={subtitle({
                class: "max-w-lg mt-3 sm:mt-5 md:mt-7 lg:mt-10",
            })}
            style={{
                borderTop: "solid 1px gray",
                borderBottom: "solid 1px gray",
                marginTop: "3rem",
                paddingTop: "6px",
                paddingBottom: "6px",
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
    );
}
