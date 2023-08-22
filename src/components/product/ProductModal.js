import React, { useState } from 'react';
import './ProductModal.css'; // Asegúrate de tener los estilos CSS para el modal

const ProductModal = ({ product, closeModal }) => {
  const [mainImage, setMainImage] = useState(product.image); // Estado para la imagen principal

  const handleCloseClick = () => {
    closeModal();
  };

  const handleImageDetailClick = (image) => {
    setMainImage(image.url);
  };


    const handleBuyButtonClick = () => {
      const productName = product.name; // Cambia esto según cómo obtienes el nombre del producto
      const whatsappMessage = `Hola, me gusta mucho esta prenda ${productName}, ¿tienen disponibilidad?`;
  
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappLink = `https://api.whatsapp.com/send?phone=+1168028555&text=${encodedMessage}`;
  
      window.open(whatsappLink, '_blank'); // Abre enlace en una nueva pestaña
    };
  return (
    <div className="product-modal-overlay">
      <div className="product-modal">
        <button className="close-modal-btn" onClick={handleCloseClick}>X</button>
        <div className="product-modal-content">
          <div className="product-image-container">
            <img
              src={process.env.PUBLIC_URL + `/assets/${mainImage}`} /* Usamos la imagen principal */
              className="product-image2"
              alt={product.name}
            />
          </div>
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
          <button className="product-buy-button" onClick={handleBuyButtonClick}>
          Comprar
        </button>
          <div className="product-image-detail-container">
            {product.imageDetail.map((image) => (
              <img
                key={image.id}
                src={process.env.PUBLIC_URL + `/assets/${image.url}`}
                className="product-image-detail"
                alt={`Additional image ${image.id}`}
                onClick={() => handleImageDetailClick(image)} /* Agregamos el manejador de clic */
              />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
