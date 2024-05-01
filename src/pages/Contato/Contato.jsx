// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import * as S from "../Contato/Style_contato";
import Renato from '../../assets/perfil2.png';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Inicio() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
  };

  const handleContactClick = () => {
    window.open('https://wa.me/85985252317', '_blank');
  };

  return (
    <>
      <S.Main modoEscuro={modoEscuro}>
        <S.Section>
          <S.DivMain>
            <img src={Renato} alt="Renato Filho" />
            <S.DivText>
              <h1>Entre em contato</h1>
              <h5>
                vamos trabalhar <span>Juntos ;)</span>
              </h5>
              <p>
              “Olá! Sou Renato Filho, um desenvolvedor front-end apaixonado por criar experiências incríveis na web. Se você está procurando um site elegante, responsivo e cheio de vida,
               você está no lugar certo! Vamos transformar suas ideias em realidade. Entre em contato e vamos construir algo incrível juntos!”
              </p>
              <button type="button" onClick={handleContactClick}>Entre em contato</button>
              <a href="../../assets/curriculo/RenatoFilho-FrontEndJr.pdf" download>
                <button type="button">Meu CV</button>
              </a>
            </S.DivText>
          </S.DivMain>
          <S.DivIcon>
            <h2>Me Encontre nas Redes Sociais</h2>
            <S.IconButton onClick={() => window.open( '_blank')}>
              <FaLinkedin className='icondiv' />
            </S.IconButton>
            <S.IconButton onClick={() => window.open( '_blank')}>
              <FaTwitter className='icondiv' />
            </S.IconButton>
            <S.IconButton onClick={() => window.open( '_blank')}>
              <FaInstagram className='icondiv' />
            </S.IconButton>
            <S.IconButton onClick={() => window.open( '_blank')}>
              <SiGmail className='icondiv' />
            </S.IconButton>
            <S.IconButton onClick={() => window.open( '_blank')}>
              <FaFacebook className='icondiv' />
            </S.IconButton>
            <S.IconButton onClick={() => window.open( '_blank')}>
              <FaWhatsapp className='icondiv' />
            </S.IconButton>
          </S.DivIcon>
        </S.Section>
        <S.ToggleButton onClick={alternarModo} modoEscuro={modoEscuro}>
          {modoEscuro ? <FaSun /> : <FaMoon />}
          {modoEscuro ? " Modo Claro" : " Modo Escuro"}
        </S.ToggleButton>
      </S.Main>
    </>
  );
}
