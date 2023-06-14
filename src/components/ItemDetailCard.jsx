import React from 'react';
import './ProductCard.css'; 

const ItemDetailCard = ({ product }) => {
  return (
    <div className="item-detail-card">
      <h2 className="item-detail-card__title">{product.title}</h2>
      <p className="item-detail-card__description">{product.description}</p>
      <img className="item-detail-card__image" src={product.image} alt={product.title} />
      <p className="item-detail-card__price">${product.price}</p>
    </div>
  );
};

export default ItemDetailCard;