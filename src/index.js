import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './pages/Home/App';
import Home from './pages/Home/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Login" component={Login} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
