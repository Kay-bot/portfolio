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
            I aspire to develop software that truly serves people, increases
            productivity and efficiency and ultimately leads to a better
            customer experience.
          </Blockquote>
          <p>
            With years of experience as a business support coordinator and as a
            self-starter, I have always been curious and wanted to know how
            software operates behind an application system. So, I joined a few
            introductive web development courses and dived into teaching myself
            HTML, CSS and JavaScript. During this time, I earned a Prince 2
            Agile practitioner accreditation. Eventually, I decided to take the
            leap, took a Software Engineer Immersive course at General Assembly,
            and set myself up for a new journey.
          </p>
          <p>
            More about me, download{" "}
            <a href="https://drive.google.com/open?id=10tqU48u7g9mczZtN0V5KwsEkudUiZhhN">
              resume
            </a>
            .
          </p>
        </DivContainer>
      </Wrapper>
    </div>
  );
}

export default About;
