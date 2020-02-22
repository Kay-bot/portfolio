import React from "react";
import { Wrapper, Section, DivContainer } from "../styles/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact(props) {
  return (
    <Wrapper>
      <Section>Contact</Section>
      <DivContainer>
        <p>
          <FontAwesomeIcon icon={faEnvelopeSquare} /> &nbsp;
          <a aria-label="Email Kay" href="mailto:kay.srikaew@icloud.com">
            kay.srikaew@icloud.com
          </a>
        </p>
        <p>
          <FaGithubSquare /> &nbsp;
          <a href="https://github.com/Kay-bot">github.com/Kay-bot</a>
        </p>
        <p>
          <FaLinkedinIn /> &nbsp;
          <a href="https://www.linkedin.com/in/kay-srikaew">
            inkedin.com/in/kay-srikaew
          </a>
        </p>
      </DivContainer>
    </Wrapper>
  );
}

export default Contact;
