import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'

import ShowsState from './context/shows/ShowsState'

ReactDOM.render(
  <ShowsState>
    <App />
  </ShowsState>
  ,document.getElementById('root')
);


