import React, { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
