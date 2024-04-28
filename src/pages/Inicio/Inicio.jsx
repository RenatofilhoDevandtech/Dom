// eslint-disable-next-line no-unused-vars
import React from 'react';
import Renato from '../../assets/renato1.png'; // Importe a imagem corretamente
import * as S from '../Inicio/Style_inicio'; // Importe os estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importe os ícones

const Home = () => {
  return (
    
    <S.Section className="home bd-grid" id="home">
      <S.Content>
        <S.Title>
          Olá ,Eu sou  <span>Renato Filho</span>, um Front End Developer
        </S.Title>

        <S.SocialIcons>
        <S.SocialIcon href="https://www.linkedin.com/in/renato-filho-devandtech"target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </S.SocialIcon>
        <S.SocialIcon href="https://www.instagram.com/renatofilho8?igsh=MTJlbzE3d3BwZHFqZw=="target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </S.SocialIcon>
        <S.SocialIcon href="https://github.com/RenatofilhoDevandtech"target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </S.SocialIcon>
      </S.SocialIcons>

      <S.ContactLink href="/seucurriculo.pdf" download > Download CV </S.ContactLink>
    
      </S.Content>


      <S.ProfileImage>
        <img
          className="home__blob-img"
          src={Renato} 
          alt="Renato Filho"
        />
      </S.ProfileImage>
    </S.Section>
  );
};

export default Home;
