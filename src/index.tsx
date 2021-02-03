import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store  from './redux/reduxStore';
import { HashRouter, } from 'react-router-dom'
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
,document.getElementById('root'));
