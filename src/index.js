import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools());

const route = (
  <Provider store={store}>
      <App />
  </Provider>
)

ReactDOM.render(route, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
