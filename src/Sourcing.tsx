import {sourceCounts} from "./roots";
import {Document, documentToJSX, h1, p, ul, a, i, ipa} from "./formatting";


export const SourcingDocument: Document = [
        h1("Sourcing roots"),

        p(
          "Jaobon derives its 366 roots from other languages, so that speakers of those languages may have a ",
          "recognizable connection to as many roots as possible when first encountering them, to aid in remembering them. ",
          "To this end, I have striven to make every root as close in sound and meaning as possible to the source ",
          "word. I don't think that a speaker of a given source language would be able to guess the meaning of most Jaobon ",
          "roots at first glance, but I do think they will find the similarity to be a memory aid once the etymology ",
          "is pointed out to them. For instance, I don't think most English speakers would be able to guess without ",
          "context that ", a("/roots#dak", i("dak")), " means \"dark, black,\" but once told that it derived from the ",
          "English word \"dark,\" I'm sure they'd be able to recall the word ", i("dak"), " much more easily. ",
        ),

        p(
          "Jaobon roots are predominantly taken from the three most widely natively spoken languages in the world: ",
          "Mandarin, Spanish, and English. ",
          "In fact, the first version of Jaobon included only one or two roots from other sources. ",
          "This was to maximize the number of people who would be able to recognize the source of a given root ",
          "(I suppose the logical extreme of this strategy would have been to simply source every root from Mandarin, ",
          "but I wanted to preserve at least some semblance of an internation/neutral character for the language; and ",
          "besides, doing so would have exacerbated the issue described below). ",
        ),

        p(
          "The problem with this strategy is that the main challenge of assigning Jaobon morphemes is that it ",
          "essentially functions like an extremely complex Tetris game - I was attempting to assign meanings to ",
          "as many syllables as possible, while making sure that the meanings were core enough to deserve a morpheme, ",
          "and that no etymology was so distorted in sound or meaning that its mnemonic value was lost. ",
          "Despite my best efforts, the language was suffering from the same syndrome as Volapük - words so distorted ",
          "from their sources as to be humorous. What English speaker, for instance, would really connect the Jaobon ",
          "word ", i("hen"), " with its English source \"heaven\", and remember it as a term for \"sky\"; or the Jaobon ",
          "word ", i("tek"), " with its English source \"thick\"? ",
          "I think that deriving all or close to all of the 366 roots from only Spanish, English, and Mandarin ",
          "while maintaining the quality of etymologies would have been essentially impossible. ",
        ),

        p(
          "In the end, I prioritized the fidelity of etymologies and my goal of using every phonologically permissible ",
          "syllable over the purity of using only the three core languages. I threw out some etymologies which sounded ",
          "too unlike the source word to be recognizable, and filled gaps opportunistically with words from other ",
          "languages. I ended up with a total of 15 source languages, although all but the core three contribute a ",
          "relatively tiny number of roots. In retrospect, I think this also had a positive effect on the feeling of ",
          "the language, making it just a touch more variegated, global, and inclusive. ",
        ),

        p("The counts of how many roots derive entirely or in part from each source language are as follows:"),

        ul(
        ...Array.from(sourceCounts().entries())
                .sort((a, b) => b[1] - a[1])
                .map(([lang, count], _) => [
                    a(`/roots?lang=${lang}`, `${lang}: ${count} roots`),
                ])
        ),

        p("The counts sum to more than 366, since many roots have more than one source language."),

        p(
          "The only language among this set without a large number of speakers (> 80 million) ",
          "and/or international significance is Dutch, though it's worth noting that none of the Dutch-derived roots ",
          "comes solely from Dutch; ",
          "they're only there to reinforce and add adjacent semantic space to English/German sources. ",
          "The inclusion of Dutch was because of my personal ",
          "familiarity with the language that led me to spot some chances to use Dutch etymologies that felt too ",
          "fitting to pass up. ",
          "I'll also point out that for Japanese, ",
          "some of those are Sino-Japanese readings of characters which are especially recognizable cognates ",
          "to the many widely-spoken Chinese varieties which preserve final stops. ",
        ),

        p(
          "Even after opening up sourcing to a wider array of languages, all Jaobon roots have undergone varying degrees ",
          "of indignity in the form of phonological and semantic distortion, some severe enough that I'm sure Jaobon ",
          "hasn't entirely escaped its Volapükishness. In particular: ",
        ),

        ul(
            [
              "Vowels are often distorted: English ",
              i("back"), " ",
              ipa("[bæk]"),
              " → Jaobon ",
              i("bek"), " ",
              ipa("[bek]"),
            ],
            [
                "Consonants, especially liquids and glides, are liable to disappear: ",
                "Mandarin 年 ", ipa("[njɛn˧˥]"), " → Jaobon ", i("nen"), ", ",
                "Spanish ", i("crecer"), " → Jaobon ", i("kes"), ", ",
                "English ", i("horse"), " → Jaobon ", i("hos"), ", ",
                "English ", i("glass"), " → Jaobon ", i("las"), ", ",
                "Hindi मुक्त ", ipa("[mʊkt̪]"), " → Jaobon ", i("muk"),
            ],
            [
                "Consonants (particularly, ", ipa("[f]"), ") are occasionally replaced with the closest but still not-so-similar alternatives: ",
                "Mandarin 复杂 ", ipa("[fût͡sǎ]"), " → Jaobon ", i("pus"), ". This is especially true with final consonants: ",
                ul(
                    [
                        "Any old stop might become Jaobon final ", i("k"), " (for which I consider both ", ipa("[k]"), " and ", ipa("[ʔ]"), " acceptable pronunciations): ",
                        "English ", i("dog"), " → Jaobon ", i("dok"), ", ",
                        "Mandarin 舞蹈 ", ipa("[u˧˥ tau̯˨˩˦]"), " → Jaobon ", i("uk"), " ",
                    ],
                    [
                        "Any coronal fricative or affricate might become Jaobon final ", i("s"), ": ",
                        "English ", i("with"), " → Jaobon ", i("wis"), ", ",
                        "Mandarin 物质 ", ipa("[u˥˩ ʈ͡ʂɻ̩˥˩]"), " → Jaobon ", i("us"), " ",
                    ],
        ),
            ],
            [
                "On rare occasions, I allowed a root to be more recognizable in spelling than pronunciation: ",
                "English ", i("make"), " → Jaobon ", i("mak"), " "
            ],
            [
                "I may only take the first or stressed syllable of a multisyllablic source word/stem: ",
                "Spanish ", i("nadar"), " → Jaobon ", i("na"), ", ",
                "Spanish ", i("escuchar"), " → Jaobon ", i("kus"), " ",
            ],
),

        p(
            "In addition to phonetic fidelity, an effort was made to preserve semantic faithfulness as well, ",
            "which was key in defining the semantic space of certain roots. For instance, Jaobon ", i("xun"), " ",
            "from Chinese 順 takes on its multiple related senses, including ",
            "\"follow, go along; obey, comply; suit, fit; agree with\". ",
            "This principle was not respected in all cases, in order to fill in semantic gaps, e.g. Jaobon ", i("wik"), " ",
            "from English ", i("weak"), " taking on not only the meaning \"weak\", but the related sense \"tired\". ",
        ),

          p(
            "In some cases, the principle of semantic fidelity has led to related sets of words having different ",
            "syntax, e.g. emotion terms ", i("xi"), " \"like\", ", i("has"), " \"anger\": ",
            i("mi xi Toma"), " \"I like Tom\" vs. ", i("mi yo has nis Toma"), " \"I'm angry with Tom\". ",
          ),
];

export default function Sourcing(_props: {}) {
  return documentToJSX(SourcingDocument);
}
