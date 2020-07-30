import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
/* import App from './App'; */
import './assets/css/style.css'
import Home from './modules/home/home'
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import JavascriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.addLocale(en)

export const store = configureStore;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Home /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
