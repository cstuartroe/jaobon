import React, { Component } from "react";

import {NON_LATIN_LANGUAGES, Root, ROOTS} from "./roots";

const TOKI_PONA_LISTS = ["pu", "ku", "nimisin"] as const;

type TokiPonaList = (typeof TOKI_PONA_LISTS)[number];

type TokiPonaRoot = {
  root: string,
  definition: string,
  source_language: string,
  source_word: string,
  source_transliteration?: string,
  source_definition: string,
  list: TokiPonaList,
}

type Cognate = {
  jaobon: Root,
  toki_pona: TokiPonaRoot,
  note?: JSX.Element,
};

const COGNATES: Cognate[] = [
  {
    jaobon: ROOTS.get("jen")!,
    toki_pona: {
      root: "jan",
      definition: "person, human",
      source_language: "Cantonese",
      source_word: "人",
      source_transliteration: "jan4",
      source_definition: "person, someone",
      list: "pu",
    },
  },
  {
    jaobon: ROOTS.get("yo")!,
    toki_pona: {
      root: "jo",
      definition: "have, carry, contain, hold",
      source_language: "Mandarin",
      source_word: "有",
      source_transliteration: "yǒu",
      source_definition: "have, there is",
      list: "pu",
    },
  },
  {
    jaobon: ROOTS.get("ken")!,
    toki_pona: {
      root: "ken",
      definition: "be able to, be allowed to, can, may, possible",
      source_language: "Tok Pisin",
      source_word: "ken",
      source_definition: "can, may, be able, be allowed",
      list: "pu",
    },
    note: <p>Tok Pisin <i>ken</i> derives from English <i>can</i>.</p>,
  },
  {
    jaobon: ROOTS.get("guk")!,
    toki_pona: {
      root: "kulupu",
      definition: "community, company, group, nation, society, tribe",
      source_language: "Tongan",
      source_word: "kulupu",
      source_definition: "group",
      list: "pu",
    },
    note: <p>Tongan <i>kulupu</i> is loaned from English <i>group</i>.</p>,
  },
  {
    jaobon: ROOTS.get("kus")!,
    toki_pona: {
      root: "kute",
      definition: "ear, hear, listen, pay attention to, obey",
      source_language: "French",
      source_word: "écouter",
      source_definition: "listen",
      list: "pu",
    },
    note: <p><i>escuchar</i> and <i>écouter</i> both descend from Latin <i>auscultāre</i>.</p>,
  },
  {
    jaobon: ROOTS.get("ma")!,
    toki_pona: {
      root: "mama",
      definition: "parent, ancestor, creator, originator, caretaker, sustainer",
      source_language: "Georgian",
      source_word: "მამა",
      source_transliteration: "mama",
      source_definition: "father",
      list: "pu",
    },
    note: <p>
      The official etymology of <i>mama</i> is the Georgian word for "father" (which is likely a babble word),
      but it is certainly also inspired by the similar babble words meaning "mother" in a very large number of natural
      languages.
    </p>,
  },
  {
    jaobon: ROOTS.get("mi")!,
    toki_pona: {
      root: "mi",
      definition: "I, me, we, us",
      source_language: "English",
      source_word: "me",
      source_definition: "",
      list: "pu",
    },
  },
  {
    jaobon: ROOTS.get("mo")!,
    toki_pona: {
      root: "moli",
      definition: "die, kill, dead, dying",
      source_language: "French",
      source_word: "mourir",
      source_definition: "die",
      list: "pu",
    },
  },
  {
    jaobon: ROOTS.get("mun")!,
    toki_pona: {
      root: "mun",
      definition: "moon, night sky object, star",
      source_language: "English",
      source_word: "moon",
      source_definition: "",
      list: "pu",
    },
  },
  {
    jaobon: ROOTS.get("pan")!,
    toki_pona: {
      root: "pan",
      definition: "cereal, grain, bread, pasta",
      source_language: "Romance",
      source_word: "pan",
      source_definition: "bread",
      list: "pu",
    },
  },
  {
    jaobon: ROOTS.get("cen")!,
    toki_pona: {
      root: "sinpin",
      definition: "face, foremost, front, wall",
      source_language: "Cantonese",
      source_word: "前邊",
      source_transliteration: "cin4 bin1",
      source_definition: "in front, ahead",
      list: "pu",
    },
    note: <p>
      This is a partial cognate, in the sense that <i>cen</i> is cognate to the <i>sin</i> of <i>sinpin</i>.
    </p>,
  },
  {
    jaobon: ROOTS.get("son")!,
    toki_pona: {
      root: "suno",
      definition: "sun, light, brightness, glow, radiance, shine, light source",
      source_language: "Esperanto",
      source_word: "suno",
      source_definition: "sun",
      list: "pu",
    },
    note: <p>
      Esperanto <i>suno</i> is from English <i>sun</i>.
    </p>,
  },
  {
    jaobon: ROOTS.get("wa")!,
    toki_pona: {
      root: "telo",
      definition: "water, liquid, fluid, wet substance, beverage",
      source_language: "French",
      source_word: "de l'eau",
      source_definition: "(some) water",
      list: "pu",
    },
    note: <p>
      This is a very partial cognate and doubtless the most surprising pair: Jaobon <i>wa</i> is just cognate to
      the <i>o</i> in <i>telo</i>! Spanish <i>agua</i> and French <i>eau</i>, of course, are both inherited from
      Latin <i>aqua</i>.
    </p>,
  },
  {
    jaobon: ROOTS.get("dos")!,
    toki_pona: {
      root: "tu",
      definition: "two, pair",
      source_language: "English",
      source_word: "two",
      source_definition: "",
      list: "pu",
    },
    note: <p>
      The most recent common ancestor in this case is in Proto-Indo-European.
    </p>,
  },
  {
    jaobon: ROOTS.get("un")!,
    toki_pona: {
      root: "wan",
      definition: "one, unique, united",
      source_language: "English",
      source_word: "one",
      source_definition: "",
      list: "pu",
    },
    note: <p>
      The most recent common ancestor is again in Proto-Indo-European. Funny how Toki Pona took its numbers from
      English, while Jaobon hardly takes any numerals from English (only <i>nai</i> and <i>tao</i>).
    </p>,
  },

  {
    jaobon: ROOTS.get("mes")!,
    toki_pona: {
      root: "meso",
      definition: "middle, average, moderate, medium",
      source_language: "Greek",
      source_word: "μέσος",
      source_transliteration: "mésos",
      source_definition: "middle, average, intermediate",
      list: "ku",
    },
  },

  {
    jaobon: ROOTS.get("ki")!,
    toki_pona: {
      root: "ki",
      definition: "(relative pronoun)",
      source_language: "French",
      source_word: "qui",
      source_definition: "who, which, that",
      list: "nimisin",
    },
    note: <p>
      <i>ki</i> is obscure in Toki Pona, and generally avoided due to its grammatical implications,
      which clash with the minimalist philosophy of Toki Pona.
    </p>,
  },
]

