import React from 'react';
import {  Route, NavLink, useHistory } from 'react-router-dom';
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
          <button onClick={signOut} className="menu__item menu__button">Выйти</button>
        </>
      ) : ( 
        <>
          <Route path="/sign-in">
            <NavLink to="/sign-up" activeClassName="menu__item_active" className="menu__item">Регистрация</NavLink>
          </Route>
          <Route path="/sign-up">
            <NavLink to="/sign-in" activeClassName="menu__item_active" className="menu__item">Авторизация</NavLink>
          </Route>
        </>
       )}
    </nav>
  );
}

export default NavBar;