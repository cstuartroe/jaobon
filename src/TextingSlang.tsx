import React, { Component } from "react";
import {ROOTS} from "./roots";
import {DisplaySettings} from "./DisplaySettings";
import {AnnotatedCharacter, TranslatedLine} from "./AnnotatedText";
import collections from "./texts/collections";

type Props = {
  displaySettings: DisplaySettings;
}

type State = {
}

export default class TextingSlang extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
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
                <AnnotatedCharacter root={root} displaySettings={this.props.displaySettings}/>
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

        {collections.find(c => c.slug === "lcc11")!.texts.find(t => t.slug === "prose_ring")!.lines.map(((line, i) => (
          <TranslatedLine
            key={i}
            jaobon={line.jaobon}
            translation={""}
            displaySettings={{...this.props.displaySettings, writingSystem: "texting"}}
          />
        )))}
      </>
    );
  }
}
