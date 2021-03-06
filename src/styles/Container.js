import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 5px;
  margin: 20px;
`;

export const StyledHero = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  /* background-image: url("https://c4.wallpaperflare.com/wallpaper/271/397/298/anno-2205-4k-8k-wallpaper-preview.jpg");
  background-size: cover;
  background-color: rgba(0, 0, 0, 5); */
  @media only screen and (max-width: 768px) {
    min-height: 30vh;
  }

  @media only screen and (max-width: 600px) {
    min-height: 50%;
  }
`;

export const ProfileImage = styled.img`
  padding-top: 10px;
  height: 20%;
  width: 20%;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    height: 40%;
    width: 40%;
  }
  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 50%;
  }
`;

export const Name = styled.div`
  height: 33%;
  width: 100%;
  font-size: 38px;
  text-align: center;
  line-height: 20px;
  color: teal;
  @media only screen and (max-width: 600px) {
    line-height: 10px;
    font-size: 24px;
  }
`;

export const Title = styled.div`
  padding-top: 35px;
  height: 33%;
  width: 100%;
  font-size: 28px;
  text-align: center;
  line-height: 20px;
  color: brown;
  @media only screen and (max-width: 600px) {
    padding-top: 24px;
    line-height: 10px;
    font-size: 18px;
  }
`;

export const Section = styled.section`
  padding: 20px;
  background: teal;
  position: relative;
  display: block;
  color: whitesmoke;
  font-weight: 600;
  text-transform: uppercase;
`;

export const DivContainer = styled.div`
  position: relative;
  top: 10px;
  margin: 0;
  width: 100%;
  @media only screen and (min-width: 600px) {
    flow-text: {
      line-height: 2.88rem;
    }
  }
`;

export const Blockquote = styled.div`
  border-left: 5px solid #795548;
  border-left-width: 5px;
  border-left-style: solid;
  border-left-color: rgb(121, 85, 72);
  color: #795548;
  font-size: 125%;
  font-weight: 400;
  margin: 20px 0;
  padding-left: 1.5rem;
`;

export const Container1 = styled.div`
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    height: 4em;
    padding-bottom: 10px;
  }
`;

export const Container2 = styled.div`
  margin: 0;
`;

export const Container3 = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

export const CardContainer = styled.div`
  color: brown;
  margin: 15px;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: 120px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
`;

export const Label = styled.div`
  display: center;
  color: black;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 30%;
  margin: 1%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ccc;
`;

export const ProjectDetailsContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
  height: 150px;
`;

export const ProjectDetails = styled.p`
  font-size: 16px;
  margin: 5px;
  line-height: 15px;
`;
