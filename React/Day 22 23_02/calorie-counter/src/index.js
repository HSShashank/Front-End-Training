import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App';
import { rootReducer } from "./Reducers/CalorieReducer";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
