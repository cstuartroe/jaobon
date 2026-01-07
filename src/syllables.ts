export type POA = "labial" | "alveolar" | "palatal" | "velar";
export type MOA = "nasal" | "unvoiced stop" | "voiced stop" | "fricative" | "approximant";

export type Onset = {
    poa: POA,
    moa: MOA,
    transcriptionLetter: string,
}

function onsetKV(letter: string, poa: POA, moa: MOA): [string, Onset] {
    return [
        letter,
        {poa, moa, transcriptionLetter: letter},
    ];
}

const ONSETS = new Map<string, Onset | undefined>([
    ["", undefined],
    onsetKV("m", "labial", "nasal"),
    onsetKV("p", "labial", "unvoiced stop"),
    onsetKV("b", "labial", "voiced stop"),
    onsetKV("w", "labial", "approximant"),
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
    onsetKV("g","velar", "voiced stop"),
    onsetKV("h", "velar", "fricative"),
]);

type Frontness = "front" | "center" | "back";

export type Vowel = {
    high: boolean,
    frontness: Frontness,
    transcriptionLetter: string,
    standaloneLetter: string,
    beforeLetter?: string,
    afterLetter?: string,
    wideAfterLetter?: string,
}

export const VOWELS = new Map<string, Vowel>([
    ["a", {
        high: false,
        frontness: "center",
        transcriptionLetter: "a",
        standaloneLetter: "A",
        afterLetter: "a",
    }],
    ["e", {
        high: false,
        frontness: "front",
        transcriptionLetter: "e",
        standaloneLetter: "E",
        beforeLetter: "e",
    }],
    ["i", {
        high: true,
        frontness: "front",
        transcriptionLetter: "i",
        standaloneLetter: "I",
        afterLetter: "i",
        wideAfterLetter: "X",
    }],
    ["o", {
        high: false,
        frontness: "back",
        transcriptionLetter: "o",
        standaloneLetter: "O",
        beforeLetter: "e",
        afterLetter: "o",
    }],
    ["u", {
        high: true,
        frontness: "back",
        transcriptionLetter: "u",
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


const NO_OI = [
    ONSETS.get("w"),
    // ONSETS.get("y"),
];

export function validSyllable(syll: Syllable): boolean {
    if (syll.vowel == VOWELS.get("o") && syll.coda == "i") {
        return !NO_OI.includes(syll.onset);
    }

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

export function syllableToDots(syllable: Syllable): string {
    let out = "";

    out += syllable.onset?.transcriptionLetter || "";
    out += syllable.vowel.transcriptionLetter;
    if (syllable.coda == "o") {
        out += "U";
    } else {
        out += syllable.coda?.toLocaleUpperCase() || "";
    }

    return out;
}
