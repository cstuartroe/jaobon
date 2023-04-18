import { validSyllableString } from "./syllables";

type SourceLanguage = "Mandarin" | "Spanish" | "English" | "Arabic" | "Polish" | "Latin" | "French" | "Turkish" | "Dutch" | "Japanese" | "Hindi" | "Malay" | "Russian";

type Etymology = {
    language: SourceLanguage,
    word: string,
}

type Root = {
    definition: string,
    etymologies: Etymology[],
}

function root(syll: string, definition: string, etymologies: [SourceLanguage, string][]): [string, Root] {
    if (!validSyllableString(syll)) {
        throw `Invalid syllable: ${syll}`
    }
    return [
        syll,
        {
            definition,
            etymologies: etymologies.map(([language, word], _) => ({language, word})),
        },
    ];
}

export const ROOTS = new Map<string, Root>([
    root(
        "a",
        "to, toward, at, for",
        [["Spanish", "a"]],
    ),
    root(
        "ai",
        "love",
        [["Mandarin", "愛"]],
    ),
    root(
        "ak",
        "act, behave, appear, seem, express",
        [["English", "act"]],
    ),
    root(
        "an",
        "animal, beast",
        [["English", "animal"], ["Spanish", "animal"]],
    ),
    root(
        "ao",
        "strange, unknown, mysterious",
        [["Mandarin", "奥"]],
    ),
    root(
        "as",
        "make, cause, volitive",
        [["Spanish", "hacer"]],
    ),
    root(
        "ba",
        "hold, wield, handle",
        [["Mandarin", "把"]],
    ),
    root(
        "bai",
        "hundred",
        [["Mandarin", "百"]],
    ),
    root(
        "bak",
        "cow, bovine",
        [["Spanish", "vaca"]],
    ),
    root(
        "ban",
        "half",
        [["Mandarin", "半"]],
    ),
    root(
        "bao",
        "bag, package, bundle; to cover, to wrap",
        [["Mandarin", "包"]],
    ),
    root(
        "bas",
        "empty, blank, vacant, hollow",
        [["Spanish", "vacío"]],
    ),
    root(
        "be",
        "beautiful, nice",
        [["Spanish", "bello"]],
    ),
    root(
        "bek",
        "back, behind, after",
        [["English", "back"]],
    ),
    root(
        "ben",
        "bend, change, become",
        [["Mandarin", "变"]],
    ),
    root(
        "bes",
        "time, instance, action, turn, once",
        [["Spanish", "vez"]],
    ),
    root(
        "bi",
        "live, reside, life",
        [["Spanish", "vivir"]],
    ),
    root(
        "bik",
        "big, large, old",
        [["English", "big"]],
    ),
    root(
        "bin",
        "freeze, cold",
        [["Mandarin", "冰"]],
    ),
    root(
        "bis",
        "visit, travel, tour, guest",
        [["Spanish", "visitar"], ["English", "visit"]],
    ),
    root(
        "bo",
        "fly",
        [["Spanish", "volar"]],
    ),
    root(
        "bok",
        "mouth, hole open at one end",
        [["Spanish", "boca"]],
    ),
    root(
        "bon",
        "under, bottom, bum",
        [["English", "bottom"], ["Mandarin", "本"]],
    ),
    root(
        "bos",
        "voice, sound, noise, make noise",
        [["Spanish", "voz"]],
    ),
    root(
        "bu",
        "section, department",
        [["Mandarin", "部"]],
    ),
    root(
        "buk",
        "book",
        [["English", "book"]],
    ),
    root(
        "bun",
        "boon, prize, accomplishment, asset",
        [["English", "boon"]],
    ),
    root(
        "bus",
        "seek, search, look for, want, aim, goal",
        [["Spanish", "buscar"]],
    ),
    root(
        "ca",
        "fall short, difference, minus, mistake, break, error, bad",
        [["Mandarin", "差"]],
    ),
    root(
        "cai",
        "boil, tea",
        [["Mandarin", "茶"]],
    ),
    root(
        "cak",
        "sing, praise",
        [["Mandarin", "唱歌"]],
    ),
    root(
        "can",
        "wall, barrier, block",
        [["Mandarin", "墙"]],
    ),
    root(
        "cao",
        "long, string, strip, ribbon, extreme",
        [["Mandarin", "条"], ["Mandarin", "超"]],
    ),
    root(
        "cas",
        "click, snap, pop",
        [["Spanish", "chasquear"]],
    ),
    root(
        "ce",
        "car, vehicle",
        [["Mandarin", "車"]],
    ),
    root(
        "cek",
        "(diminutive suffix)",
        [["Polish", "-czek"]],
    ),
    root(
        "cen",
        "front, face, before",
        [["Mandarin", "前"]],
    ),
    root(
        "ces",
        "chase, pursue, follow",
        [["English", "chase"]],
    ),
    root(
        "ci",
        "seven",
        [["Mandarin", "七"]],
    ),
    root(
        "cik",
        "fowl, chicken",
        [["English", "chicken"]],
    ),
    root(
        "cin",
        "polite, please, customary",
        [["Mandarin", "请"]],
    ),
    root(
        "cis",
        "cheese, form, coagulate, curdle",
        [["English", "cheese"]],
    ),
    root(
        "co",
        "eat, drink, consume",
        [["Mandarin", "吃"]],
    ),
    root(
        "cok",
        "ball, sphere",
        [["Mandarin", "球体"]],
    ),
    root(
        "con",
        "insect, worm",
        [["Mandarin", "虫"]],
    ),
    root(
        "cos",
        "trust, believe in, faith, confidence",
        [["English", "trust"]],
    ),
    root(
        "cu",
        "out, send, happen, leave, quit, depart",
        [["Mandarin", "出"]],
    ),
    root(
        "cuk",
        "store, stockpile, preserve, save, keep",
        [["Mandarin", "储备"], ["Mandarin", "储存"]],
    ),
    root(
        "cun",
        "vitality, life, lust, spring, alive",
        [["Mandarin", "春"]],
    ),
    root(
        "cus",
        "choose, select",
        [["English", "choose"]],
    ),
    root(
        "da",
        "hit, strike",
        [["Mandarin", "打"]],
    ),
    root(
        "dai",
        "support, carry, bring",
        [["Mandarin", "带"]],
    ),
    root(
        "dak",
        "dark, black",
        [["English", "dark"]],
    ),
    root(
        "dan",
        "simple, easy",
        [["Mandarin", "单"]],
    ),
    root(
        "dao",
        "road, way, path, direction, go, arrive",
        [["Mandarin", "道"]],
    ),
    root(
        "das",
        "ten",
        [["Hindi", "दस"]],
    ),
    root(
        "de",
        "from, off of, away from",
        [["Spanish", "de"]],
    ),
    root(
        "dek",
        "thin, slender",
        [["Spanish", "delgado"]],
    ),
    root(
        "den",
        "inside",
        [["Spanish", "dentro"]],
    ),
    root(
        "des",
        "speak, say, mean, signify",
        [["Spanish", "decir"]],
    ),
    root(
        "do",
        "sleep",
        [["Spanish", "dormir"]],
    ),
    root(
        "dok",
        "dog",
        [["English", "dog"]],
    ),
    root(
        "don",
        "understand; east",
        [["Mandarin", "東"], ["Mandarin", "懂"]],
    ),
    root(
        "dos",
        "two, pair",
        [["Spanish", "dos"]],
    ),
    root(
        "du",
        "belly, stomach",
        [["Mandarin", "肚"]],
    ),
    root(
        "dus",
        "city",
        [["Mandarin", "都市"]],
    ),
    root(
        "dun",
        "shield, guard, cover",
        [["Mandarin", "盾"]],
    ),
    root(
        "duk",
        "hard, strong, tough, stiff",
        [["Spanish", "duro"]],
    ),
    root(
        "e",
        "hungry, greedy, starve",
        [["Mandarin", "饿"]],
    ),
    root(
        "ek",
        "far, distant, foreign, outside, apart",
        [["English", "ex-"], ["Spanish", "ex-"]],
    ),
    root(
        "en",
        "in, on, continuous",
        [["Spanish", "en"]],
    ),
    root(
        "es",
        "be, absolutive",
        [["Spanish", "es"], ["Spanish", "estar"]],
    ),
    root(
        "ga",
        "gather, assemble, condense, aggregate",
        [["English", "gather"]],
    ),
    root(
        "gai",
        "should, ought",
        [["Mandarin", "该"]],
    ),
    root(
        "gak",
        "cat",
        [["Spanish", "gato"]],
    ),
    root(
        "gan",
        "win, gain",
        [["Spanish", "ganar"]],
    ),
    root(
        "gao",
        "tall, high, noble",
        [["Mandarin", "高"]],
    ),
    root(
        "gas",
        "gas, air",
        [["English", "gas"], ["Spanish", "gas"]],
    ),
    root(
        "ge",
        "give, offer",
        [["Mandarin", "给"]],
    ),
    root(
        "gek",
        "get, receive",
        [["English", "get"]],
    ),
    root(
        "gen",
        "root, source, origin",
        [["Mandarin", "根"]],
    ),
    root(
        "ges",
        "rule, law",
        [["Mandarin", "规则"]],
    ),
    root(
        "gi",
        "guide, steer, direct, lead, govern",
        [["Spanish", "guiar"]],
    ),
    root(
        "gik",
        "geek, enthusiast",
        [["English", "geek"]],
    ),
    root(
        "gis",
        "hide, conceal, obscure, secret",
        [["Turkish", "giz"], ["Turkish", "gizlemek"]],
    ),
    root(
        "gin",
        "green",
        [["English", "green"]],
    ),
    root(
        "go",
        "enough, adequate, suffice",
        [["Mandarin", "够"]],
    ),
    root(
        "gok",
        "drop, bead, spot, point, grain",
        [["Spanish", "gota"]],
    ),
    root(
        "gon",
        "public, shared, government",
        [["Mandarin", "公"], ["Mandarin", "共"]],
    ),
    root(
        "gos",
        "fruit, egg, produce, results",
        [["Mandarin", "果实"]],
    ),
    root(
        "gu",
        "old, tradition, ancient, story",
        [["Mandarin", "故"]],
    ),
    root(
        "guk",
        "group",
        [["English", "group"], ["Spanish", "grupo"]],
    ),
    root(
        "gun",
        "stick, tube, pipe",
        [["Mandarin", "管"]],
    ),
    root(
        "gus",
        "be enjoyed/enjoyable",
        [["Spanish", "gustar"]],
    ),
    root(
        "ha",
        "laugh",
        [["Mandarin", "哈哈"], ["English", "haha"], ["Spanish", "jaja"]],
    ),
    root(
        "hai",
        "still, yet, additional, surplus, also",
        [["Mandarin", "还"]],
    ),
    root(
        "hak",
        "heart, emotion, feel, center",
        [["English", "heart"]],
    ),
    root(
        "han",
        "reverse, opposite, against, return, respond, react",
        [["Mandarin", "返"], ["Mandarin", "反"]],
    ),
    root(
        "hao",
        "good, beneficial, pleasant, beautiful, just",
        [["Mandarin", "好"]],
    ),
    root(
        "has",
        "up to, until",
        [["Spanish", "hasta"]],
    ),
    root(
        "he",
        "heal, health, healthy",
        [["English", "health"]],
    ),
    root(
        "hek",
        "hate, be disgusted by",
        [["English", "hate"]],
    ),
    root(
        "hen",
        "very",
        [["Mandarin", "很"]],
    ),
    root(
        "hes",
        "breathe, smell",
        [["Spanish", "respirar"], ["Mandarin", "呼吸"]],
    ),
    root(
        "ho",
        "thick, ample, deep, wide, dense, fat",
        [["Mandarin", "厚"]],
    ),
    root(
        "hok",
        "hot, heat",
        [["English", "hot"]],
    ),
    root(
        "hon",
        "red, anger, passion",
        [["Mandarin", "红"]],
    ),
    root(
        "hos",
        "horse, equine",
        [["English", "horse"]],
    ),
    root(
        "hu",
        "game, play, have fun",
        [["Spanish", "jugar"]],
    ),
    root(
        "huk",
        "hook, bend, curve, corner",
        [["English", "hook"]],
    ),
    root(
        "hun",
        "mix, mingle, together, marriage",
        [["Mandarin", "混"], ["Spanish", "junto"], ["Mandarin",  "婚"]],
    ),
    root(
        "hus",
        "monkey, ape",
        [["Mandarin", "猴子"]],
    ),
    root(
        "i",
        "and, also, add, again",
        [["Spanish", "y"]],
    ),
    root(
        "ik",
        "child, offshoot",
        [["Spanish", "hijo"]],
    ),
    root(
        "in",
        "pull, stretch, extend",
        [["Mandarin", "引"]],
    ),
    root(
        "is",
        "left",
        [["Spanish", "izquierdo"]],
    ),
    root(
        "ja",
        "family, household",
        [["Mandarin", "家"]],
    ),
    root(
        "jai",
        "victory, glory, long live",
        [["Hindi", "जय"]],
    ),
    root(
        "jak",
        "coat, jacket",
        [["English", "jacket"]],
    ),
    root(
        "jan",
        "flat, straight, correct, right, proper, stand",
        [["Mandarin", "張"], ["Mandarin", "長"], ["Mandarin", "站"]],
    ),
    root(
        "jao",
        "foot, leg",
        [["Mandarin", "脚"]],
    ),
    root(
        "jas",
        "true, real, genuine, serious",
        [["Mandarin", "真实"]],
    ),
    root(
        "je",
        "this, that",
        [["Mandarin", "这"]],
    ),
    root(
        "jek",
        "think, believe, feel",
        [["Mandarin", "觉得"]],
    ),
    root(
        "jen",
        "person, human",
        [["Mandarin", "人"]],
    ),
    root(
        "jes",
        "advise, comment, suggest",
        [["Mandarin", "介紹"], ["English", "suggest"]],
    ),
    root(
        "ji",
        "number, amount, how many, some, ordinal, unit, count",
        [["Mandarin", "几"], ["Mandarin", "计"], ["Mandarin", "第"]],
    ),
    root(
        "jik",
        "structure, organization, institution",
        [["Mandarin", "机构"]],
    ),
    root(
        "jin",
        "yellow, brown, gold, metal, money",
        [["Mandarin", "金"]],
    ),
    root(
        "jis",
        "skill, craft, technology, technique, art",
        [["Mandarin", "技术"]],
    ),
    root(
        "jo",
        "just, only, already, as soon as",
        [["Mandarin", "就"]],
    ),
    root(
        "jok",
        "humor, joke",
        [["English", "joke"]],
    ),
    root(
        "jon",
        "seed, bean, gamete, gene, sexual, species",
        [["Mandarin", "种"]],
    ),
    root(
        "jos",
        "table, desk",
        [["Mandarin", "桌子"]],
    ),
    root(
        "ju",
        "tree, plant",
        [["Mandarin", "株"], ["Mandarin", "植物"]],
    ),
    root(
        "juk",
        "if",
        [["Mandarin", "如果"]],
    ),
    root(
        "jun",
        "bacteria, mold",
        [["Mandarin", "菌"]],
    ),
    root(
        "jus",
        "juice, liquid, blood",
        [["English", "juice"]],
    ),
    root(
        "ka",
        "fall, drop, down",
        [["Spanish", "caer"]],
    ),
    root(
        "kai",
        "start, open, begin, operate",
        [["Mandarin", "开"]],
    ),
    root(
        "kak",
        "feces",
        [["Spanish", "caca"]],
    ),
    root(
        "kan",
        "see, read",
        [["Mandarin", "看"]],
    ),
    root(
        "kao",
        "test, inspect, consider, try",
        [["Mandarin", "考"]],
    ),
    root(
        "kas",
        "house, home, building",
        [["Spanish", "casa"]],
    ),
    root(
        "ke",
        "what, which",
        [["Spanish", "qué"]],
    ),
    root(
        "kek",
        "sibling",
        [["Malay", "kakak"], ["Arabic", "شقيق"]],
    ),
    root(
        "ken",
        "can, may, possible, able",
        [["English", "can"], ["Mandarin", "可能"]],
    ),
    root(
        "kes",
        "grow, increase",
        [["Spanish", "crecer"]],
    ),
    root(
        "ki",
        "(relativizer, complementizer)",
        [["French", "qui"]],
    ),
    root(
        "kik",
        "remove, take away, clean off",
        [["Spanish", "quitar"]],
    ),
    root(
        "kin",
        "keen, sharp, witty, clever, blade",
        [["English", "keen"]],
    ),
    root(
        "kis",
        "kiss",
        [["English", "kiss"]],
    ),
    root(
        "ko",
        "door, opening, hole open at both ends",
        [["Mandarin", "口"]],
    ),
    root(
        "kok",
        "cut, separate, short",
        [["English", "cut"], ["Spanish", "cortar"], ["Spanish", "corto"]],
    ),
    root(
        "kon",
        "recognize, be familiar with",
        [["Spanish", "conocer"]],
    ),
    root(
        "kos",
        "thing, object, tool",
        [["Spanish", "cosa"]],
    ),
    root(
        "ku",
        "bitterness, suffering, unpleasantness, alkali",
        [["Mandarin", "苦"]],
    ),
    root(
        "kuk",
        "cook, prepare",
        [["English", "cook"]],
    ),
    root(
        "kun",
        "fear, afraid",
        [["Mandarin", "恐"]],
    ),
    root(
        "kus",
        "hear",
        [["Spanish", "escuchar"]],
    ),
    root(
        "la",
        "side, edge, direction",
        [["Spanish", "lado"]],
    ),
    root(
        "lai",
        "come, become, exhortative",
        [["Mandarin", "来"]],
    ),
    root(
        "lak",
        "milk",
        [["Latin", "lac"]],
    ),
    root(
        "lan",
        "blue, body of water, sad",
        [["Mandarin", "蓝"]],
    ),
    root(
        "lao",
        "allow, let",
        [["English", "allow"]],
    ),
    root(
        "las",
        "glass, transparent",
        [["English", "glass"]],
    ),
    root(
        "le",
        "type, kind, class",
        [["Mandarin", "类"]],
    ),
    root(
        "lek",
        "electric, electricity",
        [["English", "electric"], ["Spanish", "eléctrico"]],
    ),
    root(
        "len",
        "slow",
        [["Spanish", "lento"]],
    ),
    root(
        "les",
        "less",
        [["English", "less"]],
    ),
    root(
        "li",
        "ritual, ceremony, etiquette, custom, gift",
        [["Mandarin", "礼"]],
    ),
    root(
        "lik",
        "lightweight, fragile",
        [["Spanish", "ligero"]],
    ),
    root(
        "lin",
        "clean, clear",
        [["Spanish", "limpio"]],
    ),
    root(
        "lis",
        "ready, clever, ripe",
        [["Spanish", "listo"]],
    ),
    root(
        "lo",
        "low, short",
        [["English", "low"]],
    ),
    root(
        "lok",
        "crazy",
        [["Spanish", "loco"]],
    ),
    root(
        "lon",
        "unique, alone, solitary",
        [["English", "lone"]],
    ),
    root(
        "los",
        "level, floor, layer, stratum",
        [["Mandarin", "楼层"]],
    ),
    root(
        "lu",
        "flow, pour, spill, move, circulate",
        [["Mandarin", "流"], ["Spanish", "fluir"]],
    ),
    root(
        "luk",
        "place, location",
        [["Spanish", "lugar"]],
    ),
    root(
        "lun",
        "round, circle, wheel, cycle",
        [["Mandarin", "轮"]],
    ),
    root(
        "lus",
        "light, intelligence, clarity",
        [["Spanish", "luz"]],
    ),
    root(
        "ma",
        "mother",
        [["English", "ma"], ["Spanish", "mamá"], ["Mandarin", "妈妈"]],
    ),
    root(
        "mai",
        "sell, convince",
        [["Mandarin", "卖"]],
    ),
    root(
        "mak",
        "machine, contraption",
        [["Spanish", "máquina"]],
    ),
    root(
        "man",
        "full, satisfied, complete, whole, entire",
        [["Mandarin", "满"]],
    ),
    root(
        "mao",
        "hair, fur, feather, wool, bristle",
        [["Mandarin", "毛"]],
    ),
    root(
        "mas",
        "more, compare, most",
        [["Spanish", "más"]],
    ),
    root(
        "me",
        "all, each, every",
        [["Mandarin", "每"]],
    ),
    root(
        "mek",
        "make, construct, create",
        [["English", "make"]],
    ),
    root(
        "men",
        "plural, many, much, a lot",
        [["English", "many"], ["Mandarin", "们"]],
    ),
    root(
        "mes",
        "middle, center, between, among",
        [["English", "meso-"], ["Spanish", "medio"]],
    ),
    root(
        "mi",
        "1st person",
        [["English", "me"], ["Spanish", "mí"]],
    ),
    root(
        "mik",
        "friend, kind, amicable",
        [["Spanish", "amigo"]],
    ),
    root(
        "min",
        "name, word, call, refer",
        [["Mandarin", "名"]],
    ),
    root(
        "mis",
        "miss, err, mistake",
        [["English", "miss"], ["English", "mistake"]],
    ),
    root(
        "mo",
        "die, stop, halt, pause, end",
        [["Spanish", "morir"], ["Mandarin", "末"]],
    ),
    root(
        "mok",
        "nag, annoy, bother, harass, disturb",
        [["Spanish", "molestar"]],
    ),
    root(
        "mon",
        "mountain, hill, mound, pile, heap, mass",
        [["English", "mound"], ["English", "mountain"], ["Spanish", "montón"], ["Spanish", "montaña"]],
    ),
    root(
        "mos",
        "must, have to",
        [["English", "must"]],
    ),
    root(
        "mu",
        "tree, post, column, wood",
        [["Mandarin", "木"]],
    ),
    root(
        "muk",
        "free, open, unencumbered, loose, relaxed",
        [["Hindi", "मुक्त"]],
    ),
    root(
        "mun",
        "moon, month",
        [["English", "moon"]],
    ),
    root(
        "mus",
        "mouse, rodent",
        [["English", "mouse"], ["Latin", "mūs"]],
    ),
    root(
        "na",
        "swim",
        [["Spanish", "nadar"]],
    ),
    root(
        "nai",
        "nine",
        [["English", "nine"]],
    ),
    root(
        "nak",
        "nature, character, base, bare, naked",
        [["Spanish", "natural"], ["English", "natural"], ["English", "naked"]],
    ),
    root(
        "nan",
        "male, masculine; south",
        [["Mandarin", "男"], ["Mandarin", "南"]],
    ),
    root(
        "nao",
        "brain, mind",
        [["Mandarin", "脑"]],
    ),
    root(
        "nas",
        "nation, people, ethnicity",
        [["English", "nation"], ["Spanish", "nación"]],
    ),
    root(
        "ne",
        "system, network, economy, environment, internet",
        [["English", "net"]],
    ),
    root(
        "nek",
        "neck, stem",
        [["English", "neck"]],
    ),
    root(
        "nen",
        "year",
        [["Mandarin", "年"]],
    ),
    root(
        "nes",
        "essence, abstract noun",
        [["English", "-ness"]],
    ),
    root(
        "ni",
        "2nd person",
        [["Mandarin", "你"]],
    ),
    root(
        "nik",
        "meat, flesh, organ",
        [["Japanese", "肉"]],
    ),
    root(
        "nin",
        "none, nothing, zero",
        [["Spanish", "ninguno"]],
    ),
    root(
        "nis",
        "about, concerning, with regard to",
        [["Japanese", "について"]],
    ),
    root(
        "no",
        "no, not",
        [["English", "no"], ["Spanish", "no"]],
    ),
    root(
        "nok",
        "night; north",
        [["Spanish", "noche"], ["Spanish", "norte"], ["English", "north"]],
    ),
    root(
        "non",
        "farm, grow, raise, agriculture",
        [["Mandarin", "农"]],
    ),
    root(
        "nos",
        "nose",
        [["English", "nose"]],
    ),
    root(
        "nu",
        "new, young",
        [["English", "new"]],
    ),
    root(
        "nun",
        "noon, daytime",
        [["English", "noon"]],
    ),
    root(
        "nus",
        "feminine, female",
        [["Mandarin", "女性"]],
    ),
    root(
        "nuk",
        "nut, bead",
        [["Latin", "nux"]],
    ),
    root(
        "o",
        "or, other",
        [["Spanish", "or"], ["Spanish", "otro"]],
    ),
    root(
        "ok",
        "eight",
        [["Spanish", "ocho"]],
    ),
    root(
        "on",
        "fungus, mushroom",
        [["Spanish", "hongo"]],
    ),
    root(
        "os",
        "bear",
        [["Spanish", "oso"]],
    ),
    root(
        "pa",
        "father",
        [["English", "pa"], ["Spanish", "papá"]],
    ),
    root(
        "pai",
        "arrange, put in order, oversee, row",
        [["Mandarin", "排"]],
    ),
    root(
        "pak",
        "bird",
        [["Spanish", "pájaro"]],
    ),
    root(
        "pan",
        "bread, rice, starch, grain",
        [["Spanish", "pan"], ["Mandarin", "饭"]],
    ),
    root(
        "pao",
        "power, energy, strength",
        [["English", "power"]],
    ),
    root(
        "pas",
        "pass, cross, across, on the other side of, experiential",
        [["English", "pass"], ["Spanish", "pasar"]],
    ),
    root(
        "pe",
        "lose, pay, pain, suffer",
        [["English", "pay"], ["Spanish", "perder"], ["Spanish", "pena"]],
    ),
    root(
        "pek",
        "sticky, adhere, glue, attach",
        [["Spanish", "pegar"]],
    ),
    root(
        "pen",
        "slice, sheet, paper, card, leaf",
        [["Mandarin", "片"]],
    ),
    root(
        "pes",
        "weight, mass, importance, heavy",
        [["Spanish", "peso"]],
    ),
    root(
        "pi",
        "skin, outside, edge, peel, surface",
        [["English", "peel"], ["Spanish", "piel"], ["Mandarin", "皮"]],
    ),
    root(
        "pik",
        "picture, image, depiction, explanation",
        [["English", "picture"]],
    ),
    root(
        "pin",
        "pin, needle, point, prick, pen",
        [["English", "pin"], ["Spanish", "pinchar"]],
    ),
    root(
        "pis",
        "piece, part, drop, singulative",
        [["English", "piece"], ["Spanish", "pieza"]],
    ),
    root(
        "po",
        "poor, helpless, forlorn, meager, sparse, few, scarce",
        [["English", "poor"], ["Spanish", "pobre"], ["Spanish", "poco"]],
    ),
    root(
        "pok",
        "pig",
        [["Spanish", "puerco"]],
    ),
    root(
        "pon",
        "put, place, add, set",
        [["Spanish", "poner"]],
    ),
    root(
        "pos",
        "position, role, place, status",
        [["English", "position"], ["Spanish", "puesto"], ["Spanish", "posición"]],
    ),
    root(
        "pu",
        "four",
        [["English", "four"]],
    ),
    root(
        "puk",
        "conflict, fight, war",
        [["Spanish", "pugnar"]],
    ),
    root(
        "pun",
        "fundamental, basic, basis",
        [["Spanish", "fundamental"], ["English", "fundamental"]],
    ),
    root(
        "pus",
        "complex, difficult",
        [["Mandarin", "复杂"]],
    ),
    root(
        "sa",
        "know",
        [["Spanish", "saber"]],
    ),
    root(
        "sai",
        "vegetable, plant",
        [["Mandarin", "菜"]],
    ),
    root(
        "sak",
        "alcohol",
        [["Japanese", "酒"]],
    ),
    root(
        "san",
        "three",
        [["Mandarin", "三"]],
    ),
    root(
        "sao",
        "early, morning",
        [["Mandarin", "早"]],
    ),
    root(
        "sas",
        "sauce, dressing",
        [["English", "sauce"], ["Spanish", "salsa"]],
    ),
    root(
        "se",
        "self, reflexive",
        [["Spanish", "se"]],
    ),
    root(
        "sek",
        "dry, thirsty",
        [["Spanish", "seco"]],
    ),
    root(
        "sen",
        "sit, stay, remain, continue",
        [["Spanish", "sentar"]],
    ),
    root(
        "ses",
        "six",
        [["Spanish", "seis"]],
    ),
    root(
        "so",
        "color",
        [["Mandarin", "色"]],
    ),
    root(
        "sok",
        "lock, latch, secure",
        [["Mandarin", "锁定"], ["English", "secure"]],
    ),
    root(
        "son",
        "sun, day",
        [["English", "sun"]],
    ),
    root(
        "sos",
        "social, society",
        [["English", "social"], ["English", "society"], ["Spanish", "social"], ["Spanish", "sociedad"]],
    ),
    root(
        "su",
        "fast, quick",
        [["Mandarin", "速"]],
    ),
    root(
        "suk",
        "sugar",
        [["Spanish", "azúcar"]],
    ),
    root(
        "sun",
        "sour, acid",
        [["Mandarin", "酸"]],
    ),
    root(
        "sus",
        "dirty, gross, grubby, unwashed",
        [["Spanish", "sucio"]],
    ),
    root(
        "ta",
        "3rd person, thing",
        [["Mandarin", "他"], ["Mandarin", "她"], ["Mandarin", "它"]],
    ),
    root(
        "tai",
        "knot, tie, join, connect, relate",
        [["English", "tie"]],
    ),
    root(
        "tak",
        "arm, branch, split, fork",
        [["Dutch", "tak"]],
    ),
    root(
        "tan",
        "lie, recline",
        [["Mandarin", "躺"]],
    ),
    root(
        "tao",
        "thousand",
        [["English", "thousand"]],
    ),
    root(
        "tas",
        "cup, bowl",
        [["Spanish", "taza"]],
    ),
    root(
        "te",
        "fabric, cloth, clothing",
        [["Spanish", "tela"]],
    ),
    root(
        "tek",
        "take, buy",
        [["English", "take"]],
    ),
    root(
        "ten",
        "sky, heaven, god, holy, sacred",
        [["Mandarin", "天"]],
    ),
    root(
        "tes",
        "taste, smell, flavor, preference",
        [["English", "taste"]],
    ),
    root(
        "to",
        "head, individual, chief",
        [["Mandarin", "头"]],
    ),
    root(
        "tok",
        "touch, feel, play (instrument)",
        [["Spanish", "tocar"]],
    ),
    root(
        "ton",
        "same, common, like, as",
        [["Mandarin", "同"]],
    ),
    root(
        "tos",
        "throw, throw out, reject, expel, emit, spew, cough",
        [["English", "toss"], ["Spanish", "tos"]],
    ),
    root(
        "tu",
        "ground, land, dirt, territory, earth",
        [["Mandarin", "土"]],
    ),
    root(
        "tuk",
        "body, corpse, torso, person",
        [["Russian", "труп"], ["Mandarin", "tubuh"]],
    ),
    root(
        "tun",
        "music, harmony",
        [["English", "tune"]],
    ),
    root(
        "tus",
        "paint, smear, wipe, coating, layer",
        [["Mandarin", "涂层"], ["Mandarin", "涂饰"]],
    ),
    root(
        "u",
        "five",
        [["Mandarin", "五"]],
    ),
    root(
        "uk",
        "dance",
        [["Mandarin", "舞蹈"]],
    ),
    root(
        "un",
        "one, a, some, any",
        [["Spanish", "un"], ["Spanish", "uno"]],
    ),
    root(
        "us",
        "substance, material, matter",
        [["Mandarin", "物质"]],
    ),
    root(
        "wa",
        "water, liquid",
        [["English", "water"], ["Spanish", "agua"]],
    ),
    root(
        "wai",
        "white, pale",
        [["English", "white"]],
    ),
    root(
        "wak",
        "walk, move",
        [["English", "walk"]],
    ),
    root(
        "wan",
        "late, night, evening",
        [["Mandarin", "晚"]],
    ),
    root(
        "wao",
        "wow, (exclamation)",
        [["English", "wow"]],
    ),
    root(
        "was",
        "wash",
        [["English", "wash"]],
    ),
    root(
        "we",
        "way, state, manner, reason, in order to",
        [["English", "way"], ["Mandarin", "为"]],
    ),
    root(
        "wek",
        "alert, awake, wait, anticipate",
        [["English", "wake"], ["English", "wait"]],
    ),
    root(
        "wen",
        "soft, tender, mild, smooth, easy, warm",
        [["Mandarin", "温"]],
    ),
    root(
        "wes",
        "bone; west",
        [["English", "west"], ["Spanish", "hueso"]],
    ),
    root(
        "wi",
        "escape, avoid, flee",
        [["Spanish", "huir"]],
    ),
    root(
        "wik",
        "weak, tired",
        [["English", "weak"]],
    ),
    root(
        "win",
        "wind, smell, atmosphere",
        [["English", "wind"]],
    ),
    root(
        "wis",
        "follow, with, in accompaniment",
        [["English", "with"]],
    ),
    root(
        "wo",
        "fire",
        [["Mandarin", "火"]],
    ),
    root(
        "wok",
        "work, labor, position, role",
        [["English", "work"]],
    ),
    root(
        "won",
        "ask, request, problem, issue",
        [["Mandarin", "问"]],
    ),
    root(
        "wos",
        "worsen, decay, decline, rot, deteriorate",
        [["English", "worsen"], ["Malay", "rosot"], ["Malay", "rosak"]],
    ),
    root(
        "xa",
        "sand, powder",
        [["Mandarin", "沙"]],
    ),
    root(
        "xas",
        "time, hour",
        [["Mandarin", "时间"], ["Mandarin", "小时"]],
    ),
    root(
        "xai",
        "shy, timid, meek",
        [["English", "shy"]],
    ),
    root(
        "xak",
        "shut, closed",
        [["English", "shut"]],
    ),
    root(
        "xan",
        "top, over, above, up",
        [["Mandarin", "上"]],
    ),
    root(
        "xao",
        "small, young",
        [["Mandarin", "小"]],
    ),
    root(
        "xe",
        "write",
        [["Mandarin", "写"]],
    ),
    root(
        "xek",
        "shake, vibrate, sway, move (back and forth)",
        [["English", "shake"]],
    ),
    root(
        "xen",
        "deep, rich, saturated",
        [["Mandarin", "深"]],
    ),
    root(
        "xes",
        "learn, study",
        [["Mandarin", "学习"]],
    ),
    root(
        "xi",
        "happy, pleased, enjoy, interest",
        [["Mandarin", "喜"]],
    ),
    root(
        "xik",
        "chic, hip, cool",
        [["French", "chic"]],
    ),
    root(
        "xin",
        "star, week",
        [["Mandarin", "星"]],
    ),
    root(
        "xis",
        "lizard, snake, reptile",
        [["Mandarin", "蜥形纲"]],
    ),
    root(
        "xo",
        "hand, arm",
        [["Mandarin", "手"]],
    ),
    root(
        "xok",
        "stone, rock",
        [["Mandarin", "石头"], ["English", "rock"]],
    ),
    root(
        "xon",
        "chest, breast",
        [["Mandarin", "胸"]],
    ),
    root(
        "xos",
        "rest, pause",
        [["Mandarin", "休息"]],
    ),
    root(
        "xu",
        "shoe",
        [["English", "shoe"]],
    ),
    root(
        "xuk",
        "thank",
        [["Arabic", "شكرا"]],
    ),
    root(
        "xun",
        "obey",
        [["Mandarin", "顺"]],
    ),
    root(
        "xus",
        "comfortable, cozy, snug",
        [["Mandarin", "舒适"]],
    ),
    root(
        "ya",
        "press, push, control, print",
        [["Mandarin", "压"]],
    ),
    root(
        "yai",
        "surprised, amazed",
        [["Mandarin", "讶异"]],
    ),
    root(
        "yak",
        "around, near, about, approximately",
        [["Turkish", "yakın"], ["Japanese", "約"]],
    ),
    root(
        "yan",
        "sheep, goat",
        [["Mandarin", "羊"]],
    ),
    root(
        "yao",
        "want, need",
        [["Mandarin", "要"]],
    ),
    root(
        "yas",
        "tooth",
        [["Mandarin", "牙齿"]],
    ),
    root(
        "ye",
        "also, too",
        [["Mandarin", "也"]],
    ),
    root(
        "yek",
        "eye, personality, character, soul",
        [["Mandarin", "眼睛"]],
    ),
    root(
        "yen",
        "salt",
        [["Mandarin", "盐"]],
    ),
    root(
        "yes",
        "yes, indeed",
        [["English", "yes"]],
    ),
    root(
        "yo",
        "have, own, there is",
        [["Mandarin", "有"]],
    ),
    root(
        "yok",
        "right (side)",
        [["Mandarin", "右边"]],
    ),
    root(
        "yon",
        "leap, jump, bounce",
        [["Mandarin", "踊"]],
    ),
    root(
        "yos",
        "oil, fat, grease",
        [["Mandarin", "油脂"]],
    ),
    root(
        "yu",
        "fish",
        [["Mandarin", "鱼"]],
    ),
    root(
        "yuk",
        "help, assist",
        [["Spanish", "ayudar"]],
    ),
    root(
        "yun",
        "cloud, fog, mist, steam, vapor",
        [["Mandarin", "云"]],
    ),
    root(
        "yus",
        "use",
        [["English", "use"]],
    ),
]);

export function sourceCounts(): Map<SourceLanguage, number> {
    const out = new Map<SourceLanguage, number>([]);

    ROOTS.forEach((root, _) => {
        const sources = new Set<SourceLanguage>([]);
        root.etymologies.forEach(e => {
            sources.add(e.language);
        });
        sources.forEach(s => {
            out.set(s, (out.get(s) || 0) + 1)
        })
    })

    return out
}
