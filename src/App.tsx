import React, {Component, useContext, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../static/scss/main.scss";

import {
    getStartingDisplaySettings,
    DisplaySettingsWidget,
    DisplaySettingsContext
} from "./DisplaySettings";
import Menu from "./Menu";
import Home from "./Home";
import Phonology from "./Phonology";
import RootList from "./RootList";
import Verifier from "./Verifier";
import Dictionary from "./Dictionary";
import Sourcing from "./Sourcing";
import TextReader, {TextList} from "./TextReader";
import WritingSystems from "./WritingSystems";
import Syntax from "./Syntax";
import DailyWords from "./DailyWords";
import Musings from "./Musings";
import BasicSemanticSets from "./BasicSemanticSets";
import TokiPonaCognates from "./TokiPonaCognates";
import TextingSlang from "./TextingSlang";
import History from "./History";
import Transliterate from "./Transliterate";
import Zipf from "./Zipf";
import Elements from "./Elements";
import IthacaPixels from "./IthacaPixels";

function App(props: {}) {
    const [displaySettings, setDisplaySettings] = useState(getStartingDisplaySettings);

      return (
        <DisplaySettingsContext.Provider value={displaySettings}>
          <Router>
              <div id="main-container" className="container-fluid">
                  <div className="row main-row">
                      <Menu/>
                      <div className="col-0 col-md-1"/>
                      <div className="col-12 col-md-6">
                          <div style={{height: '2vh'}}/>
                          <Routes>
                              <Route path="/">
                                  <Route index element={<Home/>}/>
                                  <Route path={"/phonology"}>
                                      <Route index element={<Phonology/>}/>
                                  </Route>
                                  <Route path={"/scripts"}>
                                      <Route index element={<WritingSystems/>}/>
                                  </Route>
                                  <Route path={"/sourcing"}>
                                      <Route index element={<Sourcing/>}/>
                                  </Route>
                                  <Route path={"/roots"}>
                                      <Route index element={<RootList/>}/>
                                  </Route>
                                  <Route path={"/syntax"}>
                                      <Route index element={<Syntax/>}/>
                                  </Route>
                                  <Route path={"/verify"}>
                                      <Route index element={<Verifier/>}/>
                                  </Route>
                                  <Route path={"/dictionary"}>
                                      <Route index element={<Dictionary/>}/>
                                  </Route>
                                  <Route path={"/texts"}>
                                      <Route index element={<TextList/>}/>
                                  </Route>
                                  <Route path={"/texts/:collectionId/:textId"}>
                                      <Route index element={<TextReader/>}/>
                                  </Route>
                                  <Route path={"/daily_words"}>
                                      <Route index element={<DailyWords/>}/>
                                  </Route>
                                  <Route path={"/history"}>
                                      <Route index element={<History/>}/>
                                  </Route>
                                  <Route path={"/musings"}>
                                      <Route index element={<Musings/>}/>
                                  </Route>
                                  <Route path={"/musings/basic_semantic_sets"}>
                                      <Route index element={<BasicSemanticSets/>}/>
                                  </Route>
                                  <Route path={"/musings/toki_pona_cognates"}>
                                      <Route index element={<TokiPonaCognates/>}/>
                                  </Route>
                                  <Route path={"/musings/texting_slang"}>
                                      <Route index element={<TextingSlang/>}/>
                                  </Route>
                                  <Route path={"/musings/zipf"}>
                                      <Route index element={<Zipf/>}/>
                                  </Route>
                                  <Route path={"/musings/elements"}>
                                      <Route index element={<Elements/>}/>
                                  </Route>
                                  <Route path={"/transliterate"}>
                                      <Route index element={<Transliterate/>}/>
                                  </Route>
                                  <Route path={"/ithaca"}>
                                      <Route index element={<IthacaPixels/>}/>
                                  </Route>
                              </Route>
                          </Routes>
                          <div style={{height: "10vh"}}/>
                      </div>

                      <DisplaySettingsWidget setDisplaySettings={setDisplaySettings}/>
                  </div>
              </div>
          </Router>
        </DisplaySettingsContext.Provider>
      );
}

export default App;
