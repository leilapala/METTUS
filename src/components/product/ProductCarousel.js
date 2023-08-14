
// ProductCarousel.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductModal from './ProductModal';
import './ProductCarousel.css'

const ProductCarousel = ({ category, products }) => {
  const [scrollX, setScrollX] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
    const handleScroll = (direction) => {
      const container = document.getElementById(`carousel-${category}`);
      const containerScrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      const maxScrollX = containerScrollWidth - containerWidth;
  
      if (direction === 'prev' && scrollX > 0) {
        setScrollX(scrollX - containerWidth);
      } else if (direction === 'next' && scrollX < maxScrollX) {
        setScrollX(scrollX + containerWidth);
      }
    };
  
  

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null); // Limpiar el producto seleccionado
    setIsModalOpen(false);
  };
  
  return (
    <div className="product-carousel" id={category}>
      <h2 className="category-title">{category}</h2>
      <div className="carousel" id={`carousel-${category}`} style={{ transform: `translateX(-${scrollX}px)` }}>
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img
              src={process.env.PUBLIC_URL + `/assets/${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button className="product-btn" onClick={() => openModal(product)}>
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
       
       
      </div>
      {isModalOpen && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ProductCarousel;
