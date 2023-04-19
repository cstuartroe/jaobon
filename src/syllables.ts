export type POA = "labial" | "alveolar" | "palatal" | "velar";
export type MOA = "nasal" | "unvoiced stop" | "voiced stop" | "fricative" | "approximant";

export type Onset = {
    poa: POA,
    moa: MOA,
    letter: string,
}

function onsetKV(letter: string, poa: POA, moa: MOA): [string, Onset] {
    return [
        letter,
        {poa, moa, letter},
    ];
}

const ONSETS = new Map<string, Onset | undefined>([
    ["", undefined],
    onsetKV("m", "labial", "nasal"),
    onsetKV("p", "labial", "unvoiced stop"),
    onsetKV("b", "labial", "voiced stop"),
    ["w", {poa: "labial", moa: "approximant", letter: "v"}],
    onsetKV("n", "alveolar", "nasal"),
    onsetKV("t", "alveolar", "unvoiced stop"),
    onsetKV("d", "alveolar", "voiced stop"),
    onsetKV("s", "alveolar", "fricative"),
    onsetKV("l", "alveolar", "approximant"),
    onsetKV("c", "palatal", "unvoiced stop"),
    onsetKV("j", "palatal", "voiced stop"),
    onsetKV("x", "palatal", "fricative"),
    onsetKV("y", "palatal", "approximant"),
    onsetKV("k", "velar", "unvoiced stop"),
    ["g", {poa: "velar", moa: "voiced stop", letter: "G"}],
    onsetKV("h", "velar", "fricative"),
]);

type Frontness = "front" | "center" | "back";

export type Vowel = {
    high: boolean,
    frontness: Frontness,
    standaloneLetter: string,
    beforeLetter?: string,
    afterLetter?: string,
    wideAfterLetter?: string,
}

export const VOWELS = new Map<string, Vowel>([
    ["a", {
        high: false,
        frontness: "center",
        standaloneLetter: "A",
        afterLetter: "a",
    }],
    ["e", {
        high: false,
        frontness: "front",
        standaloneLetter: "E",
        beforeLetter: "e",
    }],
    ["i", {
        high: true,
        frontness: "front",
        standaloneLetter: "I",
        afterLetter: "i",
        wideAfterLetter: "X",
    }],
    ["o", {
        high: false,
        frontness: "back",
        standaloneLetter: "O",
        beforeLetter: "e",
        afterLetter: "o",
    }],
    ["u", {
        high: true,
        frontness: "back",
        standaloneLetter: "U",
        afterLetter: "u",
        wideAfterLetter: "Z",
    }],
]);

export const CODAS = ["n", "k", "s", "i", "o"] as const;

export type Coda = (typeof CODAS)[number];

export type Syllable = {
    onset?: Onset,
    vowel: Vowel,
    coda?: Coda,
}

const ONLY_A: Coda[] = ["i", "o"];

const NO_I = [
    ONSETS.get("t"),
    ONSETS.get("d"),
    ONSETS.get("s"),
    ONSETS.get("h"),
    ONSETS.get("y"),
];

export function validSyllable(syll: Syllable): boolean {
    if (syll.coda && ONLY_A.includes(syll.coda) && syll.vowel != VOWELS.get("a")) {
        return false;
    }

    if (syll.onset && NO_I.includes(syll.onset) && syll.vowel == VOWELS.get("i")) {
        return false;
    }

    if (syll.onset == ONSETS.get("w") && syll.vowel == VOWELS.get("u")) {
        return false;
    }

    return true;
}

export function stringToSyllable(s: string): (Syllable | null) {
    let i = 0;
    let onset: Onset | undefined = undefined;
    let vowel: Vowel | undefined = undefined;
    let coda: Coda | undefined = undefined;

    if (s.length > i) {
        onset = ONSETS.get(s[i]);
        if (onset) { i++; }
    }

    if (s.length > i) {
        vowel = VOWELS.get(s[i]);
    }

    if (vowel != undefined) {
        i++;
    } else {
        return null;
    }

    const codas: string[] = [...CODAS];
    if (s.length > i && codas.includes(s[i])) {
        coda = s[i] as Coda;
        i++;
    }

    if (s.length > i) {
        return null;
    }

    return {
        onset,
        vowel,
        coda,
    }
}

export function validSyllableString(s: string): boolean {
    const syll = stringToSyllable(s);
    return !!syll && validSyllable(syll);
}

export function allSyllables(): string[] {
    const out: string[] = [];

    ONSETS.forEach((_, onsetLetter) => {
        VOWELS.forEach((_, vowelLetter) => {
            [...CODAS, ""].forEach(coda => {
                const syllString = onsetLetter + vowelLetter + coda;
                if (validSyllableString(syllString)) {
                    out.push(syllString);
                }
            })
        })
    })

    out.sort();

    return out;
}

const serifInitials: (string | undefined)[] = ["b", "G", "h", "k", "t", "x"];
const serifBlockingVowels: string[] = ["a", "o", "u", "Z"];
const wideInitials: (string | undefined)[] = ["h", "k", "l", "m", "t", "x", "y"];

export function syllableToFont(syll: Syllable): string {
    let beforeVowel: string = "";
    let initialLetter: string | undefined = syll.onset?.letter;
    let afterVowel: string = "";
    let finalLetter: string = "";

    if (syll.coda == "o") {
        afterVowel = "W";
    } else if (syll.coda == "i") {
        afterVowel = "Y";
    } else if (initialLetter === undefined) {
        afterVowel = syll.vowel.standaloneLetter;
    } else {
        beforeVowel = syll.vowel.beforeLetter || "";
        afterVowel = syll.vowel.afterLetter || "";

        if (syll.vowel.wideAfterLetter !== undefined && wideInitials.includes(initialLetter)) {
            afterVowel = syll.vowel.wideAfterLetter;
        }
    }

    if (syll.coda == "n") {
        finalLetter = "M";
    } else if (syll.coda == "s") {
        finalLetter = "S";
    } else if (syll.coda == "k") {
        finalLetter = "K";
    }

    const useSerif = serifInitials.includes(initialLetter) && !serifBlockingVowels.includes(afterVowel);

    return beforeVowel + (initialLetter || "") + (useSerif ? "q" : "") + afterVowel + finalLetter;
}
