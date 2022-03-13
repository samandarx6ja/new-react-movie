import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ClassApp from './Component/ClassApp';

const numbers = [1,2,3,4,5,6]

ReactDOM.render(
    <App numbers={numbers}/>
  ,document.getElementById('root')
);



