import styled from 'styled-components';
import { FiExternalLink,} from 'react-icons/fi';

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 50px 0;
  text-align: center;
  margin-top: 30px; 
  margin-bottom: 30px;
`;

export const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
`;

export const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 10px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const ProjectTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

export const ProjectLinks = styled.div`
  margin-top: 20px;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  background-color: #2bcee4;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1e33f1;
  }
`;

export const ExternalLinkIcon = styled(FiExternalLink)`
  margin-left: 5px;
  font-size: 16px;
`;
