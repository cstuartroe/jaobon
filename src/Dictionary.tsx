import React, {useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleDown, faSearch} from "@fortawesome/free-solid-svg-icons";

import _dictionary from "./dictionary.json"
import {isError, multiscriptText, TranslatedLine} from "./AnnotatedText";
import {DisplaySettingsContext} from "./DisplaySettings";
import {Document, h1, h2, p, i} from "./formatting";

type DictionaryEntry = {
  English: string,
  Jaobon: string,
}

type DictionarySection = {
  title: string,
  entries: DictionaryEntry[],
}

const dictionarySections = _dictionary as DictionarySection[];

export const DictionaryDocument: Document = [
  h1("Dictionary"),
];

dictionarySections.forEach(section => {
  DictionaryDocument.push(h2(section.title));

  section.entries.forEach(entry => {
    const mt = multiscriptText(entry.Jaobon);
    if (isError(mt)) {
      throw new Error(mt.message)
    }

    DictionaryDocument.push(
      p(mt.CJK, " ", i(mt.roman), " \"", entry.English, "\""),
    );
  })
})

const getSearchTerm = () => (new URLSearchParams(window.location.search)).get("q") || "";

export default function Dictionary(props: {}) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState(getSearchTerm);


  function searchBar() {
    return (
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2" style={{position: "relative"}}>
          <input
            type="text"
            value={getSearchTerm()}
            onChange={(e) => {
              const url = new URL(window.location.href);
              if (e.target.value == "") {
                url.searchParams.delete("q");
              } else {
                url.searchParams.set("q", e.target.value);
              }
              window.history.replaceState({}, "", url.toString());
              setSearchTerm(e.target.value);
            }}
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

  function body() {
    if (searchTerm.length > 0) {
      return dictionarySections.map(section => {
        const matchingEntries: DictionaryEntry[] = [];
        section.entries.forEach((entry) => {
          if (entry.Jaobon.toLowerCase().includes(searchTerm.toLowerCase())) {
            matchingEntries.push(entry);
          } else if (entry.English.toLowerCase().includes(searchTerm.toLowerCase())) {
            matchingEntries.push(entry);
          }
        })

        if (matchingEntries.length == 0) {
          return null;
        }

        return <div key={section.title}>
          <h2>{section.title}</h2>
          {matchingEntries.map((entry, i) => (
            <TranslatedLine key={i} jaobon={entry.Jaobon} translation={entry.English}/>
          ))}
        </div>
      });
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
              let newOpenSections: string[];
              if (openSections.includes(s.title)) {
                newOpenSections = openSections.filter(t => t !== s.title);
              } else {
                newOpenSections = openSections.concat([s.title]);
              }
              setOpenSections(newOpenSections);
            }}
          >
                  {openSections.includes(s.title) ? (
                    <FontAwesomeIcon icon={faAngleDown}/>
                  ) : (
                    <FontAwesomeIcon icon={faAngleRight}/>
                  )}
                </span>
        </h2>

        {openSections.includes(s.title) && s.entries.map((e, i) => (
          <TranslatedLine key={i} jaobon={e.Jaobon} translation={e.English}/>
        ))}
      </div>
    ))
  }

  const num_entries = (
    dictionarySections
      .map(s => s.entries.length)
      .reduce((m, n) => m + n, 0)
  );

  const displaySettings = useContext(DisplaySettingsContext);

  return (
    <DisplaySettingsContext.Provider value={{...displaySettings, showTranslation: "show"}}>
      <h1>{num_entries} dictionary entries!</h1>
      {searchBar()}
      {body()}
    </DisplaySettingsContext.Provider>
  );
}
