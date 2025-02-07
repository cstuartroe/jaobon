import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../static/scss/main.scss";

import {getStartingDisplaySettings, DisplaySettings, DisplaySettingsWidget} from "./DisplaySettings";
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

type AppState = {
    displaySettings: DisplaySettings,
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            displaySettings: getStartingDisplaySettings(),
        }
    }

  render() {
      return (
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
                                      <Route index element={<Syntax displaySettings={this.state.displaySettings}/>}/>
                                  </Route>
                                  <Route path={"/verify"}>
                                      <Route index element={<Verifier/>}/>
                                  </Route>
                                  <Route path={"/dictionary"}>
                                      <Route index element={<Dictionary displaySettings={this.state.displaySettings}/>}/>
                                  </Route>
                                  <Route path={"/texts"}>
                                      <Route index element={<TextList displaySettings={this.state.displaySettings}/>}/>
                                  </Route>
                                  <Route path={"/texts/:textId"}>
                                      <Route index element={<TextReader displaySettings={this.state.displaySettings}/>}/>
                                  </Route>
                                  <Route path={"/daily_words"}>
                                      <Route index element={<DailyWords displaySettings={this.state.displaySettings}/>}/>
                                  </Route>
                                  <Route path={"/musings"}>
                                      <Route index element={<Musings/>}/>
                                  </Route>
                                  <Route path={"/musings/basic_semantic_sets"}>
                                      <Route index element={<BasicSemanticSets displaySettings={this.state.displaySettings}/>}/>
                                  </Route>
                                  <Route path={"/musings/toki_pona_cognates"}>
                                      <Route index element={<TokiPonaCognates/>}/>
                                  </Route>
                              </Route>
                          </Routes>
                          <div style={{height: "10vh"}}/>
                      </div>

                      <DisplaySettingsWidget
                          displaySettings={this.state.displaySettings}
                          setDisplaySettings={(d: DisplaySettings) => this.setState({displaySettings: d})}
                      />
                  </div>
              </div>
          </Router>
      );
  }
}

export default App;
