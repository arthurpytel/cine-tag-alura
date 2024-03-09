import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Favoritos from 'pages/Favoritos';
import Cabecalho from 'componentes/Cabecalho';
import Rodape from 'componentes/Rodape';
import Container from 'componentes/Container';
import {FavoritosProvider } from 'contextos/Favoritos';
import Player from 'pages/Player';
import NaoEncontrado from 'pages/NaoEncontrado';

const App = () => (
  <React.StrictMode>
    <>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/:id" element={<Player />} />
            <Route path="/*" element={<NaoEncontrado/>}/>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape 
        textoRodape='Desenvolvido pelo Pytel'
      />
    </>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App/>
  </Router>
);

