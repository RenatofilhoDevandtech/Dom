// eslint-disable-next-line no-unused-vars
import React from 'react';
import vnweb from '../../assets/vnweb.svg';
import * as S from '../Skills/Style_skills';
import { FaHtml5, FaCss3, FaJs, FaPaintBrush, FaReact, FaNodeJs, FaGit, FaAws, FaGithub } from 'react-icons/fa';

const Skills = () => {
  return (
    <S.SectionSkill className="skills section" id="skills">
      <S.Title className="section-title">Minhas Skills</S.Title>

      <S.ContainerSkill className="skills__container bd-grid">
  
        <S.Data>
          <S.Subtitle>Professional Skills</S.Subtitle>
          <S.Text> Skills Adquiridas pelo curso Front End ministrado pelo Vai na WEB </S.Text>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaHtml5 /></S.Icon>
              <S.Name>HTML5</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__html"></S.Bar>
            <S.Percentage>45%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaCss3 /></S.Icon>
              <S.Name>CSS3</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__css"></S.Bar>
            <S.Percentage>45%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaJs /></S.Icon>
              <S.Name>JavaScript</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__js"></S.Bar>
            <S.Percentage>45%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaReact /></S.Icon>
              <S.Name>React</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__react"></S.Bar>
            <S.Percentage>60%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaNodeJs /></S.Icon>
              <S.Name>Node.js</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__nodejs"></S.Bar>
            <S.Percentage>45%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaGit /></S.Icon>
              <S.Name>Git</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__git"></S.Bar>
            <S.Percentage>40%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaAws /></S.Icon>
              <S.Name>AWS</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__aws"></S.Bar>
            <S.Percentage>40%</S.Percentage>
          </S.SkillsData>

          <S.SkillsData>
            <S.Names>
              <S.Icon><FaGithub /></S.Icon>
              <S.Name>GitHub</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__github"></S.Bar>
            <S.Percentage>45%</S.Percentage>
          </S.SkillsData>


          <S.SkillsData>
            <S.Names>
              <S.Icon><FaPaintBrush /></S.Icon>
              <S.Name>UX/UI</S.Name>
            </S.Names>
            <S.Bar className="skills__bar skills__ux"></S.Bar>
            <S.Percentage>45%</S.Percentage>
          </S.SkillsData>

        </S.Data>

        <S.ImgContainer>
          <S.Img src={vnweb} alt="" className="skills__img" />
        </S.ImgContainer>
        
      </S.ContainerSkill>
    </S.SectionSkill>
  );
};

export default Skills;
