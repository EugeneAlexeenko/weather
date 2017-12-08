import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import WeatherDetail from './WeatherDetail';
import NotFound from './NotFound';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/detail" component={WeatherDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;