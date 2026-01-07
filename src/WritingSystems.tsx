import NoteManager from "./notes";
import {Document, h1, h2, p, ipa as _ipa, table, th, td, a, i, span, documentToJSX, TextualChunk} from "./formatting";

const noBreakSpace = '\xa0';

function ipa(...chunks: TextualChunk[]) {
  return _ipa("/", ...chunks, "/");
}

function dots(s: string) {
  return span("dots", s.replace(' ', noBreakSpace));
}

function inlineDots(s: string) {
  return span("inline", dots(s));
}

const latinNotes = {
  glottal_stop: ["The glottal stop is not written in romanization."],
};

const fdNotes = {
  h: [ipa("h"), " is written as though it were velar (which is a valid alternative pronunciation of the phoneme)."],
  glottal_stop: [
    'The glottal stop is written as though it were a velar approximant, with the idea that both behave something like ',
    'a zero onset. Non-coincidentally, the velar place of articulation and approximant manner of articulation are ',
    'both denoted by the absence of marks, so that this zero onset is written with essentially no grapheme. ',
  ],
  extra_symbols: [
    ipa("ɲ ŋ f"), " ",
    "are not phonemic in Jaobon, and though the corresponding Featural Dots graphemes are not used ",
    "for native Jaobon vocabulary, they are implied by the featural nature of the script and may be used in ",
    "transcribing proper nouns. ",
  ],
}

const latinNm = NoteManager(latinNotes);
const fdNm = NoteManager(fdNotes);

const Title = h1("Writing Systems");

const LatinAndCJKSections: Document = [
  h2("Latin alphabet"),
  p(
    "Jaobon uses a purely phonemic romanization scheme, that hopefully largely satisfies the principle of ",
    "least surprise, although in an effort to keep every consonant spelling to one letter, I made the perhaps ",
    "mildly spicy choices ",
    ipa("t͡ʃ"), " ⟨c⟩ and ", ipa("ʃ"), " ⟨x⟩ (take up any complaints with Indonesian and Portuguese, respectively). ",
    "Its romanization for syllable-initial consonants is as follows: ",
  ),
  table(
    [
      th(),
      th("Labial"),
      th("Alveolar"),
      th("Palatal"),
      th("Velar"),
      th("Glottal"),
    ],
    [
      th("Nasal"),
      td(ipa("m"), " ⟨m⟩"),
      td(ipa("n"), " ⟨n⟩"),
      td(),
      td(),
      td(),
    ],
    [
      th("Fortis stop/affricate"),
      td(ipa("p"), " ⟨p⟩"),
      td(ipa("t"), " ⟨t⟩"),
      td(ipa("t͡ʃ"), " ⟨c⟩"),
      td(ipa("k"), " ⟨k⟩"),
      td(ipa("ʔ"), " ⟨⟩", latinNm.noteRef('glottal_stop')),
    ],
    [
      th("Lenis stop/affricate"),
      td(ipa("b"), " ⟨b⟩"),
      td(ipa("d"), " ⟨d⟩"),
      td(ipa("d͡ʒ"), " ⟨j⟩"),
      td(ipa("g"), " ⟨g⟩"),
      td(),
    ],
    [
      th("Fricative"),
      td(),
      td(ipa("s"), " ⟨s⟩"),
      td(ipa("ʃ"), " ⟨x⟩"),
      {th: false, colspan: 2, children: [ipa("h"), " ⟨h⟩"]},
    ],
    [
      th("Lenis stop/affricate"),
      td(ipa("w"), " ⟨w⟩"),
      td(ipa("l"), " ⟨l⟩"),
      td(ipa("j"), " ⟨y⟩"),
      td(),
      td(),
    ],
  ),
  latinNm.notesInOrder(),
  p(
    "The vowels ",
    ipa("a e i o u"), " ",
    "are romanized ⟨a e i o u⟩, because I'm not a madman. ",
    ipa("ai̯ au̯ oi̯"), " ",
    "are ⟨ai ao oi⟩ (with ⟨ao⟩ taking inspiration from Mandarin Pinyin), and the coda consonants ",
    ipa("Q N S"), " ",
    "are spelled ⟨k n s⟩. ",
  ),
  h2("CJK Characters"),
  p(
    "Every one of Jaobon's 366 roots has an assigned CJK character spelling, which can be found in the ",
    a("/roots", "root list"), ".",
  ),
  p(
    "For roots taken from Mandarin and Japanese, I use the (simplified) character used to spell the source word/morpheme; ",
    "for the handful of roots which derive from multiple Mandarin terms which happen to have similar ",
    "sounds and meanings, I picked the character used for whichever, in my judgement, is closest to the ",
    "core meaning of the Jaobon root. Roots derived from two-character Mandarin words generally take their ",
    "initial consonant and their vowel from the first Mandarin syllable, and their final consonant from ",
    "the initial consonant of the second Mandarin syllable; in such cases, I spell the Jaobon root with ",
    "the first character of the Mandarin word, since it contributes the bulk of the phonetic information. ",
  ),
  p(
    "For roots derived from languages not conventionally spelled with CJK characters, I simply chose ",
    "a CJK character whose meaning matches the Jaobon root.",
  ),
  p(
    "Of note: I strictly use simplified characters to spell Jaobon, as their greater graphical simplicity ",
    "suits the fact that Jaobon uses many fewer characters than any other language using CJK characters. ",
    "It would actually be non-trivial to convert Jaobon spelling to traditional ",
    "equivalents, as many single characters used in Jaobon are the simplified variant of ",
    "multiple traditional characters of different meanings, with the meaning of more than one traditional ",
    "character serving as inspiration for the meaning of the root as used in Jaobon. ",
  ),
];

