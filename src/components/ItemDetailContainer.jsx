import React from 'react';
import ItemDetailCard from './ItemDetailCard'; 
import ProductsData from '../data/Products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const productFilteredById = ProductsData.find((product) => product.id === parseInt(itemId));

  return (
    <ItemDetailCard product={productFilteredById} />
  );
};

export default ItemDetailContainer;