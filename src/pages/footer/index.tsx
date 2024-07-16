import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { FaGithub } from "react-icons/fa";

import { Inline } from "@/components/inline";

export default function Footer() {
    return (
        <Card className="rounded-b-none bg-default-200">
            <CardBody>
                <Link
                    showAnchorIcon
                    anchorIcon={<FaGithub size={40} />}
                    color="foreground"
                    href="https://github.com/76th-Hokuryo-Sai-Eiki/web"
                />
            </CardBody>
            <CardFooter className="w-full grid grid-cols-3 items-center justify-between py-3">
                <div className="row-start-1 col-start-1 col-span-3 flex flex-col justify-center min-w-max">
                    <p className="text-small xs:text-medium sm:text-large text-default-600 text-center">
                        <span>第76回北稜祭実行委員会</span>
                        <br />
                        <span>映像記録部 WEB班</span>
                    </p>
                </div>
                <div className="row-start-1 col-start-3 flex flex-col items-end h-full">
                    <div className="flex flex-row items-end h-full">
                        <p className="hidden [@media(min-width:350px)]:inline text-tiny sm:text-medium text-right text-default-500">
                            build-id:{" "}
                            <Inline>
                                {__BUILT_AT__.match(/.{3}/g)?.join(".")}
                            </Inline>
                        </p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
