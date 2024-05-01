// eslint-disable-next-line no-unused-vars
import React from 'react';
import Renato from '../../assets/renato1.png';
import * as S from '../Inicio/Style_inicio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'; 

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Animação inicial de opacidade e deslocamento vertical
      animate={{ opacity: 1, y: 0 }} // Animação de entrada
      transition={{ duration: 1 }} // Duração da transição
    >
      <S.Section className="home bd-grid" id="home">
        <S.Content>
          <S.Title>
            Olá, Eu sou <span>Renato Filho</span>, um Front End Developer
          </S.Title>

          <S.SocialIcons>
            <S.SocialIcon href="https://www.linkedin.com/in/renato-filho-devandtech" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </S.SocialIcon>
            <S.SocialIcon href="https://www.instagram.com/renatofilho8?igsh=MTJlbzE3d3BwZHFqZw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </S.SocialIcon>
            <S.SocialIcon href="https://github.com/RenatofilhoDevandtech" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </S.SocialIcon>
          </S.SocialIcons>

          <S.ContactLink href="../../assets/curriculo/RenatoFilho-FrontEndJr.pdf" download>
            Download CV
          </S.ContactLink>
        </S.Content>

        <motion.div
          initial={{ scale: 0 }} // Animação inicial de escala
          animate={{ scale: 1 }} // Animação de entrada
          transition={{ duration: 0.5, delay: 0.5 }} // Duração da transição e atraso
        >
          <S.ProfileImage>
            <img className="home__blob-img" src={Renato} alt="Renato Filho" />
          </S.ProfileImage>
        </motion.div>
      </S.Section>
    </motion.div>
  );
};

export default Home;
