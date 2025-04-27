import React, { Component } from "react";
import {IPA} from "./Phonology";
import {Link} from "react-router-dom";

type Props = {
}

type State = {
}

export default class History extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <h1>History</h1>

        <h2>Jaobon 1 (2014)</h2>

        <p>
          The Jaobon project was begun in September or October 2014 - the first written reference to it I have is a{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/2i4l0k/introducing_jaobon_a_major_departure_from_my/" target="_blank">
            Reddit post
          </a> from 2 Oct 2014.
          The phonology was extremely similar, with the same consonant and vowel inventories, and lacking only
          coda <IPA>/k/</IPA> and <IPA>/s/</IPA> and the diphthong <IPA>/oi̯/</IPA> relative to the current version.
          This gave it a total of 192 possible roots (17 consonants times 12 finals, minus 12 impossible combinations because{' '}
          <IPA>/ti/</IPA>, <IPA>/di/</IPA>, <IPA>/si/</IPA>, <IPA>/hi/</IPA>, <IPA>/ji/</IPA>, and <IPA>/wu/</IPA>
          {' '}were avoided, just as in the current version of Jaobon). However, there were some gaps - I started with
          184 roots, at some point going up to 188.
          A 184-root list is available in a{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/2ihs4y/jaobon_hanzi/" target="_blank">
            Reddit post
          </a>{' '}
          which also includes the CJK characters I associated with each root.
          A 188-root list is available in the{' '}
          <a href="https://community-courses.memrise.com/community/course/409937/basic-jaobon/" target="_blank">
            Memrise course
          </a>{' '}
          I created some time later.
        </p>

        <p>
          Because the phonology and number of roots were so different, the rate of lexical similarity between 2014
          Jaobon and now is quite low, and few roots are recognizably preserved since then. A glance at my{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/2i4z7k/sample_of_jaobon/" target="_blank">
            2014 translation
          </a>{' '}
          of The North Wind and the Sun shows this off well: the roots which are more or less the same as their current
          versions include <i>bin</i>, <i>i</i>, <i>ke</i>, and <i>lai</i>, but overall the text is very different from
          an <Link to="/texts/north_wind">up-to-date translation</Link>.
        </p>

        <p>
          There are many other differences in addition to lexical.
          Firstly, the grammar was fairly different
          from both current Jaobon and the source languages: what are now voice particles functioned then more
          like case markers, making the word order actually somewhat flexible between SVO, SOV, and OSV, and noun
          phrases were strictly left-branching.
          Also, roots were only sourced from
          English, Spanish, and Mandarin, though a few grammatical particles were invented a priori. Lastly, there
          were some orthographic differences: <IPA>/t͡ʃ ʃ/</IPA> were ⟨ch sh⟩ rather than ⟨c x⟩, and I wrote compound
          words without spaces.
        </p>

        <h2>Subsequent projects (2015)</h2>

        <p>
          In those early materials, I called Jaobon "oligosynthetic", a term which has varying definitions but was{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/2vr4fc/the_rconlangs_oligosynthesis_debate/" target="_blank">
            in vogue
          </a>{' '}
          on /r/conlangs at the time to describe languages with as few as 20ish morphemes, the most well-known of which was{' '}
          <a href="https://www.reddit.com/r/Vahn/" target="_blank">Vahn</a>,
          which boasts 37 morphemes.
          (The term "oligoanalytic" also exists which probably better describes Jaobon and Toki Pona, though I may not
          have known it at the time; under such usage, Vahn is still a good example of an oligosynthetic language as its
          morphemes are only one or two phonemes, and phonological words may be multimorphemic.)
          I think it's true that Jaobon was at that time as much or more a response to the oligosynthesis wave as to
          Toki Pona in particular, and my intention was to create a language with a somewhat restrictive morpheme
          inventory that still felt fairly natural, unlike the (in my then-perception) mind-bending and semantically
          restricted and vague oligolangs.
        </p>

        <p>
          In February 2015,{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/2wdlcz/introducing_kus_jaaw_a_catechoradical_language/" target="_blank">
            I declared
          </a>{' '}
          that 184 roots had been too few and that I was done with oligosynthesis, starting a new project that I dubbed
          "catechoradical" - a step above oligosynthetic languages in morpheme count with 512, though still capped
          very low relative to natural languages.
          I have no other memories or written records of that catechoradical project and I don't think I developed it
          further, but it's clear that after a few months of dabbling I was feeling quite cramped with the sub-200
          inventory of roots.
        </p>

        <p>
          In fall 2015, I started work on{' '}
          <a href="https://lauvinko.conorstuartroe.com/" target="_blank">Lauvìnko</a>,
          a naturalistic language set in early modern Malaysia, and in connection I created a sibling project{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/3nhx7o/basabano_my_catechoradical_creole/" target="_blank">
            Basabano
          </a>,
          a language sharing many traits with Jaobon but which was framed as a creole between Malay, English,
          Portuguese (≈ Spanish), Hokkien (≈ Mandarin), Hindi, and Arabic, a plausible occurrence in that time and
          place but also - shock and awe - a language with few lexemes, all of which derive from the most widely
          spoken languages in the world and is easy to learn.
          I created about{' '}
          <a href="https://docs.google.com/spreadsheets/d/11-Kuwv3nf6l3lt45ftNZQLh-IzqbOM5-fMGuVmSqnRE/edit?usp=sharing" target="_blank">
            250 roots
          </a>,
          though the bisyllabic phonology permitted thousands and I expressed an intention to create at least several hundred.
          I also evidently gained enough facility in the language to{' '}
          <a href="https://www.reddit.com/r/conlangs/comments/3odam9/a_journal_entry_in_basabano_it_may_not_look_like/" target="_blank">
            journal in it
          </a>,
          but work stalled on the project at some point.
          I think I must have concluded it was infeasible to combine the naturalistic origin story and the very much
          engineered nature of an oligoanalytic language.
        </p>

        <p>
          Nonetheless, Basabano seems to have planted a couple of ideas in my mind that would be remembered when I
          came back around to Jaobon. For one, Basabano permitted four consonant codas: <IPA>/n s k l/</IPA>, laying
          the groundwork for adding coda <IPA>/s k/</IPA> to Jaobon (I must have realized at some point that
          coda <IPA>/l/</IPA> can actually be quite difficult). Also, perhaps Basabano made me more open to admitting
          etymologies from outside the core three languages.
        </p>

        <h2>Jaobon 2: the Return of Jaobon (2019)</h2>

        <p>
          In summer 2019, I came back onto the oligo scene with a new edition of Jaobon, which this time looks very much
          like the current version. It has 325 roots, which are only recorded in a{' '}
          <a href="https://community-courses.memrise.com/community/course/5526464/jaobon-2/1/" target="_blank">
            second Memrise course
          </a>.
          Without doing a real count, at a glance it looks like about 80% of the roots are still the same in current
          Jaobon, and the phonology looks much more like the current version, with the new coda consonants and 350
          possible roots.
          I have no other materials in or about this version of Jaobon and don't even have any sentences written in it,
          but judging by the set of grammatical particles I'd say the intended grammar was more or less in line with the
          current version as well.
        </p>

        <h2>Jaobon 3: In Code! (2023-)</h2>

        <p>
          In 2020 I started my career as a professional software engineer, and around that time every one of my hobbies
          became subsumed into being coding projects (seriously -{' '}
          <a href="https://github.com/cstuartroe/membaca" target="_blank">language learning</a>,{' '}
          <a href="https://github.com/cstuartroe/storyweb" target="_blank">creative writing</a>,
          music <a href="https://github.com/cstuartroe/notesy" target="_blank">performance</a> and{' '}
          <a href="https://github.com/cstuartroe/scale-theory" target="_blank">composition</a>,{' '}
          <a href="https://github.com/cstuartroe/svg_gen" target="_blank">visual art</a>,{' '}
          <a href="https://github.com/cstuartroe/celestial-cards" target="_blank">tabletop games</a>,
          and of course <a href="https://github.com/cstuartroe/lauvinko" target="_blank">conlanging</a>{' '}
          <a href="https://github.com/cstuartroe/kuna" target="_blank">conlanging</a>{' '}
          <a href="https://github.com/cstuartroe/jaobon" target="_blank">conlanging</a>{' '}).
          So naturally, when I picked Jaobon back up in April 2023 my first act was to{' '}
          <a href="https://github.com/cstuartroe/jaobon/commit/636da35dc303a9fa14424863a2de970288f6e4bc" target="_blank">
            digitize it
          </a>{' '}
          and put it online.
        </p>

        <p>
          Soon after, I{' '}
          <a href="https://github.com/cstuartroe/jaobon/commit/e2d57ae5e92c52b7c70899adb314e8287c4b4d6c" target="_blank">
            zipped up all the gaps
          </a>{' '}
          and brought the language to 350 morphemes, occupying every permissible syllable.
        </p>

        <p>
          In April 2024 I finally{' '}
          <a href="https://github.com/cstuartroe/jaobon/commit/a4ee704eaa1f50b2645a3403b413c243a2628f1e" target="_blank">
            wrote out
          </a>{' '}
          a reasonably comprehensive description of Jaobon grammar.
        </p>

        <p>
          In January 2025 I{' '}
          <a href="https://github.com/cstuartroe/jaobon/commit/cd46ad4b49e74d2ff15d3c5a77aed8247e7b92d0" target="_blank">
            changed Jaobon phonology
          </a>{' '}
          for the first time since 2019 and only the second time ever, adding the diphthong <IPA>/oi̯/</IPA>, bringing
          the total number of possible syllables to 366 and filling all the vacant real estate with new roots.
          This was partially motivated by wanting to{' '}
          <a href="https://bsky.app/profile/jaobon.bsky.social" target="_blank">
            associate each calendar day
          </a>{' '}
          with a Jaobon root (I'm also into calendrics),
          and partially motivated by still feeling a bit cramped.
          Crazy as it may seem, that bump up from 350 to 366 roots felt like it was really hitting the sweet spot.
          I finally got to de-conflate terms for emotion and color, something which I'd found undesirable for a
          long time (previously, e.g. "blue" and "sad" were the same term), and added a few nice new roots that felt
          needed.
          For the first time in Jaobon's history, I really feel like every root has semantic breathing room and there
          are no gaps nor any ideas that are challenging to express.
          There's also been a steep reduction in seriously phonetically mangled etymologies.
        </p>

        <p>
          Now Jaobon has a dictionary exceeding 1000 entries and a corpus of translations exceeding 2000 roots,
          and is finally feeling like a mature, convincing, and presentable project.
          I think I accomplished the original goal of finding the number of roots that makes an oligoanalytic
          language "click" for me - where any fewer would feel cramped, but where I can't think of any root I'd like
          to add or split up.
        </p>
      </>
    );
  }
}
