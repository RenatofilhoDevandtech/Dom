// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import * as S from '../Footer/Style_footer';


const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.SocialLinks>
        <S.SocialLink href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </S.SocialLink>
        <S.SocialLink href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </S.SocialLink>
        <S.SocialLink href="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </S.SocialLink>
        <S.SocialLink href="#">
          <FontAwesomeIcon icon={faWhatsapp} />
        </S.SocialLink>
      </S.SocialLinks>
      <S.FooterText>© {new Date().getFullYear()} RenatoServicesTI. Todos os direitos reservados.</S.FooterText>
    </S.FooterWrapper>
  );
};

export default Footer;
