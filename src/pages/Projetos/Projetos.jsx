// eslint-disable-next-line no-unused-vars
import React from 'react';
import {  FiGithub } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Projeto1 from '../../assets/Projeto1.svg';
import Projeto2 from '../../assets/Projeto2.svg';
import Projeto3 from '../../assets/Projeto3.svg';
import Projeto4 from '../../assets/Projeto4.svg';
import Projeto5 from '../../assets/Projeto5.svg';
import Projeto6 from '../../assets/Projeto6.svg';
import * as S from '../Projetos/Styles_projetos';

const Projetos = () => {
  const projetos = [

    { image: Projeto1, name: "Site McDonald", 
    description: "Prepare-se para uma nova era de conveniência e sabor com o site McDonald's - onde a inovação e a qualidade se encontram para criar uma experiência gastronômica excepcional.",
     github: "https://github.com/RenatofilhoDevandtech" },

     { 
      image: Projeto2, 
      name: "Site Selfcare", 
      description: "Descubra uma jornada de autocuidado como nunca antes. Navegue por uma experiência digital feita sob medida para cuidar da sua mente, corpo e alma.", 
      github: "https://github.com/RenatofilhoDevandtech" 
    },
    { 
      image: Projeto3, 
      name: "Site no Ritmo da Batida", 
      description: "Entre em sintonia com a música e explore um universo de ritmos e sons. Esteja você buscando inspiração para criar ou simplesmente apreciar, nosso site é o seu destino musical definitivo.", 
      github: "https://github.com/RenatofilhoDevandtech" 
    },
    { 
      image: Projeto4, 
      name: "Hortifruti Vai na Web", 
      description: "Abra os caminhos para uma vida mais saudável e sustentável. Conheça o mercado virtual que traz a frescura e os benefícios dos alimentos orgânicos direto para sua tela.", 
      github: "https://github.com/RenatofilhoDevandtech" 
    },
    { 
      image: Projeto5, 
      name: "Cronômetro", 
      description: "Não perca mais tempo - ou ganhe mais dele! Domine seu tempo com este cronômetro digital de alta precisão, perfeito para suas necessidades de cronometragem.", 
      github: "https://github.com/RenatofilhoDevandtech" 
    },
    { 
      image: Projeto6, 
      name: "Site Prime Video", 
      description: "Prepare-se para uma experiência cinematográfica épica. Explore um vasto catálogo de filmes e séries, descubra conteúdos exclusivos e mergulhe em um mundo de entretenimento sem limites.", 
      github: "https://github.com/RenatofilhoDevandtech" 
    }
  ];

  return (
    <S.Section>
      <S.Heading>Meus Projetos Vai Na Web </S.Heading>
      <S.ProjectContainer>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {projetos.map((projeto, index) => (
            <S.ProjectItem key={index}>
              <S.ProjectBox>
                <S.ProjectImage src={projeto.image} alt={projeto.name} />
                <S.ProjectTitle>{projeto.name}</S.ProjectTitle>
                <S.ProjectDescription>{projeto.description}</S.ProjectDescription>
                <S.ProjectLinks>
                  <S.ProjectLink href="#" target="_blank">
                    Ver Detalhes <S.ExternalLinkIcon />
                  </S.ProjectLink>
                  <S.ProjectLink href={projeto.github} target="_blank">
                    GitHub <FiGithub />
                  </S.ProjectLink>
                </S.ProjectLinks>
              </S.ProjectBox>
            </S.ProjectItem>
          ))}
        </Carousel>
      </S.ProjectContainer>
    </S.Section>
  );
};

export default Projetos;
