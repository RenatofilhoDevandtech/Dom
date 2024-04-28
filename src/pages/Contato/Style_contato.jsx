import styled from "styled-components";

export const Main = styled.div`
  background-color: ${(props) => (props.modoEscuro ? "#085366" : "#f5f5f5")};
  color: ${(props) => (props.modoEscuro ? "#fff" : "#085366")};
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const Section = styled.section`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  padding: 20px 0;
  background: linear-gradient(180deg, #ffffff 0%, #fcf0f0 100%);
  margin-top: 20px;
  border-radius: 8px;

  @media (min-width: 500px) {
    width: 70%;
    margin-top: 0;
    border: none;
  }
`;

// Divisão principal
export const DivMain = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  img {
    border: 2px solid #8c9497;
    box-shadow: 0 0 5px #7d8386, 0 0 25px #7d8386;
    width: 100%;
    border-radius: 2em;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    img {
      width: 20%;
    }
  }
`;

// Divisão de texto
export const DivText = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;

  h1, h5, p {
    margin-bottom: 20px;
    font-size: 3.5rem;
    color: #333;
    margin-bottom: 1rem;

  }

  h1 {
    font-size: 40px;
    text-transform: capitalize;
  }

  h5 {
    font-size: 20px;
    text-transform: capitalize;
  }

  span {
    color: #43c5e6;
  }

  p {
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
  }

  button {
    background: transparent;
    color: #46d0e2;
    font-size: 16px;
    text-decoration: none;
    border: 2px solid #46d0e2;
    font-weight: bold;
    padding: 13px 30px;
    border-radius: 30px;
    transition: 0.4s ease;

    &:hover {
      background-color: #46d0e2;
      color: white;
      border: 2px solid #46d0e2;
      box-shadow: 0 0 25px #46d0e2, 0 0 25px #46d0e2;
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @media (max-width: 500px) {
    padding: 10px;

    h1 {
      font-size: 32px;
    }

    h5 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      margin-bottom: 15px;
    }

    button {
      font-size: 14px;
    }
  }
`;

// Divisão de ícones
export const DivIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 100%; 

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
    font-size: 2rem;
  }

  .icondiv {
    width: 80px;
    height: 80px;
    color: #46b1e2;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }

  &:hover {
    background-color: #46b1e2;

    .icondiv {
      color: #fff;
      transform: scale(1.2);
    }
  }
`;

// Botão de ícone
export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ToggleButton = styled.button`
  background-color: ${(props) => (props.modoEscuro ? "#444" : "#46b1e2")};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-block-end: auto;

  &:hover {
    background-color: ${(props) => (props.modoEscuro ? "#666" : "#2980b9")};
    transform: scale(1.05); /* Efeito de escala no hover */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  }
`;
