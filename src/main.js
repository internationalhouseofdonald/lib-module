import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import data from './data.json';
import html from './markdown.md';
import { App } from './components/App';

window.React = React;

render(
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="jumbotron">
          <h1>Hello from {data.key}</h1>
        </div>
      </div>
    </div>
  </div>
  , document.getElementById('react-container')
);
