export type POA = "labial" | "alveolar" | "palatal" | "velar";
export type MOA = "nasal" | "unvoiced stop" | "voiced stop" | "fricative" | "approximant";

export type Onset = {
    poa: POA,
    moa: MOA,
}

const ONSETS = new Map<string, Onset | undefined>([
    ["", undefined],
    ["m", {
        poa: "labial",
        moa: "nasal",
    }],
    ["p", {
        poa: "labial",
        moa: "unvoiced stop",
    }],
    ["b", {
        poa: "labial",
        moa: "voiced stop",
    }],
    ["w", {
        poa: "labial",
        moa: "approximant",
    }],
    ["n", {
        poa: "alveolar",
        moa: "nasal",
    }],
    ["t", {
        poa: "alveolar",
        moa: "unvoiced stop",
    }],
    ["d", {
        poa: "alveolar",
        moa: "voiced stop",
    }],
    ["s", {
        poa: "alveolar",
        moa: "fricative",
    }],
    ["l", {
        poa: "alveolar",
        moa: "approximant",
    }],
    ["c", {
        poa: "palatal",
        moa: "unvoiced stop",
    }],
    ["j", {
        poa: "palatal",
        moa: "voiced stop",
    }],
    ["x", {
        poa: "palatal",
        moa: "fricative",
    }],
    ["y", {
        poa: "palatal",
        moa: "approximant",
    }],
    ["k", {
        poa: "velar",
        moa: "unvoiced stop",
    }],
    ["g", {
        poa: "velar",
        moa: "voiced stop",
    }],
    ["h", {
        poa: "velar",
        moa: "fricative",
    }],
])

export type Vowel = {
    high: boolean,
    frontness: "front" | "center" | "back",
}

export const VOWELS = new Map<string, Vowel>([
    ["a", {
        high: false,
        frontness: "center",
    }],
    ["e", {
        high: false,
        frontness: "front",
    }],
    ["i", {
        high: true,
        frontness: "front",
    }],
    ["o", {
        high: false,
        frontness: "back",
    }],
    ["u", {
        high: true,
        frontness: "back",
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


