import React from "react";
import App from "./app/App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)