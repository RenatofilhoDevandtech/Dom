import * as S from "../Projetos/Styles_projetos";
import { FaReact, FaCss3, FaHtml5, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
export default function Card({ imagem, texto }) {
  return (
    <S.Card>
      <img src={imagem} alt="Projeto" />
      <h2>{texto}</h2>
      <div>
        {/* Adicionando ícones das linguagens */}
        <FaReact title="React" />
        <FaCss3 title="CSS" />
        <FaHtml5 title="HTML" />
        <FaNodeJs title="Node.js"/>
        <FaGit title="Git" />
        <FaGithub title="GitHub" />
      </div>
      <button>Ver Projeto</button>
    </S.Card>
  );
}
