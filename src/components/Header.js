import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (

    <header className="header section page__header">
      <img  className="logo"
            src={headerLogo}
            alt="логотип Mesto" />
    </header>

  );
}

export default Header;
