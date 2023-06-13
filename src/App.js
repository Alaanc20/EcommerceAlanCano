import React from 'react';
import './App.css';
import Home from './pages/Home';
import ProductsData from './data/Products';
import NavBar from './components/NavBar';
import itemId from './pages/Item';
import categoryId from './pages/Category';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home productsData={ProductsData} />
    </div>
  );
}

export default App;