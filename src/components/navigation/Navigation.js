// En Navigation.js

import React from 'react';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className="categories">
        <li className="category"><a href="#Pantalones">Pantalones</a></li>
        <li className="category"><a href="#Buzos">Buzos</a></li>
        <li className="category"><a href="#Remeras">Remeras</a></li>
        <li className="category"><a href="#Tops">Tops</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
