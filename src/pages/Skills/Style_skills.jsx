import styled from 'styled-components';

export const SectionSkill = styled.section`
  padding: 5vw 0;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3vw;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2vw;
  }
`;

export const ContainerSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Data = styled.div`
  background-color: #fff;
  padding: 3vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #666;


  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SkillsData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2vw;
`;

export const Names = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 2rem;
  margin-right: 10px;
  color: #2bcee4; /* Cor azul #2bcee4 */


  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 0.5vw;
  }
`;

export const Name = styled.span`
  font-size: 1.2rem;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Bar = styled.div`
  height: 0.5vw;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 1vw 0;

  @media screen and (max-width: 768px) {
    height: 0.3vw;
    margin: 0.5vw 0;
  }
`;

export const Percentage = styled.span`
  font-size: 1rem;
  color: #292626;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ImgContainer = styled.div`
  width: 500px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

