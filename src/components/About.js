import React from "react";
import {
  Wrapper,
  StyledHero,
  ProfileImage,
  Section,
  DivContainer,
  Blockquote
} from "../styles/Container";
import profile from "../images/profile.jpg";

function About(props) {
  return (
    <div>
      <Wrapper>
        <StyledHero>
          <ProfileImage src={profile} />
        </StyledHero>
        <Section>About</Section>
        <DivContainer>
          <Blockquote>
            Seeking an opportunity as a Junior Full-Stack Software Engineer for
            a company who will continuously motivate and drive me to do my best
            and improve on my skills and abilities to be able to assist the
            company in achieving its company mission and goals.
          </Blockquote>
          <p>
            For more than 10 years, I pursued a career as a business support
            coordinator for BAU and project setting. I have always been curious
            and want to know how things work behind an application system. So, I
            joined a few introduction web development courses and went about
            teaching myself HTML, CSS and JavaScript. During this time, I also
            earned Prince 2 Agile practitioner accreditation. Eventually, I
            decided to take the leap, took a Software Engineer Immersive course
            at General Assembly and set myself up for a new journey.
          </p>
          <p>
            As an end-user using multiple software systems for business and
            project management, I know these tools can have much positive or
            negative impact on the businesses. Technology should make someone
            life easier, not harder. I want to make a different and to be part
            of a dev team to develop software system applications that truly
            serve people, increase productivities, improve the quality of life,
            and help businesses save money.{" "}
          </p>
        </DivContainer>
      </Wrapper>
    </div>
  );
}

export default About;
