import React, { Component } from "react";
import {PartOfSpeech, ROOTS} from "./roots";
import {stringToSyllable, Syllable, syllableToDots} from "./syllables";

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
    let roots = Array.from(ROOTS.entries());
    const pos = new URLSearchParams(document.location.search).get("pos");
    if (pos !== null) {
      roots = roots.filter(([key, root]) => (root.pos as string[]).includes(pos));
    }
    const lang = new URLSearchParams(document.location.search).get("lang");
    if (lang !== null) {
      roots = roots.filter(([key, root]) => (root.etymologies.map(p => p.language as string)).includes(lang));
    }

    return (
      <>
        <h1>{roots.length} {pos} root{roots.length > 1 ? "s" : ""}{lang ? ` from ${lang}` : ""}!</h1>
        {roots.map(([syllable, rootInfo], _) => (
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
              <p>{rootInfo.pos.join(', ')} - {rootInfo.definition}</p>
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
