import React, { Component } from "react";

import _dictionary from "./dictionary.json"

type DictionaryEntry = {
  English: string,
  Jaobon: string,
}

type DictionarySection = {
  title: string,
  entries: DictionaryEntry[],
}

const dictionarySections = _dictionary as DictionarySection[];

type Props = {
}

type State = {
}

export default class Dictionary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        {dictionarySections.map(s => (
            <div key={s.title}>
              <h2>{s.title}</h2>

              {s.entries.map((e, i) => (
                  <div className="dict-entry" key={i}>
                    {e.Jaobon}{' '}
                    "{e.English}"
                  </div>
              ))}
            </div>
        ))}
      </>
    );
  }
}
