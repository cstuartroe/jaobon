import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { allSyllables } from "./syllables";
import { ROOTS, sourceCounts } from "./roots";
import Verifier from "./Verifier";

import "../static/scss/main.scss";
import RootList from "./RootList";

class App extends Component {
  render() {
      console.log(allSyllables().length);
      let withEt = 0;
      for (const s of allSyllables()) {
          const root = ROOTS.get(s)
          if (root == undefined) {
              console.log(`Undefined: ${s}`);
          } else if (root.etymologies.length == 0) {
              console.log(`No etymology: ${s}`);
          } else {
              withEt++;
          }
      }
      console.log(`${withEt} roots with etymologies`)
      console.log(sourceCounts());

      return (
          <Router>
              <div id="main-container" className="container-fluid">
                  <div className="row">
                      <div className="col-12 col-md-2"/>
                      <div className="col-12 col-md-8">
                          <Routes>
                              <Route path="/">
                                  <Route index element={<p style={{fontSize: "200%"}}>
                                      {Array.from(ROOTS.values()).map(r => r.CJK).sort().join('')}
                                  </p>}/>
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
