// ProductDetail.js

import React, { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.imageDetail[0].url);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <div className="product-main-image">
          <img
            src={process.env.PUBLIC_URL + '/assets/' + selectedImage}
            className="product-image-detail"
            alt={`${product.name} - ${product.description}`}
          />
        </div>
        <div className="product-thumbnail-images">
          {product.imageDetail.map((image) => (
            <img
              key={image.id}
              src={process.env.PUBLIC_URL + '/assets/' + image.url}
              className="product-thumbnail"
              alt={`Additional image ${image.id}`}
              onClick={() => handleImageClick(image.url)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
