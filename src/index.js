import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { HashRouter as Router } from 'react-router-dom';

import reducers from './reducers';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

/// dev
window.store = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <Router >
        <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
