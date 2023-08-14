import React from 'react';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import ProductCarousel from './components/product/ProductCarousel';
import Footer from './components/footer/footer'; 
import data from './data.json';

import './App.css';

const App = () => {
  const { products } = data;

  return (
    <div className="app">
      <Header />
      <Navigation />
      <ProductCarousel category="Pantalones" products={products.filter(product => product.categoryId === 1)} />
      <ProductCarousel category="Buzos" products={products.filter(product => product.categoryId === 2)} />
      <ProductCarousel category="Remeras" products={products.filter(product => product.categoryId === 3)} />
      <ProductCarousel category="Tops" products={products.filter(product => product.categoryId === 4)} />
      <Footer />
    </div>
  );
  
};

export default App;
