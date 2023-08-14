// En Header.js

import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="Mettus Logo" className="logo" />
        <h1 className="brand-name">Mettus</h1>
      </div>
    </header>
  );
};

export default Header;
