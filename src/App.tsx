import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../static/scss/main.scss";

import Menu from "./Menu";
import Home from "./Home";
import RootList from "./RootList";
import Verifier from "./Verifier";

class App extends Component {
  render() {
      return (
          <Router>
              <div id="main-container" className="container-fluid">
                  <div className="row" style={{minHeight: '100vh'}}>
                      <Menu/>
                      <div className="col-0 col-md-1"/>
                      <div className="col-12 col-md-6">
                          <div style={{height: '2vh'}}/>
                          <Routes>
                              <Route path="/">
                                  <Route index element={<Home/>}/>
                                  <Route path={"/roots"}>
                                      <Route index element={<RootList/>}/>
                                  </Route>
                                  <Route path={"/verify"}>
                                      <Route index element={<Verifier/>}/>
                                  </Route>
                              </Route>
                          </Routes>
                      </div>
                  </div>
              </div>
          </Router>
      );
  }
}

export default App;
