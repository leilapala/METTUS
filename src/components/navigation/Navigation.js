// En Navigation.js

import React from 'react';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className="categories">
        <li className="category"><a href="#pantalones">Pantalones</a></li>
        <li className="category"><a href="#buzos">Buzos</a></li>
        <li className="category"><a href="#remeras">Remeras</a></li>
        <li className="category"><a href="#tops">Tops</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
