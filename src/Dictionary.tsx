import React, { Component } from "react";

import _dictionary from "./dictionary.json"
import {TranslatedLine} from "./AnnotatedText";
import {DisplaySettings} from "./DisplaySettings";

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
  displaySettings: DisplaySettings,
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
                  <TranslatedLine key={i} jaobon={e.Jaobon} translation={e.English} displaySettings={this.props.displaySettings}/>
              ))}
            </div>
        ))}
      </>
    );
  }
}
