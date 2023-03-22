import styled from "styled-components";
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
  padding: 10px;

  @media (max-width: 900px) {
    align-items: center;
    display: grid;
    width: 500px;
    height: 100%;
  }

  @media (max-width: 600px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 360px) {
    max-width: 340px;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: #37b1f3;
  position: absolute;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const MyName = styled.p`
  font-size: 90px;
  color: white;
  position: absolute;
  font-weight: bold;

  @media (max-width: 1300px) {
    font-size: 70px;
  }

  @media (max-width: 600px) {
    font-size: 50px;
    margin-top: 80px;
  }
`;
export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 400px;
  color: #afaaaa;
  text-align: justify;
  width: 400px;
  margin-top: 80px;
  height: auto;
  align-items: center;

  @media (max-width: 1800px) {
    font-size: 15px;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    width: 85vw;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    width: 85vw;
  }
`;

export const AreaDescription = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 200px;
  align-items: center;
`;

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
    margin-top: 300px;
  }
`;

export const MyPhotoContainer = styled.div`
  background-image: url(${MyPhoto2});
  width: 1200px;
  height: 800px;
  background-size: cover;
  margin-top: 290px;
  -webkit-box-shadow: 22px 43px 74px -4px rgba(18, 18, 20, 0.5);
  -moz-box-shadow: 22px 43px 74px -4px rgba(18, 18, 20, 0.5);
  box-shadow: 22px 43px 74px -4px rgba(18, 18, 20, 0.5);
  border-radius: 999px;

  @media (max-width: 1300px) {
    width: 600px;
    height: 550px;
  }

  @media (max-width: 1200px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 1150px) {
    width: 500px;
    height: 450px;
  }

  @media (max-width: 1050px) {
    width: 400px;
    height: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 90px;
    align-items: center;
    display: grid;
    width: 500px;
    height: 500px;
  }

  @media (max-width: 500px) {
    border-radius: 200px;
    width: 400px;
    height: 400px;
  }

  @media (max-width: 400px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 360px) {
    width: 320px;
    height: 320px;
  }
`;

export const HomeArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

export const BarGreen = styled.div`
  width: 1400px;
  height: 350px;
  margin-top: 450px;
  margin-left: -150px;
  position: absolute;
  transform: rotate(-20deg);
  background: rgb(105, 89, 205);
  background: linear-gradient(
    90deg,
    rgba(105, 89, 205, 1) 43%,
    rgba(0, 212, 255, 1) 100%
  );

  @media (min-width: 1700px) {
    width: 2000px;
  }

  @media (max-width: 1320px) {
    width: 1300px;
  }

  @media (max-width: 1200px) {
    width: 1200px;
  }

  @media (max-width: 1100px) {
    width: 1000px;
    margin-top: 500px;
  }

  @media (max-width: 900px) {
    width: 800px;
  }

  @media (max-width: 720px) {
    width: 600px;
  }

  @media (max-width: 520px) {
    width: 500px;
    height: 150px;
  }
`;

export const BarFooter = styled.div`
  width: 1800px;
  height: 150px;
  position: relative;
  left: 0;
  margin-top: 0px;
  display: flex;
  flex-direction: column-reverse;
  opacity: 0.5;
  transform: rotate(-170deg);
  background: rgb(105, 89, 205);
  background: linear-gradient(
    90deg,
    rgba(105, 89, 205, 1) 43%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const AreaTitle = styled.div`
  width: auto;
  display: flex;
  margin-bottom: 80px;
  flex-direction: row-reverse;

  @media (max-width: 400px) {
    margin-right: 30px;
  }
`;

export const AboutArea = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #121214;

  @media (max-width: 1300px) {
    padding: 15px;
    display: grid;
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

  @media (max-width: 600px) {
    padding: 30px;
  }

    @media (max-width: 400px) {
    padding: 50px;
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
    width: 100%;
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
    height: 400px;
    width: 90%;
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

  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const Description = styled.p`
  color: #c8c8c8;
  font-size: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;
