import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import data from './data.json';
import markdown from './markdown.md';
import { App } from './components/App';

window.React = React;

render(
  <App />
  , document.getElementById('react-container')
);
