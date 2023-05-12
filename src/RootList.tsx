import React, { Component } from "react";
import { ROOTS } from "./roots";
import {stringToSyllable, Syllable, syllableToDots, syllableToFalavay} from "./syllables";

type Props = {
}

type State = {
}

export default class RootList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (window.location.hash) {
      setTimeout(() => {
        window.location = window.location;
      }, 250);
    }
  }


  render() {
    return (
      <>
        <h1>{ROOTS.size} roots!</h1>
        {Array.from(ROOTS.entries()).map(([syllable, rootInfo], _) => (
            <div key={syllable} id={syllable}>
              <h2 className="root-entry-header">
                <a
                    href={`https://en.wiktionary.org/wiki/${rootInfo.CJK}`}
                    target="_blank"
                    className="cjk"
                >
                  {rootInfo.CJK}
                </a>
                {' '}{syllable}
                {' '}
                <span className={"dots"}>
                  {syllableToDots(stringToSyllable(syllable) as Syllable)}
                </span>
              </h2>
              <p>{rootInfo.definition}</p>
              <p>From</p>
              <ul>
                {rootInfo.etymologies.map((e, i) => (
                    <li key={i}>
                      <a
                          href={`https://en.wiktionary.org/wiki/${e.word}#${e.language}`}
                          target="_blank"
                      >
                        {e.language} {e.word}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
        ))}
      </>
    );
  }
}
