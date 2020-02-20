import React from "react";
import { Wrapper, Section, DivContainer } from "../styles/Container";

function Education(props) {
  return (
    <Wrapper>
      <Section>Education</Section>
      <DivContainer>
        <div>
          <p>
            <a href="https://generalassemb.ly/locations/sydney">
              <b>General Assembly Sydney</b>
            </a>{" "}
            &nbsp; Software Engineer Immersive
          </p>
        </div>
        <div>
          <p>
            <a href="https://www.curtin.edu.au/">
              <b>Curtin University Perth</b>
            </a>{" "}
            &nbsp; Master of Marketing
          </p>
        </div>
      </DivContainer>
    </Wrapper>
  );
}

export default Education;
