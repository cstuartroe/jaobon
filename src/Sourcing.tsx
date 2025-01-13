import React, { Component } from "react";
import {sourceCounts} from "./roots";
import {Link} from "react-router-dom";
import {IPA} from "./Phonology";

type Props = {
}

type State = {
}

export default class Sourcing extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <h1>Sourcing roots</h1>

        <p>
          Jaobon derives its 366 roots from other languages, so that speakers of those languages may have a
          recognizable connection to as many roots as possible when first encountering them, to aid in remembering them.
          To this end, I have striven to make every root as close in sound and meaning as possible to the source
          word. I don't think that a speaker of a given source language would be able to guess the meaning of most Jaobon
          roots at first glance, but I do think they will find the similarity to be a memory aid once the etymology
          is pointed out to them. For instance, I don't think most English speakers would be able to guess without
          context that <Link to="/roots#dak"><i>dak</i></Link> means "dark, black," but once told that it derived from the
          English word "dark," I'm sure they'd be able to recall the word <i>dak</i> much more easily.
        </p>

        <p>
          Jaobon roots are predominantly taken from the three most widely natively spoken languages in the world:
          Mandarin, Spanish, and English.
          In fact, the first version of Jaobon included only one or two roots from other sources.
          This was to maximize the number of people who would be able to recognize the source of a given root
          (I suppose the logical extreme of this strategy would have been to simply source every root from Mandarin,
          but I wanted to preserve at least some semblance of an internation/neutral character for the language; and
          besides, doing so would have exacerbated the issue described below).
        </p>

        <p>
          The problem with this strategy is that the main challenge of assigning Jaobon morphemes is that it
          essentially functions like an extremely complex Tetris game - I was attempting to assign meanings to
          as many syllables as possible, while making sure that the meanings were core enough to deserve a morpheme,
          and that no etymology was so distorted in sound or meaning that its mnemonic value was lost.
          Despite my best efforts, the language was suffering from the same syndrome as Volapük - words so distorted
          from their sources as to be humorous. What English speaker, for instance, would really connect the Jaobon
          word <i>hen</i> with its English source "heaven", and remember it as a term for "sky"; or the Jaobon
          word <i>tek</i> with its English source "thick"?
          I think that deriving all or close to all of the 366 roots from only Spanish, English, and Mandarin
          while maintaining the quality of etymologies would have been essentially impossible.
        </p>

        <p>
          In the end, I prioritized the fidelity of etymologies and my goal of using every phonologically permissible
          syllable over the purity of using only the three core languages. I threw out some etymologies which sounded
          too unlike the source word to be recognizable, and filled gaps opportunistically with words from other
          languages. I ended up with a total of 15 source languages, although all but the core three contribute a
          relatively tiny number of roots. In retrospect, I think this also had a positive effect on the feeling of
          the language, making it just a touch more variegated, global, and inclusive.
        </p>

        <p>The counts of how many roots derive entirely or in part from each source language are as follows:</p>

        <ul>
          {
            Array.from(sourceCounts().entries())
                .sort((a, b) => b[1] - a[1])
                .map(([lang, count], _) => (
                    <li key={lang}><a href={`/roots?lang=${lang}`}>{lang}: {count} roots</a></li>
                ))
          }
        </ul>

        <p>The counts sum to more than 366, since many roots have more than one source language.</p>

        <p>
          The only languages among this set without a large number of speakers ({'>'} 80 million)
          and/or international significance are
          Dutch and Polish. The inclusion of Polish I justify with the fact that
          the <Link to="/roots#cek"><i>-czek</i></Link> diminutive shares cognates in many Slavic languages, and has
          great sound symbolism to my ear. The even more disproportionate inclusion of Dutch was because of my personal
          familiarity with the language that led me to spot some chances to use Dutch etymologies that felt too
          fitting to pass up (and, only one of the Dutch-derived roots comes solely from Dutch;
          it's generally there to reinforce and add adjacent semantic space to English/German sources).
          Lastly, I'll point out that for Japanese, tied for the most etymons outside the core three,
          some of those are Sino-Japanese readings of characters which are especially recognizable cognates
          to the many widely-spoken Chinese varieties which preserve final stops.
        </p>

        <p>
            Even after opening up sourcing to a wider array of languages, all Jaobon roots have undergone varying degrees
            of indignity in the form of phonological and semantic distortion, some severe enough that I'm sure Jaobon
            hasn't entirely escaped its Volapükishness. In particular:
        </p>

        <ul>
            <li>Vowels are often distorted: English <i>back</i> <IPA>[bæk]</IPA> → Jaobon <i>bek</i> <IPA>[bek]</IPA></li>
            <li>
                Consonants, especially liquids and glides, are liable to disappear:
                Mandarin 年 <IPA>[njɛn˧˥]</IPA> → Jaobon <i>nen</i>,
                Spanish <i>crecer</i> → Jaobon <i>kes</i>,
                English <i>horse</i> → Jaobon <i>hos</i>,
                English <i>glass</i> → Jaobon <i>las</i>,
                Hindi मुक्त <IPA>[mʊkt̪]</IPA> → Jaobon <i>muk</i>
            </li>
            <li>
                Consonants (particularly, <IPA>[f]</IPA>) are occasionally replaced with the closest but still not-so-similar alternatives:
                Mandarin 复杂 <IPA>[fût͡sǎ]</IPA> → Jaobon <i>pus</i>. This is especially true with final consonants:
                <ul>
                    <li>
                        Any old stop might become Jaobon final <i>k</i> (for which I consider both <IPA>[k]</IPA> and <IPA>[ʔ]</IPA> acceptable pronunciations):
                        English <i>dog</i> → Jaobon <i>dok</i>,
                        Mandarin 舞蹈 <IPA>[u˧˥ tau̯˨˩˦]</IPA> → Jaobon <i>uk</i>
                    </li>
                    <li>
                        Any coronal fricative or affricate might become Jaobon final <i>s</i>:
                        English <i>with</i> → Jaobon <i>wis</i>,
                        Mandarin 物质 <IPA>[u˥˩ ʈ͡ʂɻ̩˥˩]</IPA> → Jaobon <i>us</i>
                    </li>
                </ul>
            </li>
            <li>
                On rare occasions, I allowed a root to be more recognizable in spelling than pronunciation:
                English <i>make</i> → Jaobon <i>mak</i>
            </li>
            <li>
                I may only take the first or stressed syllable of a multisyllablic source word/stem:
                Spanish <i>nadar</i> → Jaobon <i>na</i>,
                Spanish <i>escuchar</i> → Jaobon <i>kus</i>
            </li>
        </ul>

        <p>
            In addition to phonetic fidelity, an effort was made to preserve semantic faithfulness as well,
            which was key in defining the semantic space of certain roots. For instance, Jaobon <i>xun</i>{' '}
            from Chinese 順 takes on its multiple related senses, including
            "follow, go along; obey, comply; suit, fit; agree with".
            This principle was not respected in all cases, in order to fill in semantic gaps, e.g. Jaobon <i>wik</i>
            {' '}from English <i>weak</i> taking on not only the meaning "weak", but the related sense "tired".
        </p>

          <p>
              In some cases, the principle of semantic fidelity has led to related sets of words having different
              syntax, e.g. emotion terms <i>xi</i> "like", <i>has</i> "anger", <i>koi</i> "afraid":{' '}
              <i>mi xi Toma</i> "I like Tom" vs. <i>mi yo has nis Toma</i> "I'm angry with Tom"
              vs. <i>mi koi nis Toma</i> "I'm afraid of Tom".
          </p>
      </>
    );
  }
}
