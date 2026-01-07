import {validSyllableString} from "./syllables";
import NoteManager from "./notes";
import {ROOTS} from "./roots";
import {Document, TextualChunk, h1, p, a, ul, documentToJSX, ipa, table, th, td} from "./formatting";

const notes = {
  alveolar: ["In free variation with dental place of articulation."],
  stops: ["The fortis-lenis distinction may surface as a difference in voicing, aspiration, or both, or even in length or some other feature that may be interpreted as a fortis-lenis binary. I notate stops/affricates in broad transcription as though they contrast in voicing."],
  affricates: ["May be any coronal affricate: ", ipa("[t͡ʃ d͡ʒ]"), ", ", ipa("[t͡ɕ d͡ʑ]"), ", ", ipa("[t͡ʂ d͡ʐ]"), ", or even ", ipa("[t͡s d͡z]"), "."],
  fricatives: ["Voicing is non-contrastive in fricatives, but they preferably remain unvoiced. This is because some listeners may have trouble distinguishing between voiced affricates and fricatives."],
  shush: ["Free variation: ", ipa("[ʃ~ɕ~ʂ]"), "."],
  liquids: ["May be any lateral or rhotic consonant."],
  h: ["Free variation: ", ipa("[h~x~χ~ʁ]"), "."],
};

export const initials = ['ʔ', 'm', 'n', 'p', 't', 't͡ʃ', 'k', 'b', 'd', 'd͡ʒ', 'g', 's', 'ʃ', 'h', 'w', 'l', 'j'];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const codas = ['', 'Q', 'N', 'S'];
const rimes: string[] = [];
vowels.forEach(v => {
  codas.forEach(c => {
    rimes.push(v + c);
  })
  if (v === 'a') {
    rimes.push('ai̯', 'au̯');
  } else if (v === 'o') {
    rimes.push('oi̯');
  }
});

function ipa2Syllable(ipa: string) {
  return ipa
      .replace('ʔ', '')
      .replace('j', 'y')
      .replace('t͡ʃ', 'c')
      .replace('d͡ʒ', 'j')
      .replace('ʃ', 'x')
      .replace('ai̯', 'ai')
      .replace('au̯', 'ao')
      .replace('oi̯', 'oi')
      .replace('Q', 'k')
      .replace('N', 'n')
      .replace('S', 's')
}

const nm = NoteManager(notes);

