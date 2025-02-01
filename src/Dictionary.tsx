import React, { Component } from "react";

import _dictionary from "./dictionary.json"
import {TranslatedLine} from "./AnnotatedText";
import {DisplaySettings} from "./DisplaySettings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleDown, faSearch} from "@fortawesome/free-solid-svg-icons";

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
  search_term: string,
}

export default class Dictionary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open_sections: [],
      search_term: "",
    };
  }

  searchBar() {
    return (
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2" style={{position: "relative"}}>
            <input
                type="text"
                value={this.state.search_term}
                onChange={(e) => this.setState({search_term: e.target.value})}
                style={{
                  width: "100%",
                }}
            />
            <div style={{position: "absolute", right: "20px", top: "7px", color: "#999999"}}>
              <FontAwesomeIcon icon={faSearch}/>
            </div>
          </div>
        </div>
    );
  }

  body() {
    const {open_sections, search_term} = this.state;

    if (search_term.length > 0) {
      const matchingEntries: DictionaryEntry[] = [];
      dictionarySections.forEach(section => {
        section.entries.forEach((entry) => {
          if (entry.Jaobon.toLowerCase().includes(search_term.toLowerCase())) {
            matchingEntries.push(entry);
          } else if (entry.English.toLowerCase().includes(search_term.toLowerCase())) {
            matchingEntries.push(entry);
          }
        })
      })

      return matchingEntries.map((entry, i) => (
          <TranslatedLine key={i} jaobon={entry.Jaobon} translation={entry.English} displaySettings={this.props.displaySettings}/>
      ));
    }

    return dictionarySections.map(s => (
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
    ))
  }

  render() {
    const num_entries = (
        dictionarySections
            .map(s => s.entries.length)
            .reduce((m, n) => m + n, 0)
    );

    return (
      <>
        <h1>{num_entries} dictionary entries!</h1>
        {this.searchBar()}
        {this.body()}
      </>
    );
  }
}
