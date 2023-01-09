import styled from "styled-components";
import background from "../../assets/images/background.jpg";
import MyPhoto from "../../assets/images/photo4.png";
import MyPhoto2 from "../../assets/images/photo9.png";

export const Container = styled.div`
  /* background: url(${background}); */
  width: 100%;
  height: 100%;
`;

export const ContainerBackground = styled.div`
  background: #202020;
`;

export const Content = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.p`
  font-size: 30px;
  color: #37B1F3;
  position: absolute;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const MyName = styled.p`
  font-size: 90px;
  color: white;
position: absolute;
font-weight: bold;
  @media (max-width: 1300px) {
    font-size: 40px;
  }
`;
export const SubTitle = styled.p`
  font-size: 40px;
  color: white;
  /* position: absolute; */
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const InitArea = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-top: 120px;
  position: relative;

  @media (max-width: 900px) {
    height: 300px;
    padding-top: 0px;
    display: grid;
    margin-bottom: 400px;
  }
`;

export const ContainertextInit = styled.div`
  width: 680px;
  height: 100%;
  margin-top: 120px;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const MyPhotoContainer = styled.div`
  background-image: url(${MyPhoto2});
  width: 1500px;
  height: 750px;
  background-size: cover;
  margin-top: 290px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HomeArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;

`;

export const BarGreen = styled.div`
  width: 1900px;
  height: 450px;
  margin-top: 450px;
  margin-left: -150px;
  position: absolute;
  transform: rotate(-20deg);
  background-color: #8DEA91;
`

export const MyPhotoResponsive = styled.div`
  background-image: url(${MyPhoto});

  @media (max-width: 900px) {
    border-radius: 90px;
    width: 300px;
    height: 300px;
    padding: 40px;
  }
`;

export const AreaTitle = styled.div`
  width: auto;
  display: flex;
  margin-bottom: 80px;
  flex-direction: row-reverse;
`;

export const AboutArea = styled.div`
  height: 500px;
  width: auto;
  align-items: center;
  margin-top: 400px;

  @media (max-width: 1300px) {
    padding: 15px;
  }

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;



export const ContainerLinks = styled.div`
  height: 200px;
  width: auto;
  align-items: center;
  margin-top: 240px;
`;
export const AreaCards = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const CardTecnhology = styled.div`
  width: 235px;
  height: 80px;
  border: 1px solid #6959cd;
  border-radius: 4px;
  margin-top: 10px;
  padding: 2px;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.5s;

  @media (max-width: 600px) {
    width: 195px;
  }

  :hover {
    background: #6959cd;
  }
`;

export const TitleCard = styled.p`
  margin-left: 5px;
`;

export const ExperiencesArea = styled.div`
  height: auto;
  width: auto;
  /* background-color: green;   */
  align-items: center;
  margin-top: 40px;

  @media (max-width: 1300px) {
    padding: 15px;
  }
`;

export const Profile = styled.div`
  height: 300px;
  width: auto;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 600px) {
    margin-bottom: 200px;
  }

  @media (max-width: 1300px) {
    padding: 15px;
  }
`;

export const Contact = styled.div`
  height: 200px;
  width: auto;
  align-items: center;
  justify-content: center;
  display: grid;
  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: 1300px) {
    padding: 15px;
  }
`;

export const Description = styled.p`
  color: #c8c8c8;
  font-size: 20px;
`;
