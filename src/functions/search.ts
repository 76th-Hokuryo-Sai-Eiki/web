import moji from "moji";
import { trigram } from "n-gram";
import TinySegmenter from "tiny-segmenter";

const segmenter = new TinySegmenter();

function _tokenize(text: string, tokenizer?: string) {
    if (tokenizer === "trigram") {
        return trigram(text);
    } else {
        return segmenter.segment(text);
    }
}

export function tokenize(text: string, tokenizer?: string) {
    const query = encode(text);

    return _tokenize(query, tokenizer)
        .map((word) => {
            if (word !== " ") {
                return moji(word).convert("HG", "KK").toString().toLowerCase();
            }
        })
        .filter((v) => v);
}

export function encode(text: string) {
    return moji(text)
        .convert("HK", "ZK")
        .convert("ZS", "HS")
        .convert("ZE", "HE")
        .convert("HG", "KK")
        .toString()
        .trim()
        .toLowerCase();
}
