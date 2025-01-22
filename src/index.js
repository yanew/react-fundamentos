import React from "react";
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

import App from './components/App';
//import './index.scss';
//Teste do Babel - Inicio
//const user = {};

//Optional chaining
//console.log(user?.address?.street);//as interrogacoes fazem o papel de um if que verifica se user e address sao null ou nao

//Teste do Babel - Fim

//React 17

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root'),
);