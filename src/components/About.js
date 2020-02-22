import React from "react";
import {
  Wrapper,
  StyledHero,
  ProfileImage,
  Section,
  DivContainer,
  Blockquote,
  Container1,
  Container2,
  Name,
  Title
} from "../styles/Container";
import profile from "../images/profile.jpg";

function About(props) {
  return (
    <div>
      <Wrapper>
        <StyledHero>
          <ProfileImage src={profile} />
        </StyledHero>
        <Container1>
          <Container2>
            <Name>Kay Srikaew</Name>
            <Title>Full Stack Developer</Title>
          </Container2>
        </Container1>

        <Section>About</Section>
        <DivContainer>
          <Blockquote>
            I am eager to be part of a dev team to develop software applications
            that truly serve people, increase productivity and efficiency
            leading to a better customer experience resulting in better company
            revenue performance.
          </Blockquote>
          <p>
            As an experienced business support coordinator for over 10 years and
            through the exploration of using various software applications, I am
            aware of the immense positive or negative impacts in business. I
            have always been curious and wanted to know how software operates
            behind an application system. So, I joined a few introductive web
            development courses and dived into teaching myself HTML, CSS and
            JavaScript. During this time, I earned a Prince 2 Agile practitioner
            accreditation. Eventually, I decided to take the leap, took a
            Software Engineer Immersive course at General Assembly, and set
            myself up for a new journey.
          </p>
        </DivContainer>
      </Wrapper>
    </div>
  );
}

export default About;
