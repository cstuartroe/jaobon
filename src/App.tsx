import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../static/scss/main.scss";

import Menu from "./Menu";
import Home from "./Home";
import Phonology from "./Phonology";
import RootList from "./RootList";
import Verifier from "./Verifier";
import Dictionary from "./Dictionary";
import Sourcing from "./Sourcing";
import Texts, { TextReader } from "./Texts";

class App extends Component {
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
                                  <Route path={"/sourcing"}>
                                      <Route index element={<Sourcing/>}/>
                                  </Route>
                                  <Route path={"/roots"}>
                                      <Route index element={<RootList/>}/>
                                  </Route>
                                  <Route path={"/verify"}>
                                      <Route index element={<Verifier/>}/>
                                  </Route>
                                  <Route path={"/dictionary"}>
                                      <Route index element={<Dictionary/>}/>
                                  </Route>
                                  <Route path={"/texts"}>
                                      <Route index element={<Texts/>}/>
                                  </Route>
                                  <Route path={"/texts/:textId"}>
                                      <Route index element={<TextReader/>}/>
                                  </Route>
                              </Route>
                          </Routes>
                          <div style={{height: "10vh"}}/>
                      </div>
                      <div className="col-0 col-md-2 col-lg-3"/>
                  </div>
              </div>
          </Router>
      );
  }
}

export default App;
