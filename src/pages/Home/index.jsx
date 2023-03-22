import React from "react";
import StarfieldAnimation from 'react-starfield-animation'

import {
  FaDev,
  FaReact,
  FaJs,
  FaNodeJs,
  FaLinkedin,
  FaGithubSquare,
  FaUniversity,
} from "react-icons/fa";
import {
  SiRedux,
  SiReduxsaga,
  SiPostgresql,
  SiSequelize,
  SiHtml5,
  SiCss3,
  SiTypescript,
} from "react-icons/si";

import { MdEmail } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Container,
  ContainerBackground,
  Title,
  SubTitle,
  Content,
  InitArea,
  MyPhotoContainer,
  ContainertextInit,
  AboutArea,
  ExperiencesArea,
  AreaTitle,
  Description,
  Profile,
  CardTecnhology,
  AreaCards,
  TitleCard,
  Contact,
  MyName,

  ContainerLinks,
  BarGreen,
  HomeArea,
  AreaDescription
} from "./styles";
import Header from "../../components/Header";
import Whatsapp from "../../components/Whatsapp";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    
    <>

    
      <Container>
      <Header
            home="#home"
            about="#about"
            experience="#experience"
            person="#person"
            contact="#contact"
          />
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 999,
        }}
      />
      <BarGreen/>
        <ContainerBackground>
         
          
    
          <Content>
            <InitArea>
              
              <MyPhotoContainer/>
             
              
              <ContainertextInit>
                <Title>Olá, sou o </Title>
                <MyName>Lucas Miranda</MyName>
                
<ContainerLinks>

    <SubTitle>    Apaixonado por tecnologia,
               formado em Análise e Desenvolvimento de Sistemas, tenho facilidade em
                trabalhar em equipe, pair programming e code review fazem parte
                de meu cotidiano.</SubTitle>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lucasvmiranda/"
                >
                  {" "}
                  <FaLinkedin size={55} />
                </a>
                <a target="_blank" href="https://github.com/lucasvmiranda">
                  {" "}
                  <FaGithubSquare size={55} />
                </a>
                </ContainerLinks>
              </ContainertextInit>
          
            </InitArea>
            </Content>
            <AreaDescription>
            <Content>
          
                </Content>
                </AreaDescription>
            
            <AboutArea >
            <Content>
              <AreaTitle  id="about">
                <Title >TECNOLOGIAS</Title>
              </AreaTitle>
              <Description
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <AreaCards>
                  <CardTecnhology>
                    <SiHtml5 size={35} />
                    <TitleCard>HTML5</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <SiCss3 size={35} />
                    <TitleCard> CSS3</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <FaJs size={35} />
                    <TitleCard> JavaScript</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <SiTypescript size={30} />
                    <TitleCard> TypeScript</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <FaReact size={35} />
                    <TitleCard> React.js/React Native</TitleCard>
                  </CardTecnhology>

                  <CardTecnhology>
                    {" "}
                    <SiRedux size={35} />
                    <TitleCard> Redux</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <SiReduxsaga size={35} />
                    <TitleCard> Redux Saga</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <FaNodeJs size={35} />
                    <TitleCard> Node.js</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <SiSequelize size={35} />
                    <TitleCard> Sequelize</TitleCard>
                  </CardTecnhology>
                  <CardTecnhology>
                    {" "}
                    <SiPostgresql size={35} />
                    <TitleCard> PostgreSQL</TitleCard>
                  </CardTecnhology>
                </AreaCards>
              </Description>
              </Content>
            </AboutArea>
            <Content id="home">
            <ExperiencesArea>
              <AreaTitle style={{ flexDirection: "row", marginTop: 100 }}>
                <Title id="experience" >
                  EXPERIÊNCIAS
                </Title>
              </AreaTitle>
              <Description>
                <VerticalTimeline style={{ position: "relative", zIndex: 1 }}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#6959CD", color: "#fff" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  #6959CD",
                    }}
                    date="2022 - presente"
                    iconStyle={{ background: "#6959CD", color: "#fff" }}
                    icon={<FaDev />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Octonus Cloud Solutions
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Desenvolvedor Front-end - Remoto
                    </h4>
                    <p>Aplicação Web com TypeScript, React, Styled-Componentes, Redux e Redux Saga.</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: "#6959CD" }}
                    date="2021 - 2022"
                    iconStyle={{ background: "#6959CD", color: "#fff" }}
                    icon={<FaDev />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      SoftMakersBR{" "}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Desenvolvedor Full-Stack - Remoto
                    </h4>
                    <p>
                      Aplicação Web com TypeScript,React.js, aplicação Mobile com React
                      Native, Back-end com Node.js e deploy de aplicações.
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#6959CD", color: "#fff" }}
                    contentArrowStyle={{
                      borderRight: "7px solid #6959CD",
                    }}
                    date="2017 - 2019"
                    iconStyle={{ background: "#6959CD", color: "#fff" }}
                    icon={<FaUniversity />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Universidade Cruzeiro do Sul
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>Análise e Desenvolvimento de Sistemas.</p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </Description>
            </ExperiencesArea>
        
            <Profile>
              
              <AreaTitle>
              
                <Title id="person">PERFIL PESSOAL</Title>
              </AreaTitle>
              <Description style={{ textAlign: "justify" }}>
                Nascido em São Paulo, apaixonado por tecnologia desde sempre,
                carros dos anos 90 e músicas emo, uma pessoa bem nostalgica
                diria, no meu tempo livre, gosto de estar perto de amigos e da
                família, formado em Análise e Desenvolvimento de Sistemas, atuo
                como programador a cerca de 1 ano e meio, tenho facilidade em
                trabalhar em equipe, pair programming e code review fazem parte
                de meu cotidiano.
              </Description>
            </Profile>
            <AreaTitle style={{ flexDirection: "row" }}>
              <Title id="contact" >
                CONTATO
              </Title>
            </AreaTitle>
            <Contact>
              
              <Description style={{ display: "flex", alignItems: "center" }}>
                <MdEmail size={40} style={{ marginRight: 10 }} />{" "}
                lucasvmirandadev@gmail.com
              </Description>
              <Whatsapp />
            </Contact>
          </Content>
          <Footer />
        </ContainerBackground>
      </Container>
    </>
  );
};

export default Home;
