import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 
  }
`;

export const SectionHeader = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(146, 161, 176, 0.15);
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 2.5rem;
    color: #333333;
    text-decoration: none;
    font-weight: 600;
    margin-right: auto;
  }

  button {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const DivNavmenu = styled.div`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  margin-right: 20px;

  a {
    font-size: 1.5rem;
    color: #26262b;
    text-decoration: none;
    font-weight: 500;
    margin-right: 35px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    backdrop-filter: blur(10px);
    background-color: rgba(101, 220, 241, 0.705);
    position: absolute;
    width: 100%;
    z-index: 1;
    list-style: none;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Lista = styled.li`
  font-size: 1.5rem;
  list-style: none;
  color: white;

  @media (max-width: 500px) {
    font-size: 1rem;
    margin-bottom: 10px; /* Adiciona espaçamento entre os itens */
  }
`;

export const Menulist = styled.button``;
