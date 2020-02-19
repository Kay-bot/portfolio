import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 5px;
`;

export const StyledHero = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  background-image: url("https://c4.wallpaperflare.com/wallpaper/271/397/298/anno-2205-4k-8k-wallpaper-preview.jpg");
  background-size: cover;
  background-color: rgba(0, 0, 0, 5);
`;

export const ProfileImage = styled.img`
  padding-top: 10px;
  height: 20%;
  width: 20%;
  border-radius: 50%;
`;

export const Name = styled.div`
  height: 33%;
  width: 100%;
  font-size: 50px;
  text-align: center;
  line-height: 20px;
  color: orange;
`;

export const Title = styled.div`
  padding-top: 35px;
  height: 33%;
  width: 100%;
  font-size: 28px;
  text-align: center;
  line-height: 20px;
  color: brown;
`;

export const Section = styled.section`
  padding-bottom: 20px;
  padding-top: 20px;
  background: teal;
  position: relative;
  display: block;
  color: whitesmoke;
  font-weight: 400;
  text-transform: uppercase;
`;

export const DivContainer = styled.div`
  position: relative;
  top: 10px;
  margin: 0;
  width: 95%;
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
`;

export const Container2 = styled.div`
  margin: 0;
`;
