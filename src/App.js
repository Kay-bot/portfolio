import React from "react";
import logo from "./logo.svg";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from ".component/Projects.js";
import Resume from ".component/Resume.js";
import About from ".component/About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/resume" className="item">
              Resume
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
