import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from 'react-router-dom';
//componentes
import Button from '../../components/Button'; //'../Button';
import PageDefaultLogin from '../../components/inicial';
//fim teste 28

//função para realizar POST
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
//teste 25/03/2021
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  //teste 25/03/2021

  return (
    <div className="login-wrapper">
      <PageDefaultLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            {/* <button type="submit">Submit</button> */}

            <Button as={Link} className="ButtonLink" to="/Home">
              Entrar
            </Button>

            {/* <Link to={`/Paciente`} activeClassName="current">
              paciente
            </Link> */}
          </div>
        </form>
      </PageDefaultLogin>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
