// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projetos from './pages/Projetos/Projetos.jsx'
import Contato from './pages/Contato/Contato.jsx'
import Erro from './pages/Erro/Erro.jsx'
import Header from './components/Header/Header.jsx';
import * as S from "./components/Header/Styles.jsx";
import Footer from './components/Header/Footer/Footer.jsx';

function App() {
  return (
    <>
    <S.GlobalStyle />
       <BrowserRouter>
       <Header/>
         <Routes>
             <Route  path='/' element={<Inicio/>} />
             <Route  path='Sobre' element={<Sobre/>} />
             <Route  path='Skills' element={<Skills/>} />
             <Route  path='Projetos' element={<Projetos/>} />
             <Route  path='Contato' element={<Contato/>} />
             <Route  path='*' element={<Erro/>} />
         </Routes>
       </BrowserRouter>
       <Footer/>
    </>
  )
}
export default App
