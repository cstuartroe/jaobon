import fs from "fs";

import {translations, splashes} from "../src/minecraft";
import {multiscriptText, isError, MultiscriptText} from "../src/AnnotatedText";

const packDir = "./dist/Jaobon Language Pack";
const langDir = packDir + "/assets/minecraft/lang";
const textsDir = packDir + "/assets/minecraft/texts";

function pairsJson(pairs: [string, string][]): string {
    let out = "{\n"
    pairs.forEach(([k, v]) => {
        out += `  "${k}": "${v}",\n`
    });
    out = out.slice(0, out.length-2) + "\n}\n";
    return out;
}

function multiscriptTextRaiseError(outline: string): MultiscriptText {
    const mt = multiscriptText(outline);
    if (isError(mt)) {
        throw new Error(`Error parsing "${outline}": ${mt.message}`);
    } else {
        return mt
    }
}

const mcmetaContent = {
    "pack": {
        "pack_format": 55,
        "description": "Add Jaobon as a translation option"
    },
    "language": {
        "jb_la": {
            "name": "jao bon",
            "region": "bos pis xe",
            "bidirectional": false
        },
        "jb_zh": {
            "name": "脚下",
            "region": "言块写",
            "bidirectional": false
        },
    }
};

fs.mkdirSync(packDir, { recursive: true });
fs.writeFileSync(packDir + "/pack.mcmeta", JSON.stringify(mcmetaContent, null, 2));
fs.copyFileSync("./static/img/pack.png", packDir + "/pack.png")

fs.mkdirSync(langDir, { recursive: true });
fs.writeFileSync(langDir + "/jb_la.json", pairsJson(translations.map(t => [t.key, multiscriptTextRaiseError(t.Jaobon).roman.replace("…", "...")])));
fs.writeFileSync(langDir + "/jb_zh.json", pairsJson(translations.map(t => [t.key, multiscriptTextRaiseError(t.Jaobon).CJK])));

fs.mkdirSync(textsDir, { recursive: true });
fs.writeFileSync(textsDir + "/splashes.txt", splashes.map(splash => {
    const mt = multiscriptTextRaiseError(splash);
    return `${mt.roman}\n${mt.CJK}\n`
}).join(''))
