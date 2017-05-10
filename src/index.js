import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app';
injectTapEventPlugin();

ReactDOM.render(
  (
    <HashRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </HashRouter>
  ),
  document.getElementById('container')
)
