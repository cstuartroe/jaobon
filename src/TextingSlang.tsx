import React, {useContext} from "react";

import {ROOTS} from "./roots";
import {DisplaySettingsContext} from "./DisplaySettings";
import {AnnotatedCharacter, TranslatedLine} from "./AnnotatedText";
import collections from "./texts/collections";

export default function TextingSlang(props: {}) {
  const displaySettings = useContext(DisplaySettingsContext);

  return (
    <>
      <h1>Texting in Jaobon</h1>

      <p>
        Inspired by the use of <i>k</i> in Spanish as a slang shorthand for <i>que</i>, it occurred to me that
        single-consonant abbreviations could be used for a number of Jaobon roots. Here's the full set I've come
        up with:
      </p>

      <ul>
        {Array.from(ROOTS.values())
          .filter(root => root.singleConsonant !== undefined)
          .sort((r1, r2) => r1.singleConsonant!.localeCompare(r2.singleConsonant!))
          .map(root => (
            <li key={root.syllable}>
              {root.singleConsonant}:{' '}
              <AnnotatedCharacter root={root}/>
            </li>
          ))
        }
      </ul>

      <p>
        Like Spanish use of <i>k</i>, some of these single-letter abbreviations use letters which are not part of
        normal Jaobon orthography, namely <i>q</i>, <i>v</i>, and <i>z</i>.
      </p>

      <p>
        Here's what some text looks like using the abbreviations:
      </p>

      <DisplaySettingsContext.Provider value={{...displaySettings, writingSystem: "texting"}}>
        {collections.find(c => c.slug === "lcc11")!.texts.find(t => t.slug === "prose_ring")!.lines.map(((line, i) => (
          <TranslatedLine
            key={i}
            jaobon={line.jaobon}
            translation={""}
          />
        )))}
      </DisplaySettingsContext.Provider>
    </>
  );
}