const FeaturalDotsSection: Document = [
  h2("Featural Dots"),
  p(
    "The third writing system I use for Jaobon is an original script I designed for it, which is ",
    "nevertheless general-purpose and easily extensible. Featural Dots is a simple featural writing ",
    "system which stacks segments into syllable blocks like so: ",
    inlineDots("kaN"), " ", ipa("kaN"), ". ",
    "In this block, ", inlineDots('k '), " represents ", ipa("k"), ", ",
    inlineDots('a'), " represents ", ipa("a"), ", and ",
    inlineDots(' N'), " represents ", ipa("N"), ". ",
    "For the rest of this section, initial and final consonant characters will be displayed along with the vowel grapheme ",
    inlineDots('a'), " ", ipa("a"), ", in order to clearly see the positioning of the ",
    "consonant grapheme relative to the vowel. ",
  ),
  // p(
  //   "This section describes the mode of Featural Dots as used in Jaobon. For more detailed information ",
  //   "about Featural Dots as a general-purpose script, see ",
  //   a("/featural_dots", "the dedicated page"), ". ",
  // ),
  p(
    "Initial consonants are written with two distinct rows, with the top row denoting manner of ",
    "articulation and the second row denoting the place of articulation:",
  ),
  table(
    [
      th(),
      th("Labial ", dots("wa")),
      th("Alveolar ", dots("la")),
      th("Palatal ", dots("ya")),
      th("Velar ", dots("a")),
    ],
    [
      th("Nasal ", dots("qa")),
      td(ipa("m"), " ", dots("ma")),
      td(ipa("n"), " ", dots("na")),
      td(ipa("ɲ"), " ", dots("qya"), fdNm.noteRef('extra_symbols')),
      td(ipa("ŋ"), " ", dots("qa"), fdNm.noteRef('extra_symbols')),
    ],
    [
      th("Fortis stop/affricate ", dots("ka")),
      td(ipa("p"), " ", dots("pa")),
      td(ipa("t"), " ", dots("ta")),
      td(ipa("t͡ʃ"), " ", dots("ca")),
      td(ipa("k"), " ", dots("ka")),
    ],
    [
      th("Lenis stop/affricate ", dots("ka")),
      td(ipa("b"), " ", dots("ba")),
      td(ipa("d"), " ", dots("da")),
      td(ipa("d͡ʒ"), " ", dots("ja")),
      td(ipa("g"), " ", dots("ga")),
    ],
    [
      th("Fricative ", dots("ha")),
      td(ipa("f"), " ", dots("fa"), fdNm.noteRef('extra_symbols')),
      td(ipa("s"), " ", dots("sa")),
      td(ipa("ʃ"), " ", dots("xa")),
      td(ipa("h"), " ", dots("ha"), fdNm.noteRef('h')),
    ],
    [
      th("Approximant ", dots("a")),
      td(ipa("w"), " ", dots("wa")),
      td(ipa("l"), " ", dots("la")),
      td(ipa("j"), " ", dots("ya")),
      td(ipa("ʔ"), " ", dots("a"), fdNm.noteRef('glottal_stop')),
    ],
  ),
  fdNm.notesInOrder(),
  p(
    "Vowels are visually distinguished by being written around a vertical stem, the only vertical line ",
    "used by Featural Dots. Vowels are also featural, with height and frontness being marked by the ",
    "position of a horizontal spoke off the vertical stem. ",
  ),
  table(
    [
      th(),
      th("Front"),
      th("Central"),
      th("Back"),
    ],
    [
      th("High"),
      td(ipa("i"), " ", dots("i")),
      td(),
      td(ipa("u"), " ", dots("u")),
    ],
    [
      th("Mid"),
      td(ipa("e"), " ", dots("e")),
      td(),
      td(ipa("o"), " ", dots("o")),
    ],
    [
      th("Low"),
      td(),
      td(ipa("a"), " ", dots("a")),
      td(),
    ],
  ),
  p(
    "Due to there being so few in Jaobon, the Featural Dots mode for Jaobon writes final consonants/semivowels ",
    "with a kind of shorthand for the initial graphemes, which hints at either a place or a manner of articulation. ",
  ),
  p(
    "The diphthongs ", ipa("ai̯ au̯ oi̯"), " are written ", inlineDots('aI aU oI'), " respectively, ",
    "with the single dots beneath using the same back = left / front = right symbolism as the vowels and initial consonants, ",
    "with ", inlineDots('aI aU oI'), " ", ipa("ai̯ au̯ oi̯"), " specifically looking like vertically ",
    "flipped versions of ", inlineDots('ya wa yo'), " ", ipa("ja wa jo"), ". ",
  ),
  p(
    "In contrast, the final consonant graphemes are essentially bare manner of articulation markers, ",
    "since that is their only explicitly contrastive feature. ",
    ipa("aN"), " is ", inlineDots('aN'), ", using the same center dot as nasal initials, ",
    ipa("aQ"), " is ", inlineDots("aK"), ", using the characteristic double dot of fortis stops, and ",
    ipa("aS"), " is ", inlineDots("aS"), ", using the horizontal line of fricatives. ",
  ),
];

