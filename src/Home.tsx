import {Document, h1, p, img, a, ul, i, documentToJSX} from "./formatting";

export const HomeDocument: Document = [
  h1("Jaobon!"),
  p(
    "is a constructed language with only 366 morphemes, all monosyllabic. ",
    "Notably, these 366 syllables are the entire set of syllables distinguishable by Jaobon phonology; thus, ",
    "every phonologically possible syllable has a meaning assigned to it. ",
    "Almost all of these morphemes are derived from Mandarin, Spanish, and English, although there are a handful ",
    "derived in whole or part from other languages: Japanese, Hindi, Latin, Arabic, etc. "
  ),
  img("jaobon_flag_8866cc_puzzle_3x2.png", {"width": "60%", "margin": "20px auto", "display": "block"}, "Flag of Jaobon"),
  p(
    "Like Mandarin, Jaobon has no morphology which modifies phonemes or results in syllable rebracketing. ",
    "In this sense, Jaobon can be said to be a purely analytical language. ",
  ),
  p(
    "The syntax of Jaobon is mostly head-initial, with SVO default word order, prepositions, and relative ",
    "clauses which occur after the noun. However, compound nouns are head-final, and adjectives and other ",
    "noun modifiers may appear before the noun when restrictive. Demonstratives and cardinal numbers appear ",
    "before the noun. This syntax is broadly similar to the main source languages - Mandarin, Spanish, and ",
    "English. Jaobon also uses ",
    a("https://en.wikipedia.org/wiki/Relational_noun", "relational"),
    " nouns extensively in a manner similar to Mandarin, appearing after a noun. ",
  ),
  p(
    "Jaobon is in large part inspired by, and in response to, Toki Pona; it shares many similarities but ",
    "also a few key philosophical differences: more roots, shorter roots, and an explicitly prescribed ",
    "dictionary of root collocations to express more complex concepts. Also, in contrast to Toki Pona's ",
    "fairly neutral/unique flavor, I think that Jaobon has a distinct affinity with the ",
    a("https://en.wikipedia.org/wiki/Mainland_Southeast_Asia_linguistic_area", "Mainland Southeast Asia linguistic area"),
    " (particularly with Chinese languages) in its phonotactics, syntax, semantics, and overall feel. "
  ),
  p("Jaobon has three canonical writing systems:"),
  ul(
    ["The Latin alphabet, which is preferable for input methods and informal communication."],
    [
      "CJK characters, with a set of 366 in use in a one-to-one relationship with Jaobon morphemes. ",
      "I use simplified Chinese characters to write Jaobon, with the justification that visual simplicity ",
      "should be prioritized for such a small grapheme set. ",
      "I prefer the use of CJK characters when reading; all texts on this site are rendered in CJK characters ",
      "by default. "
    ],
    ["A general-purpose featural script called Featural Dots, which is space-efficient and cool!"],
  ),
  p(
    "If you look at the root list, you may soon realize that ",
    i("jao bon"),
    " means \"foot-bottom\" (", i("bon"), " being a relational noun), or, logically, ",
    "the sole of the foot. Why would I name the language something so random? ",
    "In the ", a("/history", "first iteration of Jaobon"), ", ",
    i("jao bon"), " was a direct calque of the name of Toki Pona, coming from Mandarin 叫 and Spanish ",
    i("bueno"), ". In the next version, the meanings of most syllables were reassigned, and ", i("jao bon"), " ",
    "happened to now mean \"foot-bottom\"; I was charmed by the new semantics and decided not to rename the ",
    "language. Jaobon is now on its third iteration, but the meanings of both ", i("jao"), " and ", i("bon"), " ",
    "happen not to have changed since version 2, and I like the nonsense name as much as I ever did. "
  ),
]

export default function Home(props: {}) {
    return documentToJSX(HomeDocument);
}
