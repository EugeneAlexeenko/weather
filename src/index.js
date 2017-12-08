import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { HashRouter as Router, Route } from 'react-router-dom';


import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <div>
        <App route path="/" />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
