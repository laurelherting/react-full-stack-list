import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import './index.scss';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
