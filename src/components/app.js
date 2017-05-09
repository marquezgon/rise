import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default App;
