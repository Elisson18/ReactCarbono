import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import logo from '../img/logo-removebg-preview.png';
import backgroundImage from '../img/Construction-pana.png';
import Counter from './components/Counter'; 

const App = () => {
  return (
    <div>
      <nav className="head">
        <img src={logo} className="logo" alt="logo-imovel" />
        <div className="option julius-sans-one-regular">
          <li><a href="#teste">HOME</a></li>
          <li><a href="#teste">IMÓVEIS</a></li>
          <li><a href="#teste">SOBRE</a></li>
          <li><a href="#teste">CONTATO</a></li>
        </div>
      </nav>

      <h1 className="text">SÓ HOJE NOS JÁ CAPTURAMOS</h1>
      <Counter /> {}

      <div className="banner">
        <img src={backgroundImage} className="background-image" alt="banner" />
        <h1 className="overlay-text">Descubra a diferença com a Imobiliária Carbono Zero!</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
