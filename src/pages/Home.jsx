import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import ProductsData from '../data/Products';


const Home = () => {
  return (
    <div>
      <ItemListContainer productsData={ProductsData} />
    </div>
  );
}

export default Home;