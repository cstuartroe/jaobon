import React, { Component } from "react";
import { ROOTS } from "./roots";
import {stringToSyllable, Syllable, syllableToFont} from "./syllables";

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


  render() {
    return (
      <div>
        <h1>{ROOTS.size} roots!</h1>
        {Array.from(ROOTS.entries()).map(([syllable, rootInfo], _) => (
            <div>
              <h2>
                <a
                    href={`https://en.wiktionary.org/wiki/${rootInfo.CJK}`}
                    target="_blank"
                >
                  {rootInfo.CJK}
                </a>
                {' '}{syllable}
                {' '}
                <span className={"lauvinko"}>
                  {syllableToFont(stringToSyllable(syllable) as Syllable)}
                </span>
              </h2>
              <p>{rootInfo.definition}</p>
              <p>From
                <ul>
                  {rootInfo.etymologies.map(e => (
                      <li>
                        <a
                            href={`https://en.wiktionary.org/wiki/${e.word}#${e.language}`}
                            target="_blank"
                        >
                          {e.language} {e.word}
                        </a>
                      </li>
                  ))}
                </ul>
              </p>
            </div>
        ))}
      </div>
    );
  }
}
