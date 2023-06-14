import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css'; 

const ItemListContainer = ({ productsData }) => {
  return (
    <div>
      {productsData.map(product => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;