import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { FaGithub } from "react-icons/fa";

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
            <CardFooter className="w-full flex items-center justify-center py-3">
                <div className="text-default-600 flex flex-col justify-center text-center">
                    <p>第76回北稜祭実行委員会</p>
                    <p>映像記録部 WEB班</p>
                </div>
            </CardFooter>
        </Card>
    );
}