type Props = {
}

type State = {
}

export default class TokiPonaCognates extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <h1>Toki Pona cognates</h1>

        <p>
          By virtue of their similarly eclectic lexeme sourcing strategies, Jaobon and Toki Pona actually share a
          number of cognates - I've identified {COGNATES.length} pairs, many of which happen to be extremely common words.
          I developed Jaobon before I learned any
          Toki Pona, so all of these cognates are purely coincidence and/or convergent evolution, rather than
          conscious or subconscious influence from Toki Pona on Jaobon. I've split the cognate pairs up by
          the "officialness" of the Toki Pona words.
        </p>

        {TOKI_PONA_LISTS.map(list => <div key={list}>
          <h2>{list}</h2>
          <hr/>

          {
            COGNATES
              .filter(c => c.toki_pona.list === list)
              .sort((a, b) => a.toki_pona.root.localeCompare(b.toki_pona.root))
              .map(cognate => (
                <div key={cognate.jaobon.syllable}>
                  <h3>{cognate.toki_pona.root} - {cognate.jaobon.syllable}</h3>
                  <p>
                    Toki Pona{' '}
                    <i>
                      <a href={`https://sona.pona.la/wiki/${cognate.toki_pona.root}`} target="_blank">
                        {cognate.toki_pona.root}
                      </a>
                    </i>
                    {' '}"{cognate.toki_pona.definition}"{' '}
                    from {cognate.toki_pona.source_language}{' '}
                    {cognate.toki_pona.source_transliteration === undefined ? (
                      <i>{cognate.toki_pona.source_word}</i>
                    ) : (
                      <span>{cognate.toki_pona.source_word} <i>{cognate.toki_pona.source_transliteration}</i></span>
                    )}{' '}
                    {cognate.toki_pona.source_language === "English" ? null : <span>"{cognate.toki_pona.source_definition}"</span>}
                    <br/>
                    is cognate to
                    <br/>
                    Jaobon <i>{cognate.jaobon.syllable}</i> "{cognate.jaobon.definition}" from{' '}
                    {cognate.jaobon.etymologies.map((e, i) => (
                      <span key={i}>
                        {i > 0 ? ", " : ""}{e.language}{' '}
                        {NON_LATIN_LANGUAGES.includes(e.language) ? e.word : <i>{e.word}</i>}
                      </span>
                    ))}
                  </p>
                  {cognate.note}
                </div>
              ))
          }
        </div>)}
      </>
    );
  }
}
