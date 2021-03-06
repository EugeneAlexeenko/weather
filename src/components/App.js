import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import WeatherDetail from './WeatherDetail';
import Cities from './CitiesList';
import NotFound from './NotFound';

import './App.css';
import bg from '../img/bg_main.jpg';

class App extends Component {

  render() {
    return (
      <div className="app"
           style={{backgroundImage: `url(${bg})`}}
      >
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cities" component={Cities} />
          <Route path="/detail/:id" component={WeatherDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
