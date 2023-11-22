import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export const serverBaseUrl="http://localhost:8012/organic/"; 
export const serverApiUrl=serverBaseUrl+"apis/" 

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);
