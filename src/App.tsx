import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { allSyllables } from "./syllables";
import { ROOTS, sourceCounts } from "./roots";

import "../static/scss/main.scss";

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
                                  <Route index element={<p>Hello, World!</p>}/>
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