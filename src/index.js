import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import store from "./store";
import 'antd/dist/antd.css'
import { Router } from "react-router-dom";
import  { createBrowserHistory} from 'history';
const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
      <Provider store={store}>
          <App />
      </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
