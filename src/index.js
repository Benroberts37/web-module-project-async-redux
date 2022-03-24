import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Proivder} from 'react-redux'

import App from './App';
import './index.css';

const store = createStore 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




// API key - UWm6GLQYKmmLnfzjn8W12UrgD2jp43un