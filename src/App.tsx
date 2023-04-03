import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../static/scss/main.scss";

class App extends Component {
  render() {
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
