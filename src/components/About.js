import React from "react";
import { Wrapper, StyledHero, ProfileImage } from "../styles/Container";
import profile from "../images/profile.jpg";

function About(props) {
  return (
    <Wrapper>
      <StyledHero>
        <ProfileImage src={profile} />
      </StyledHero>
    </Wrapper>
  );
}

export default About;
