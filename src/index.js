import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './reset.css';

import Home from './pages/Home/';
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from './pages/cadastro/Categoria';

function pagina404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      <div style={{ backgroundColor: "#009688", margin: '0', textAlign: 'center' }}>
        <h1>404</h1>
        <h2>Aproveite para passar o tempo</h2>
      </div>
      <iframe
        src="https://renatobmps.github.io/forca"
        width='100%'
        frameBorder="0"
        title="Jogo da forca"
        style={{ flexGrow: '1' }} />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/cadastro/video" exact={true} component={CadastroVideo} />
      <Route path="/cadastro/categoria" exact={true} component={CadastroCategoria} />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