export const PhonologyDocument: Document = [
  h1("Phonology"),
  p(
    "Like most languages in the ",
    a("https://en.wikipedia.org/wiki/Mainland_Southeast_Asia_linguistic_area", "Mainland Southeast Asia linguistic area"), ", ",
    "Jaobon has a phonology heavily centered upon the syllable, with no clear level of phonological organization above the syllable. ",
    "Also like most of those languages, the set of consonants appearing in the syllable onset is markedly ",
    "different from the set appearing in the syllable coda. ",
    "Unlike most of those languages, Jaobon does not employ contrastive syllable tone; ",
    "indeed, Jaobon does not use any kind of lexically contrastive prosody.",
  ),
  p(
    "Jaobon phonology is intended to be fairly easy and universally accessible, although in the interest of ",
    "having enough monosyllabic roots it does have phonemic contrasts (such as a fortis-lenis distinction in stops) ",
    "and phonotactic complexities (such as syllable-final consonants) that exceed the complexity of some ",
    "natural languages. In general, an attempt was made to limit these to those which would be easy for the ",
    "majority of speakers to use. For instance, the large majority of widely-spoken world languages make some ",
    "type of vocal onset time distinction for stops, and where gaps exist there should be possible ",
    "substitutions available (e.g., Arabic speakers may use ", ipa("[f]"), " for ", ipa("/p/"), "); ",
    "the difficulty which, e.g., Tamil or Greek speakers may find with the distinction did not prevent its inclusion. ",
    "Similarly, I made the judgement that a very constrained set of syllable-final consonants is in practice easy enough to ",
    "learn even for speakers whose languages do not have them, though place of articulation contrasts were avoided ",
    "there for the sake of ease. Some widely spoken languages are not entirely compatible with Jaobon phonology, e.g., ",
    "even Spanish speakers may struggle with the distinction between ", ipa("/d͡ʒ/"), " and ", ipa("/j/"), ". ",
  ),
  p("Jaobon has 17 initial consonants:"),
  table(
    [
      th(),
      th("Labial"),
      th("Alveolar", nm.noteRef('alveolar')),
      th("Palatal"),
      th("Velar"),
      th("Glottal"),
    ],
    [
      th("Nasal"),
      td(ipa("m")),
      td(ipa("n")),
      td(),
      td(),
      td(),
    ],
    [
      th("Fortis stop/affricate", nm.noteRef('stops')),
      td(ipa("p")),
      td(ipa("t")),
      td(ipa("t͡ʃ"), " ", nm.noteRef('affricates')),
      td(ipa("k")),
      td(ipa("ʔ")),
    ],
    [
      th("Lenis stop/affricate", nm.noteRef('stops')),
      td(ipa("b")),
      td(ipa("d")),
      td(ipa("d͡ʒ"), " ", nm.noteRef('affricates')),
      td(ipa("g")),
      td(),
    ],
    [
      th("Fricative", nm.noteRef('fricatives')),
      td(),
      td(ipa("s")),
      td(ipa("ʃ"), " ", nm.noteRef('shush')),
      {th: false, colspan: 2, children: [ipa("h"), " ", nm.noteRef('h')]},
    ],
    [
      th("Approximant"),
      td(ipa("w")),
      td(ipa("l"), " ", nm.noteRef('liquids')),
      td(ipa("j")),
      td(),
      td(),
    ],
  ),
  nm.notesInOrder(),
  p(
    "Jaobon has the common system of five cardinal vowels ",
    ipa("/a e i o u/"), ". ",
    "It also has three diphthongs ",
    ipa("/ai̯ au̯ oi̯/"), ". ",
    "The realization of the vowels is flexible as long as a five-way contrast is maintained, and ",
    ipa("/oi̯/"), " ",
    "in particular permits variation such as ",
    ipa("[oi̯~ui̯~we~wi~ɥi~ø~y~øy̯]"), " etc.",
  ),
  p(
    "A number of initial-vowel sequences are disallowed: ",
    ipa("/ti/"), ", ", ipa("/di/"), ", ",ipa("/si/"), ", ",ipa("/hi/"), ", ",ipa("/ji/"), ", and ",ipa("/wu/"), ". ",
    "Because ", ipa("/oi̯/"), " may often be pronounced ", ipa("[we~wi]"), " or similar, it is not permitted to ",
    "have the onset ", ipa("/w/"), "; the root ", ipa("/oi̯/"), " is merely an interjection to avoid confusion with ",
    "the roots ", ipa("/we/"), " and ", ipa("/wi/"), ", and similarly the root ", ipa("/joi̯/"),
    " is a marginal interjection as some speakers may find it difficult to pronounce."
  ),
  p("Jaobon has three possible coda consonant phonemes:"),
  ul(
    [
      "A stop ",
      ipa("/Q/"), ", ",
      "which is typically pronounced ",
      ipa("[k̚]"), " or ", ipa("[ʔ]"), ", ",
      "but may optionally assimilate in place to a following consonant.",
    ],
    [
      "A nasal ",
      ipa("/N/"), ", ",
      "which is typically ",
      ipa("[n~ŋ~ɴ]"), " ",
      "before a pause, but usually assimilates in place to a following consonant. ",
      "May also surface as nasalization of the previous vowel.",
    ],
    [
      "A fricative ",
      ipa("/S/"), ", ",
      "which is preferably ",
      ipa("[s]"), " ",
      "but may be any fricative sound.",
    ],
  ),
  p(
    "Jaobon syllable structure is CV(C), with an initial consonant and a vowel required and a coda optional. ",
    "A coda consonant may not occur after a diphthong. These phonotactics result in 366 permissible syllables. ",
    "In Jaobon, all 366 possible syllables are morphemes with a specific meaning:",
  ),
  (() => {
    let syllableCount = 0;

    return table(
      [
        th(),
      ...initials.map(i => th(ipa(i))),
      ],
      ...rimes.map(r => [
        th(ipa(r)),
        ...initials.map(i => {
          const syllable = ipa2Syllable(i + r);
          const permissible = validSyllableString(syllable);

          let content: TextualChunk = "";
          if (permissible) {
            if (ROOTS.get(syllable)) {
              content = a(`/roots#${syllable}`, (++syllableCount) + "");
            } else {
              content = (++syllableCount) + "";
            }
          }

          return {
            th: false,
            style: {backgroundColor: permissible ? 'transparent' : '#777'},
            children: [content],
          }
        }),
      ]),
    )
  })(),
];

export default function Phonology(_props: {}) {
  return documentToJSX(PhonologyDocument);
}
