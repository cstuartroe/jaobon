import React, { Component } from "react";

import _dictionary from "./dictionary.json"
import {TranslatedLine} from "./AnnotatedText";
import {DisplaySettings} from "./DisplaySettings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleDown} from "@fortawesome/free-solid-svg-icons";

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
  open_sections: string[],
}

export default class Dictionary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open_sections: [],
    };
  }


  render() {
    const num_entries = (
        dictionarySections
        .map(s => s.entries.length)
        .reduce((m, n) => m + n, 0)
    );
    const { open_sections } = this.state;

    return (
      <>
        <h1>{num_entries} dictionary entries!</h1>
        {dictionarySections.map(s => (
            <div key={s.title}>
              <div style={{height: "5vh"}}/>

              <h2>
                {s.title} ({s.entries.length} entries){' '}
                <span
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      let open_sections: string[];
                      if (this.state.open_sections.includes(s.title)) {
                        open_sections = this.state.open_sections.filter(t => t !== s.title);
                      } else {
                        open_sections = this.state.open_sections.concat([s.title]);
                      }
                      this.setState({open_sections});
                    }}
                >
                  {open_sections.includes(s.title) ? (
                      <FontAwesomeIcon icon={faAngleDown}/>
                  ) : (
                      <FontAwesomeIcon icon={faAngleRight}/>
                  )}
                </span>
              </h2>

              {open_sections.includes(s.title) && s.entries.map((e, i) => (
                  <TranslatedLine key={i} jaobon={e.Jaobon} translation={e.English} displaySettings={this.props.displaySettings}/>
              ))}
            </div>
        ))}
      </>
    );
  }
}
