import styled from "styled-components";
import background from "../../assets/images/background.jpg";
import MyPhoto from "../../assets/images/photo4.png";
import MyPhoto2 from "../../assets/images/photo9.png";

export const Container = styled.div`
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
  font-size: 20px;
  font-weight: 400px;
  color: #afaaaa;
  text-align: justify;
  width: 650px;
  margin-top: 80px;
  height: auto;
  margin-left: 500px;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 30px;
  }

`;

export const AreaDescription = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 200px;
  align-items: center;
`

export const InitArea = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
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
  margin-top: 400px;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const MyPhotoContainer = styled.div`
  background-image: url(${MyPhoto2});
  width: 1200px;
  height:800px;
  background-size: cover;
  margin-top: 290px;
  -webkit-box-shadow: 22px 43px 74px -4px rgba(18,18,20,0.5);
  -moz-box-shadow: 22px 43px 74px -4px rgba(18,18,20,0.5);
  box-shadow: 22px 43px 74px -4px rgba(18,18,20,0.5);
  border-radius: 999px;

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
  width: 2000px;
  height: 350px;
  margin-top: 450px;
  margin-left: -150px;
  position: absolute;
  transform: rotate(-20deg);
  background-color: #6959cd;
`;

export const MyPhotoResponsive = styled.div`
  background-image: url(${MyPhoto});
  border-radius: 999px;
 
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
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: #121214;

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
  margin-top: 150px;
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
