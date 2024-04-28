// styles.js
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 95vh; 
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 5rem; 
  padding-left: 2rem;
  padding: 3rem;
  div.img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img.imgtitulo {
    width: 100px; /* ajuste o tamanho conforme necessário */
    height: auto; /* mantém a proporção da imagem */
    margin: 0 5px; /* espaço entre as imagens */
  }

`;

export const Divimgtitulo = styled.div`
  display: flex;
  
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  span {
    color: #2bcee4;
  }
`;

export const ContactLink = styled.a`
  background-color: #2bcee4;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #10626d;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6bd0ff;
  }
`;

export const ProfileImage = styled.div`
  img {
    max-width: 500px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
    @media screen and (max-width: 768px) {
    width: 360px;
  }
  }
`;
export const TitleImg = styled.div`
  img {
    max-width: 50px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
    @media screen and (max-width: 768px) {
    width: 30px;
  }
  }
`;
