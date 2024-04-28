import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: auto; /* Garante que o rodapé permaneça na parte inferior da tela */

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`;

export const SocialLink = styled.a`
  font-size: 32px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #6bd0ff;
  }
`;

export const FooterText = styled.p`
  font-size: 18px;
  color: #666;
`;
