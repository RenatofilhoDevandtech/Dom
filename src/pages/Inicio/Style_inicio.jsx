// styles.js
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 95vh; 

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
  padding: 3rem;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 1rem;

  span {
    color: #2bcee4;
  }
`;

export const ContactLink = styled.a`
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
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
    @media screen and (max-width: 768px) {
      width: 80%;
  }
  }
`;
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;