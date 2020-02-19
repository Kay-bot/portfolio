import React from "react";
import { Wrapper } from "../styles/Container";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./Resume";

function Home(props) {
  return (
    <Wrapper>
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Resume />
      <Contact />
    </Wrapper>
  );
}

export default Home;
