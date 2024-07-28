import { Link } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";

import fonts from "./data/fonts";
import icons from "./data/icons";
import { licenseRef } from "./ref";

import { Inline } from "@/components/inline";
import Sbsp from "@/components/sbsp";

function Fonts() {
    return (
        <div className="flex flex-col items-start justify-start">
            <h3>
                <Link
                    isExternal
                    className="text-2xl text-inherit"
                    href="https://fonts.google.com/?preview.layout=grid"
                >
                    Google Fonts
                </Link>
            </h3>
            <div className="ml-3">
                <ul className="bullet-point my-4 text-small text-default-600">
                    {fonts.map((font: string, index) => (
                        <li key={index} className="!mt-0.5">
                            <Link
                                isExternal
                                className="inline text-small text-inherit"
                                href={`https://fonts.google.com/specimen/${font.replaceAll(" ", "+")}`}
                                style={{
                                    fontFamily: font,
                                    fontSize: "1rem",
                                }}
                            >
                                {font}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="ml-3 text-tiny text-default-500">
                All of these fonts are licensed under the
                <Sbsp />
                <Inline>
                    <Link
                        isExternal
                        className="text-tiny text-success"
                        href={licenseRef["Open Font License"]}
                    >
                        Open Font License
                    </Link>
                    .
                </Inline>
            </p>
        </div>
    );
}

export function Icons() {
    return (
        <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl">Icons</h2>

            <div className="ml-3">
                <ul className="bullet-point my-4 text-tiny text-default-600">
                    {icons.map(
                        (
                            { name, link, author, author_link, license },
                            index,
                        ) => (
                            <li key={index}>
                                <Inline>
                                    &quot;
                                    <Link
                                        isExternal
                                        className="inline text-tiny text-primary"
                                        href={link}
                                    >
                                        {name}
                                    </Link>
                                    &quot;
                                </Inline>
                                <Sbsp />
                                {author && (
                                    <>
                                        by
                                        <Sbsp />
                                        <Link
                                            isExternal
                                            className="inline text-tiny text-primary"
                                            href={author_link}
                                            isDisabled={!author_link}
                                        >
                                            {author}
                                        </Link>
                                        <Sbsp />
                                    </>
                                )}
                                /
                                <Sbsp />
                                <Inline>
                                    <Link
                                        isExternal
                                        className="inline text-tiny text-success"
                                        href={(licenseRef as any)[license]}
                                    >
                                        {license}
                                    </Link>
                                    .
                                </Inline>
                            </li>
                        ),
                    )}
                </ul>
            </div>
        </div>
    );
}

function Others() {
    return (
        <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl">Other Credits</h2>

            <div className="ml-3">
                <ul className="bullet-point my-4 text-tiny text-default-600">
                    <li>
                        Part of the components in this project are extracted
                        from
                        <Sbsp />
                        <Inline>
                            <Link
                                isExternal
                                className="text-tiny text-primary"
                                href="https://nextui.org/"
                            >
                                nextui-org
                            </Link>
                            &apos;s
                        </Inline>
                        <Sbsp />
                        <Inline>
                            &quot;
                            <Link
                                isExternal
                                className="text-tiny text-primary"
                                href="https://github.com/nextui-org/vite-template"
                            >
                                vite-template
                            </Link>
                            &quot;,
                        </Inline>
                        <Sbsp />
                        which is subject to the
                        <Sbsp />
                        <Inline>
                            <Link
                                isExternal
                                className="text-tiny text-success"
                                href={licenseRef["MIT License"]}
                            >
                                MIT License
                            </Link>
                            .
                        </Inline>
                    </li>

                    <li>
                        Part of the components in this project are extracted
                        from
                        <Sbsp />
                        <Inline>
                            <Link
                                isExternal
                                className="text-tiny text-primary"
                                href="https://github.com/amrlabib"
                            >
                                Amr Labib
                            </Link>
                            &apos;s
                        </Inline>
                        <Sbsp />
                        &quot;
                        <Inline>
                            <Link
                                isExternal
                                className="text-tiny text-primary"
                                href="https://www.npmjs.com/package/react-timer-hook"
                            >
                                react-timer-hook
                            </Link>
                            &quot;,
                        </Inline>
                        <Sbsp />
                        which is subject to the
                        <Sbsp />
                        <Inline>
                            <Link
                                isExternal
                                className="text-tiny text-success"
                                href="https://opensource.org/license/mit"
                            >
                                MIT License
                            </Link>
                            .
                        </Inline>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export function Credits() {
    return (
        <>
            <Fonts />

            <Spacer y={4} />

            <Icons />

            <Others />
        </>
    );
}
