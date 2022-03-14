import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const history = useHistory();
  function signOut(){
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }

  return (
    <nav className="menu">
      {/* { props.loggedIn  ? <p>залогинены</p> : <p>не залогинены </p>} */}

      {props.loggedIn ? (
        <>
          <NavLink exact to="/"  activeClassName="menu__item_active" className="menu__item">На гл стр</NavLink>
          {/* <NavLink exact to="/"  activeClassName="menu__item_active" className="menu__item">Выход</NavLink> */}
          <button onClick={signOut} className="menu__item menu__button">Выйти</button>
        </>
      ) : ( 
        <>
          <NavLink to="/sign-in" activeClassName="menu__item_active" className="menu__item">Авторизация</NavLink>
          <NavLink to="/sign-up" activeClassName="menu__item_active" className="menu__item">Регистрация</NavLink>
        </>
       )}
    </nav>
  );
}

export default NavBar;