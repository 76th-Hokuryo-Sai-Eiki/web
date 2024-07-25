import { Link } from "@nextui-org/link";

import { NextUILogo, ReactLogo, ViteLogo } from "@/components/icons";

export function Logos() {
    return (
        <div className="w-min">
            <p
                className="text-large text-default-600"
                style={{ fontFamily: "Kode Mono" }}
            >
                Powered by:
            </p>
            <ul className="flex flex-row gap-4">
                <li>
                    <Link
                        isExternal
                        color="foreground"
                        href="https://nextui.org/"
                    >
                        <NextUILogo className="-mr-9" height={50} />
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <ul className="flex flex-col gap-1">
                        <li className="-my-1">
                            <Link
                                isExternal
                                className="text-xl"
                                color="foreground"
                                href="https://react.dev/"
                                style={{
                                    fontFamily: "Kode Mono",
                                }}
                            >
                                <ReactLogo className="mr-1.5" height={20} />
                                <span className="text-default-700">React</span>
                            </Link>
                        </li>
                        <li className="-my-1">
                            <Link
                                isExternal
                                className="text-xl"
                                color="foreground"
                                href="https://ja.vitejs.dev/"
                                style={{
                                    fontFamily: "Kode Mono",
                                }}
                            >
                                <ViteLogo
                                    className="ml-0.5 mr-1.5"
                                    height={20}
                                />
                                <span className="text-default-700">Vite</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <p className="text-tiny text-default-500">
                We do <small>NOT</small> have any official relationship with
                these products.
            </p>
        </div>
    );
}
