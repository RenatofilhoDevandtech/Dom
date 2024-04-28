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
              <h1>Sobre Mim</h1>
              <h5>
                Desenvolvedor Front-End <span>& Amante da Inovação</span>
              </h5>
              <p>
                Olá, sou Renato Filho, um entusiasta da tecnologia apaixonado por criar interfaces bonitas e funcionais.
                Combinando meu conhecimento em design e desenvolvimento, busco constantemente superar limites e
                entregar soluções que fazem a diferença.
              </p>
              <button type="button" onClick={handleContactClick}>Entre em contato</button>
              <a href="/seucurriculo.pdf" download>
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
