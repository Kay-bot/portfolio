import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import Menu from "./Menu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Link to="/portfolio/">
            <Brand />
          </Link>
          <NavLinks style={linkAnimation}>
            <Link to="/portfolio/">Home</Link>
            <Link to="/portfolio/project">Projects</Link>
            <Link to="/portfolio/skills">Skills</Link>

            {/* <Link to="/portfolio/experience">Experience</Link> */}
          </NavLinks>
          <Wrapper>
            <Menu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </Wrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  /* position: fixed; */
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: teal;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
