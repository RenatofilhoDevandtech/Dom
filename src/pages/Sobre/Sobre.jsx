// eslint-disable-next-line no-unused-vars
import React from 'react';
import perfil from '../../assets/perfilformatura.png';
import * as S from '../Sobre/Style_sobre';


const Sobre = () => {
  return (
    
    <S.Section className="home bd-grid" id="home">
      <S.Content>
        <S.Title>
          Sou  <span>Renato Filho</span>, Formado em Rede de Computadores <span> </span>.
        </S.Title>
        <p>
            Olá, sou Renato Filho, um entusiasta da tecnologia apaixonado por criar interfaces bonitas e funcionais.
            Combinando meu conhecimento em design e desenvolvimento, busco constantemente superar limites e
            entregar soluções que fazem a diferença.
          </p>
        
      </S.Content>

      <S.ProfileImage>
        <img
          className="home__blob-img"
          src={perfil} 
          alt="Renato Filho"
        />
      </S.ProfileImage>

    </S.Section>
  );
};

export default Sobre;
