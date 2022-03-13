import React from 'react';
import headerLogo from '../images/header-logo.svg';
import Navbar from '../components/NavBar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <header className="header section page__header">
      <Link to="/main" className="">
        <img  className="logo"
              src={headerLogo}
              alt="логотип Mesto" />
      </Link>

      <Navbar/>
    </header>

  );
}

export default Header;
