import React from "react";
import {
  Wrapper,
  Section,
  CardContainer,
  FlexContainer,
  Card,
  Container3,
  Image,
  Label
} from "../styles/Container";

import ReactLogo from "../images/ReactLogo.png";
import JavascriptIcon from "../images/JavascriptIcon.png";
import Bootstrap from "../images/Bootstrap.png";
import CSS3 from "../images/CSS3.png";
import HTML from "../images/HTML.png";
import Rails from "../images/Rails.png";
import Ruby from "../images/Ruby.jpeg";
import StyledComponents from "../images/StyledComponents.png";
import ExpressNodeJS from "../images/ExpressNodeJS.png";
import MongoDB from "../images/MongoDB.png";
import MySQL from "../images/MySQL.png";
import PostgreSQL from "../images/PostgreSQL.png";
import SQlite3 from "../images/SQlite3.png";
import Yarn from "../images/Yarn.png";
import NPM from "../images/NPM.png";
import Homebrew from "../images/Homebrew.png";
import Bash from "../images/Bash.png";
import Heroku from "../images/Heroku.png";
import Bluehost from "../images/Bluehost.png";
import GoDaddy from "../images/GoDaddy.png";
import Git from "../images/Git.png";
import VSC from "../images/VSC.png";
import VIM from "../images/VIM.png";
import WordPress from "../images/WordPress.jpeg";
import Joomla from "../images/Joomla.png";
import Dropal from "../images/Dropal.png";

function Skills(props) {
  return (
    <Wrapper>
      <Section>Skills</Section>
      <Container3>
        <CardContainer>
          <h1>Front-End</h1>
          <hr></hr>
          <FlexContainer>
            <Card>
              <Image src={ReactLogo} alt="React Logo" /> <br />
              <Label>React</Label>
            </Card>
            <Card>
              <Image src={JavascriptIcon} alt="Javascript Logo" /> <br />
              <Label>Javascript</Label>
            </Card>
            <Card>
              <Image src={Ruby} alt="Ruby Logo" />
              <Label>Ruby</Label>
            </Card>
            <Card>
              <Image src={Rails} alt="Rails Logo" />
              <Label>Rails</Label>
            </Card>
            <Card>
              <Image src={HTML} alt="HTML Logo" />
              <Label> HTML</Label>
            </Card>
            <Card>
              <Image src={StyledComponents} alt="StyledComponents Logo" />
              <Label>Styled-Components</Label>
            </Card>
            <Card>
              <Image src={CSS3} alt="CSS3 Logo" /> <br />
              <Label>CSS3</Label>
            </Card>
            <Card>
              <Image src={Bootstrap} alt="Bootstrap Logo" /> <br />
              <Label>Bootstrap</Label>
            </Card>
          </FlexContainer>
        </CardContainer>
      </Container3>
      <Container3>
        <CardContainer>
          <h1>Back-End</h1>
          <hr></hr>
          <FlexContainer>
            <Card>
              <Image src={ExpressNodeJS} alt="Express-Node.js Logo" />
              <Label>Express-Node.js</Label>
            </Card>
            <Card>
              <Image src={Ruby} alt="Ruby Logo" />
              <Label>Ruby</Label>
            </Card>
            <Card>
              <Image src={Rails} alt="Rails Logo" />
              <Label>Rails</Label>
            </Card>
            <Card>
              <Image src={MySQL} alt="MySQL Logo" />
              <Label>MySQL</Label>
            </Card>
            <Card>
              <Image src={PostgreSQL} alt="PostgreSQL Logo" />
              <Label>PostgreSQL</Label>
            </Card>
            <Card>
              <Image src={SQlite3} alt="SQlite3 Logo" />
              <Label>SQlite3</Label>
            </Card>
            <Card>
              <Image src={MongoDB} alt="MongoDBLogo" />
              <Label>MongoDB</Label>
            </Card>
          </FlexContainer>
        </CardContainer>
      </Container3>
      <Container3>
        <CardContainer>
          <h1>CMS & Cloud Platform</h1>
          <hr></hr>
          <FlexContainer>
            <Card>
              <Image src={WordPress} alt="WordPress logo" />
              <Label>WordPress</Label>
            </Card>
            <Card>
              <Image src={Joomla} alt="Joomla logo" />
              <Label>Joomla</Label>
            </Card>
            <Card>
              <Image src={Dropal} alt="Dropal logo" />
              <Label> Drupal</Label>
            </Card>
            <Card>
              <Image src={Heroku} alt="Heroku logo" />
              <Label>Heroku</Label>
            </Card>
            <Card>
              <Image src={Bluehost} alt="Bluehost logo" />
              <Label>Bluehost</Label>
            </Card>
            <Card>
              <Image src={GoDaddy} alt="GoDaddy logo" />
              <Label>GoDaddy</Label>
            </Card>
          </FlexContainer>
        </CardContainer>
      </Container3>
      <Container3>
        <CardContainer>
          <h1>Others</h1>
          <hr></hr>
          <FlexContainer>
            <Card>
              <Image src={Git} alt="Git logo" />
              <Label>Git Version Control System</Label>
            </Card>
            <Card>
              <Image src={Yarn} alt="Yarn logo" />
              <Label>Yarn Package Manager</Label>
            </Card>
            <Card>
              <Image src={NPM} alt="NPM logo" />
              <Label>NPM Package Manager</Label>
            </Card>
            <Card>
              <Image src={Homebrew} alt="Homebrew logo" />
              <Label>Homebrew Package Manager</Label>
            </Card>
            <Card>
              <Image src={VSC} alt="Visual Studio Code logo" />
              <Label>Visual Studio Code Code Editor</Label>
            </Card>
            <Card>
              <Image src={VIM} alt="VIM Text Editor logo" />
              <Label>VIM Text Editor</Label>
            </Card>
            <Card>
              <Image src={Bash} alt="Unix/Bash logo" />
              <Label>Unix/Bash Command Language</Label>
            </Card>
          </FlexContainer>
        </CardContainer>
      </Container3>
    </Wrapper>
  );
}

export default Skills;