const ProperNounsTitle = h2("Representation of proper nouns");

const LatinAndCJKProperNouns: TextualChunk[] = [
  "Proper nouns like personal names and place names are set apart orthographically in all ",
  "writing systems for Jaobon. In the Latin alphabet, names are written capitalized, with ",
  "all syllables grouped together without spaces: ", i("Toma"), ". ",
  "In CJK characters double angle brackets are placed around the name: ", span("inline", span("cjk", "《头妈》")), ". ",
]

export const WritingSystemsMarkdownDocument: Document = [
  Title,
  p(
    "Jaobon has three canonical writing systems - Latin alphabet, CJK characters, and Featural Dots. ",
    "The first two are described here; to see the Featural Dots font, view the ",
    a("https://jaobon.conorstuartroe.com/scripts", "Jaobon website"), ".",
  ),
  ...LatinAndCJKSections,
  ProperNounsTitle,
  p(...LatinAndCJKProperNouns),
];

export default function WritingSystems(_props: {}) {
  return documentToJSX([
    Title,
    p(
      "Jaobon has three canonical writing systems - Latin alphabet, CJK characters, and Featural Dots, ",
      "which are described in that order on this page.",
    ),
    ...LatinAndCJKSections,
    ...FeaturalDotsSection,
    ProperNounsTitle,
    p(
      ...LatinAndCJKProperNouns,
      "In Featural Dots, similar bracket characters are used in the same way: ", inlineDots('<toma>'), ". ",
    ),
  ]);
}
