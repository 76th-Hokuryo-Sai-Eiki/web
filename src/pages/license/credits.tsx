import { Link } from "@nextui-org/link";

export function Credits() {
    return (
        <div className="mr-10 flex flex-col items-start justify-start">
            <h2 className="text-2xl">Other Credits</h2>

            <ul className="bullet-point my-4 text-default-600">
                <li>
                    &quot;
                    <Link
                        className="inline text-small text-inherit [line-height:inherit]"
                        href="https://fontawesome.com/"
                    >
                        Font Awesome
                    </Link>
                    &quot; icons by Fonticons, Inc. is licensed under
                    <Link
                        className="ml-1 inline text-small text-inherit [line-height:inherit]"
                        href="https://creativecommons.org/licenses/by/4.0/"
                    >
                        CC BY 4.0
                    </Link>
                    .
                </li>
                <li>
                    &quot;
                    <Link
                        isExternal
                        className="inline text-small text-inherit [line-height:inherit]"
                        href="https://microsoft.github.io/vscode-codicons/dist/codicon.html"
                    >
                        Codicons
                    </Link>
                    &quot; by
                    <Link
                        isExternal
                        className="mx-1 inline text-small text-inherit [line-height:inherit]"
                        href="https://github.com/microsoft"
                    >
                        Microsoft
                    </Link>
                    is licensed under
                    <Link
                        isExternal
                        className="ml-1 inline text-small text-inherit [line-height:inherit]"
                        href="https://creativecommons.org/licenses/by/4.0/"
                    >
                        CC BY 4.0
                    </Link>
                    .
                </li>
            </ul>
        </div>
    );
}

/*
 */
