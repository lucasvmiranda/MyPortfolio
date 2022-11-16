import styled from "styled-components";
import background from "../../assets/images/background.jpg";
import MyPhoto from "../../assets/images/photo4.png";
import MyPhoto2 from "../../assets/images/photo2.png";

export const Container = styled.div`
  background: url(${background});
  width: 100%;
  height: 100%;
`;

export const ContainerBackground = styled.div`
  background: rgb(35, 35, 54);
  background: linear-gradient(
    90deg,
    rgba(35, 20, 60, 0.8) 0%,
    rgba(0, 0, 0, 0.9) 30%
  );
`;

export const Content = styled.div`
  max-width: 1250px;

  /* background-color: #c6c6c6; */
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.p`
  font-size: 40px;
  color: #989898;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const MyName = styled.p`
  font-size: 80px;
  color: #6959cd;

  @media (max-width: 1300px) {
    font-size: 60px;
  }
`;
export const SubTitle = styled.p`
  font-size: 40px;
  color: white;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const InitArea = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row-reverse;
  /* background-color: green; */
  align-items: center;
  padding-top: 120px;

  @media (max-width: 900px) {
    height: 300px;
    padding-top: 0px;

    display: grid;
    margin-bottom: 800px;
  }
`;

export const ContainertextInit = styled.div`
  width: 680px;
  margin-top: 120px;
  line-height: 0px;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const MyPhotoContainer = styled.div`
  background-image: url(${MyPhoto});
  width: 800px;
  height: 800px;
  box-shadow: 0 0 100px 60px black inset;
  background-size: cover;
  margin-top: 200px;

  @media (max-width: 1300px) {
    height: 500px;
    width: 400px;
    align-content: center;
    display: none;
    box-shadow: 0px;
  }
`;

export const MyPhotoResponsive = styled.div`
  background-image: url(${MyPhoto2});
  height: 500px;
  width: 400px;
  align-content: center;
  display: grid;
  margin-top: 200px;

  display: none;

  @media (max-width: 1300px) {
    display: inline;
  }
`;

export const AreaTitle = styled.div`
  width: auto;
  display: flex;

  flex-direction: row-reverse;
`;

export const AboutArea = styled.div`
  height: 500px;
  width: auto;
  align-items: center;
  margin-top: 240px;

  @media (max-width: 600px) {
    margin-bottom: 200px;
  }
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
`;

export const Profile = styled.div`
  height: 300px;
  width: auto;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 600px) {
    margin-bottom: 200px;
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
`;

export const Description = styled.p`
  color: #c8c8c8;
  font-size: 20px;
`;
