import { ImageProps, Image as UnpicImage } from "@unpic/react";
import { blurhashToCssGradientString } from "@unpic/placeholder";

type Prop = ImageProps & { blurhash: string };

export function SuspendImage({ blurhash, ...props }: Prop) {
    const placeholder = blurhashToCssGradientString(blurhash);

    return <UnpicImage {...props} background={placeholder} />;
}
