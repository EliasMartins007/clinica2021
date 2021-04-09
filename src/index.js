import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './pages/Home/App';
import Home from './pages/Home/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Paciente from './pages/Paciente/Paciente';
import Agenda from './pages/Agenda/Agenda';

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/Home" component={Home} exact />
      <Route path="/Paciente" component={Paciente} exact />
      <Route path="/Agenda" component={Agenda} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
