import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducers from './store/rootReducer'
import browserHistory from './utils/history'

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
