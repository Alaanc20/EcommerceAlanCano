import React, { useState } from 'react';
import './css/App.css';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { getProducts, getProductByCategory } from './data/Products';

const Home = () => {
  return (
    <div>
      <ItemListContainer greeting="Tienda Lebron" getProductByCategory={getProductByCategory} />
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const onAdd = (stock) => console.log("Stock actual: " + stock);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar onCategorySelect={handleCategorySelect} />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Tienda Lebron" selectedCategory={selectedCategory} getProductByCategory={getProductByCategory} />}
            />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer onAdd={onAdd} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
