import React from "react";
import { Wrapper, Section, DivContainer } from "../styles/Container";

function Education(props) {
  return (
    <Wrapper>
      <Section>Education</Section>
      <DivContainer>
        <div>
          <p>
            <b>General Assembly Sydney</b> Software Engineer Immersive
          </p>
        </div>
        <div>
          <p>
            <b>Curtin University Western Australia</b> Master of Margeting
          </p>
        </div>
      </DivContainer>
    </Wrapper>
  );
}

export default Education;
