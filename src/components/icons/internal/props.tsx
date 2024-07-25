import { SVGProps } from "react";

export type IconSvgProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
    size?: number;
};
