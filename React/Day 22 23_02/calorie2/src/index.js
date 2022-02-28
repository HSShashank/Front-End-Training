import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { rootreducer } from './Reducers/Reducers';

const CalStore = createStore(rootreducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={CalStore}>
    <App />
  </Provider>,
  rootElement
);

