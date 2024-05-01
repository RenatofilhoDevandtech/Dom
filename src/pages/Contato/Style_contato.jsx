import styled from "styled-components";

export const Main = styled.div`
  background-color: ${(props) => (props.modoEscuro ? "#085366" : "#f5f5f5")};
  color: ${(props) => (props.modoEscuro ? "#333" : "#085366")}; /* Alteração da cor do texto quando em modo escuro */
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Section = styled.section`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  padding: 20px 0;
  background: linear-gradient(180deg, #fff 0%, #fff 100%);
  margin-top: 30px;
  margin-bottom: 30px; /* Espaçamento inferior */
  border-radius: 8px;
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    width: 70%;
    margin-top: 0;
  }
`;

export const DivMain = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border: 2px solid #8c9497;
    box-shadow: 0 0 5px #7d8386, 0 0 25px #7d8386;
    width: 100%;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    flex-direction: row;

    img {
      width: 40%;
      margin-right: 20px;
    }
  }
`;

export const DivText = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;

  h1, h5, p {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
  }

  h5 {
    font-size: 1.5rem;
  }

  span {
    color: #43c5e6;
  }

  p {
    line-height: 1.5;
    font-size: 1rem;
  }

  button {
    background-color: #46d0e2;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    border: none;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 30px;
    transition: 0.4s ease;

    &:hover {
      background-color: #43c5e6;
      box-shadow: 0 0 25px #46d0e2, 0 0 25px #46d0e2;
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @media (max-width: 500px) {
    padding: 10px;

    h1 {
      font-size: 2rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.875rem;
      margin-bottom: 15px;
    }

    button {
      font-size: 0.875rem;
    }
  }
`;

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
    color: #333;
    font-size: 2rem;
  }

  .icondiv {
    width: 80px;
    height: 80px;
    color: #333;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }

  &:hover {
    background-color: #46d0e2;

    .icondiv {
      color: #fff;
      transform: scale(1.2);
    }
  }
`;

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
