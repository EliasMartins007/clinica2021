import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './pages/Home/App';
import Home from './pages/Home/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/Home" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
