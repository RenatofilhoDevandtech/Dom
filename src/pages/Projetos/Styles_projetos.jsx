import styled, { keyframes } from 'styled-components';

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ffffff, #2bcee4);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 10s ease infinite;
`;

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
  align-items: center;
  height: 50vh;
  max-width: 800px; /* Aumentando o tamanho máximo */
  margin: 0 auto;
  margin-top: 300px;
  position: relative; /* Adicionando posição relativa para o keyframe */
  overflow: hidden; /* Escondendo a animação fora da seção */

  /* Responsividade */
  @media screen and (max-width: 768px) {
    height: auto; /* Altura automática em telas menores */
  }
`;

export const Card = styled.div`
  width: 100%; /* Ajustando a largura para ocupar todo o espaço do carrossel */
  max-width: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  h2 {
    background-color: white;
    color: black;
    width: 100%;
    padding: 20px;
    text-align: center;
    margin: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px; /* Adicionando margem ao topo para separar os ícones do texto */
  }

  button {
    font-size: 1rem;
    color: #0c0b0b;
    background-color: #e7d20e;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #ecc20a;
  }
`;

// Ajustando o tamanho dos ícones
export const Icon = styled.div`
  font-size: 24px; /* Aumentando o tamanho dos ícones */
`;