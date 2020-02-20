import React from "react";
import { Link } from "react-router-dom";
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
import Portfolio from "../images/Portfolio.png";

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
              <ProjectDetails>
                Static site build on React JS and Styled-Components for styling.
                App deployed on Github.
              </ProjectDetails>
              <ProjectDetails>
                <Link to="https://kay-bot.github.io/portfolio/">
                  View online
                </Link>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <Link href="https://github.com/Kay-bot/portfolio">
                  View Source
                </Link>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={BurgerRecipe} alt="BurgerRecipe" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>BurgerRecipe App</b>
              </ProjectDetails>
              <ProjectDetails>
                Built on React as front end and Rails as backend. Deployed
                runtime on Heroku.
              </ProjectDetails>
              <ProjectDetails>
                <Link href="https://burger-recipe.herokuapp.com/">
                  View online
                </Link>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <Link href="https://github.com/project-two/burgerRecipe">
                  View Source
                </Link>
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
                Front-end and back-end built on Ruby on Rails frameworks.
                Deployed runtime on Heroku.
              </ProjectDetails>
              <ProjectDetails>
                <Link to="https://europecars.herokuapp.com/">View online</Link>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <Link to="https://github.com/Kay-bot/europe_cars">
                  View Source
                </Link>
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
              <ProjectDetails>
                Built on React as front end and Express as backend. Deployed
                runtime on Heroku
              </ProjectDetails>
              <ProjectDetails>
                <Link to="https://quiet-eyrie-00674.herokuapp.com/">
                  View online
                </Link>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <Link to="https://github.com/Kay-bot/express-pagination">
                  View Source
                </Link>
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
                store data. Deployed on Github
              </ProjectDetails>
              <ProjectDetails>
                <Link to="https://kay-bot.github.io/Project0_todos-app/">
                  View online
                </Link>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <Link to="https://github.com/Kay-bot/Project0_todos-app">
                  View Source
                </Link>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src={BookingApp} alt="BookingApp" />
            <ProjectDetailsContainer>
              <ProjectDetails>
                <b>Booking App</b>
              </ProjectDetails>
              Built on React as front end and Rails as backend. Deployed runtime
              on Heroku.
              <ProjectDetails>
                <Link to="https://booking-app-final-project.herokuapp.com/">
                  View online
                </Link>
              </ProjectDetails>
              <ProjectDetails>
                {" "}
                <Link to="https://github.com/Kay-bot/booking-app-final-project">
                  View Source
                </Link>
              </ProjectDetails>
            </ProjectDetailsContainer>
          </ProjectCard>
        </ProjectContainer>
      </Container3>
    </Wrapper>
  );
}

export default Projects;
