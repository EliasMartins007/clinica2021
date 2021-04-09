import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import '../Menu/Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/Cadastro/Video">
        Novo
      </Button>
    </nav>
  );
}
export default Menu;
