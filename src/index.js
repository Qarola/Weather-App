import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( // se envelve toda la app con  <BrowserRouter> </BrowserRouter>...
  <BrowserRouter>  
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);