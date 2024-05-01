// eslint-disable-next-line no-unused-vars
import React from 'react';
import perfil from '../../assets/perfilformatura.png';
import * as S from './Style_sobre'; // Importando estilos
import { BsPatchCheckFill } from "react-icons/bs";
import fatenelogo from '../../assets/fatenelogo.png'
import prounilogo from '../../assets/prounilogo.png'
const Sobre = () => {
  return (
    <S.Section id="sobre">
      <S.Container>
        <S.ProfileImage>
          <img className="profile-img" src={perfil} alt="Renato Filho" />
        </S.ProfileImage>
        <S.Content>
          <S.Title>
            Olá, eu sou <span>Renato Filho</span>
          </S.Title>
          <S.Description>
            Sou formado em Rede de Computadores e um entusiasta da tecnologia apaixonado por criar interfaces bonitas e funcionais. Combinando meu conhecimento em design e desenvolvimento, busco constantemente superar limites e entregar soluções que fazem a diferença.
          </S.Description>

          <S.LogoContainer>
            <img src={fatenelogo} alt="Logo Fátene" />
            <img src={prounilogo} alt="Comprovante ProUni" />
          </S.LogoContainer>

        </S.Content>
      </S.Container>

      <S.SectionExperience>
        <S.TitleExperience>Minhas Habilidades</S.TitleExperience>
        <S.ExperienceContainer>
          <S.ExperienceBox>
            <h3>Desenvolvimento Frontend</h3>
            <S.ExperienceContent>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small>Júnior</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small>Júnior</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small>Júnior</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>GitHub</h4>
                  <small>Júnior</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>React</h4>
                  <small>Júnior</small>
                </div>
              </S.ExperienceDetails>
              {/* Outras habilidades de frontend */}
            </S.ExperienceContent>
          </S.ExperienceBox>

          <S.ExperienceBox>
            <h3>Rede de Computadores</h3>
            <S.ExperienceContent>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Hardware e Software</h4>
                  <small>Avançado</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Manutenção e Reparo</h4>
                  <small>Avançado</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Sistemas Operacionais</h4>
                  <small>Avançado</small>
                </div>
              </S.ExperienceDetails>
              <S.ExperienceDetails>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>Administração de Redes</h4>
                  <small>Intermediário</small>
                </div>
              </S.ExperienceDetails>
              {/* Outras habilidades de rede */}
            </S.ExperienceContent>
          </S.ExperienceBox>
        </S.ExperienceContainer>
      </S.SectionExperience>
    </S.Section>
  );
};

export default Sobre;
