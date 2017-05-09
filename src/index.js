import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  ),
  document.getElementById('container')
)
