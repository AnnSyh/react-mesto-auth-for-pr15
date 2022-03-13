import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      {/* <NavLink exact to="/"  activeClassName="menu__item_active" className="menu__item">Домой</NavLink> */}
      <NavLink to="/sign-in" activeClassName="menu__item_active" className="menu__item">Авторизация</NavLink>
      <NavLink to="/sign-up" activeClassName="menu__item_active" className="menu__item">Регистрация</NavLink>
    </nav>
  );
}

export default NavBar;