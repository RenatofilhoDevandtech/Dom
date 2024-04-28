// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from '../Projetos/Styles_projetos';
import Card from './Cards';

import Projeto1 from '../../assets/projeto1.png';
import Projeto2 from '../../assets/projeto2.png';
import Projeto3 from '../../assets/projeto3.png';
import Projeto4 from '../../assets/projeto4.png';

const Projetos = () => {
  return (
    <S.Section className="projetos" id="Projeto">
      <S.BackgroundAnimation />
      <Carousel showArrows={true} showStatus={false} showThumbs={false} emulateTouch={true} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={500}>
        <div>
          <Card imagem={Projeto1} texto="Projeto MC Donalds" />
        </div>
        <div>
          <Card imagem={Projeto2} texto="Projeto Prime Video" />
        </div>
        <div>
          <Card imagem={Projeto3} texto="Projeto Cronometro" />
        </div>
        <div>
          <Card imagem={Projeto4} texto="Projeto Fantasia" />
        </div>
      </Carousel>
    </S.Section>
  );
};

export default Projetos;
