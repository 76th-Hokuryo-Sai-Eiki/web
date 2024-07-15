import { readFile } from "fs/promises";
import { argv } from "process";

import { getPixels } from "@unpic/pixels";
import { blurhashToDataUri } from "@unpic/placeholder";
import { encode } from "blurhash";

print(argv[2]);

const imageData = await getPixels(await readFile(argv[2]));

print(imageData);
const data = Uint8ClampedArray.from(imageData.data);
const blurhash = encode(data, imageData.width, imageData.height, 4, 4);

print(blurhash);
print(blurhashToDataUri(blurhash));
