import React, { Component } from "react";

import _dictionary from "./dictionary.json"
import AnnotatedText from "./AnnotatedText";

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
        <h1>Dictionary</h1>
        {dictionarySections.map(s => (
            <div key={s.title}>
              <div style={{height: "5vh"}}/>

              <h2>{s.title}</h2>

              {s.entries.map((e, i) => (
                  <div className="dict-entry" key={i}>
                    <AnnotatedText sentence={e.Jaobon}/>

                    <p style={{marginBottom: 0}}>"{e.English}"</p>
                  </div>
              ))}
            </div>
        ))}
      </>
    );
  }
}
