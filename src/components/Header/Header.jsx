// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import * as S from './Styles.jsx';
import { Link, } from 'react-router-dom';


export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
  <S.SectionHeader>
      <nav className="nav bd-grid">
        <S.DivLogo>
          <a href="#" className="nav__logo">
          Renato Filho.
          </a>
          <button onClick={() => setMenu(!menu)}>
            {menu ? 'X' : '☰'}
          </button>
        </S.DivLogo>

        <S.DivNavmenu className="nav__menu" id="nav-menu">
          {menu && (
            <ul className="nav__list">

              <li className="nav__item">
              <Link to="/"> Início </Link>
              </li>

              <li className="nav__item">
              <Link to="/Sobre"> Sobre Mim </Link>
              </li>

              <li className="nav__item">
              <Link to="/Skills"> Skills </Link>
              </li>

              <li className="nav__item">
              <Link to="/Projetos "> Projetos </Link>
              </li>
              <li className="nav__item">
              <Link to="/Contato"> Contato </Link>
              </li>
            </ul>
          )}
        </S.DivNavmenu>
      </nav>
      </S.SectionHeader>
  );
}