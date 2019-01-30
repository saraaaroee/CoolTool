import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import './style/main.scss';

window.React = React;

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
