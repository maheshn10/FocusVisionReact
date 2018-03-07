import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './Components/Login/Login';
import store from './stores/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}><Login /></Provider>, document.getElementById('app-root'));
