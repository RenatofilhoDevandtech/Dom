import styled, { keyframes } from 'styled-components';
import { BsPatchCheckFill } from "react-icons/bs";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const Section = styled.section`
  padding: 50px 0;
  margin-top: 30px; /* Espaçamento superior */
  margin-bottom: 30px; /* Espaçamento inferior */
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

export const ProfileImage = styled.div`
  margin-bottom: 30px;
  position: relative;
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 50%;
    animation: ${shakeAnimation} 2s ease infinite;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: #333;
  span {
    color: #2bcee4; /* Cor azul */
  }
`;

export const Description = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
`;

export const SectionExperience = styled.section`
  margin-top: 50px;
`;

export const TitleExperience = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  color: #2bcee4; /* Cor azul */
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const ExperienceBox = styled.div`
  flex: 1 1 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transition: transform 0.4s ease;
  &:hover {
    transform: translateY(-10px);
    background-image: linear-gradient(90deg, #2bcee4, #63c7f5); /* Efeito de gradiente azul */
  }
  h3 {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #272626;
  }
`;

export const ExperienceContent = styled.div``;

export const ExperienceDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h4 {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  small {
    font-size: 16px;
    color: #666;
  }
  .experience-details-icon {
    font-size: 24px;
    font-weight: 400;
    margin-right: 10px;
    color: #2bcee4;
  }
`;

export const ExperienceIcon = styled(BsPatchCheckFill)`
  font-size: 36px;
  margin-right: 10px;
  color:  #2bcee4; /* Cor azul */
`;

export const ExperienceText = styled.div`
  
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  img {
    width: 150px;
    height: auto;
    animation: ${shakeAnimation} 2s ease infinite;
  }
`;
