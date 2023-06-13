import React from 'react';
import ProductCard from './ProductCard';
import Products from '../data/Products';
import './ProductCard.css'; 


const ItemListContainer = () => {
  return (
    <>
      {Products.map(product => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </>
  );
};

export default ItemListContainer;