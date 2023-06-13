import React from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ProductsData from '../data/Products';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { itemId } = useParams();
  const productFilteredById = ProductsData.find((product) => product.id === parseInt(itemId));

  return (
    <ItemDetailContainer productData={productFilteredById} />
  );
};

export default Item;