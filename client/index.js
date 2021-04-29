import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import logo from './assets/roomToGrow2.png';

// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

render(
  <App />,
  document.getElementById('root')
);
