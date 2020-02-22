import React from "react";
import {
  Wrapper,
  Section,
  Container3,
  ProjectContainer,
  ProjectCard,
  ProjectImage,
  ProjectDetailsContainer,
  ProjectDetails
} from "../styles/Container";
import TodoList from "../images/TodoList.png";
import EuropeCars from "../images/EuropeCars.png";
import BurgerRecipe from "../images/BurgerRecipe.png";
import BookingApp from "../images/BookingApp.png";
import Portfolio from "../images/Portfolio.jpg";
import RockPaperScissors from "../images/RockPaperScissors.png";

function Projects(props) {
  return (
    <Wrapper>
      <Section>Projects</Section>
      <Container3>
        <ProjectContainer>
          <ProjectCard>
            <ProjectImage src={Portfolio} alt="Portfolio" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>Portfolio</b>
              </ProjectDetails>
              <ProjectDetails>Static site build on React JS.</ProjectDetails>
              <ProjectDetails>
                Used Styled-Components for styling.
              </ProjectDetails>
              <ProjectDetails>App published on Github.</ProjectDetails>
              <ProjectDetails>
                <a href="https://kay-bot.github.io/portfolio/">View online</a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/Kay-bot/portfolio">View Source</a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={BurgerRecipe} alt="BurgerRecipe" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>BurgerRecipe App</b>
              </ProjectDetails>
              <ProjectDetails>Front-end: React</ProjectDetails>
              <ProjectDetails>Backend: Rails</ProjectDetails>
              <ProjectDetails>Database:PostgresQL</ProjectDetails>
              <ProjectDetails>Deployed runtime on Heroku</ProjectDetails>
              <ProjectDetails>
                <a href="https://burger-recipe.herokuapp.com/">View online</a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/project-two/burgerRecipe">
                  View Source
                </a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={EuropeCars} alt="EuropeCars" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>EuropeCars App</b>
              </ProjectDetails>
              <ProjectDetails>
                Front-end and back-end built on Ruby on Rails framework.{" "}
              </ProjectDetails>
              <ProjectDetails>Database: PostgresQL</ProjectDetails>
              <ProjectDetails>Deployed runtime on Heroku.</ProjectDetails>
              <ProjectDetails>
                <a href="https://europecars.herokuapp.com/">View online</a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/Kay-bot/europe_cars">View Source</a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThDlkfXtUdu_ua38o1IJ2P4anlgfbF3KLKdzccQvUTKUIVQM2m"
              alt="Movie List"
            />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>Movies Rating App</b>
              </ProjectDetails>
              <ProjectDetails>Front-end: React</ProjectDetails>
              <ProjectDetails>Backend: Express</ProjectDetails>
              <ProjectDetails>Deployed runtime on Heroku</ProjectDetails>
              <ProjectDetails>
                <a href="https://quiet-eyrie-00674.herokuapp.com/">
                  View online
                </a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/Kay-bot/express-pagination">
                  View Source
                </a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={TodoList} alt="Todo App" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>Todo App</b>
              </ProjectDetails>
              <ProjectDetails>
                Used Vanila JavaScript to build the app and local storage to
                store database.
              </ProjectDetails>
              <ProjectDetails>App published on Github</ProjectDetails>

              <ProjectDetails>
                <a href="https://kay-bot.github.io/Project0_todos-app/">
                  View online
                </a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/Kay-bot/Project0_todos-app">
                  View Source
                </a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              src={RockPaperScissors}
              alt="Rock Paper Scissors Game"
            />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>Rock Paper Scissors Games</b>
              </ProjectDetails>
              <ProjectDetails>Used Vanila JavaScript to build</ProjectDetails>

              <ProjectDetails>Published on Github</ProjectDetails>
              <ProjectDetails>
                <a href="https://kay-bot.github.io/Rock-Paper-Scissors-Game/">
                  View online
                </a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/Kay-bot/Rock-Paper-Scissors-Game">
                  View Source
                </a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={BookingApp} alt="BookingApp" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>Booking App</b>
              </ProjectDetails>
              <ProjectDetails>Front-end: React</ProjectDetails>
              <ProjectDetails>Backend: Rails</ProjectDetails>
              <ProjectDetails>Database:PostgresQL</ProjectDetails>
              <ProjectDetails>Deployed runtime on Heroku</ProjectDetails>
              <ProjectDetails>
                <a href="https://booking-app-final-project.herokuapp.com/">
                  View online
                </a>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <a href="https://github.com/Kay-bot/booking-app-final-project">
                  View Source
                </a>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
        </ProjectContainer>
      </Container3>
    </Wrapper>
  );
}

export default Projects;
