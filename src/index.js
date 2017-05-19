import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import './index.scss';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

