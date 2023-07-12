// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../css/ItemListContainer.css';
import CartView from './CartView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProductByCategory, getProducts } from '../data/Products';

const ItemListContainer = ({ greeting, selectedCategory }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1365);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let productsData = [];
      if (selectedCategory) {
        productsData = await getProductByCategory(selectedCategory);
      } else {
        productsData = await getProducts();
        if (id) {
          productsData = productsData.filter((item) => item.category === id);
        }
      }
      setList(productsData);
    };

    fetchData();
  }, [ selectedCategory]);

  return (
    <>
      <div className="greetingContainer">
        <h1 className="display-6">Bienvenido, {greeting}</h1>
      </div>

      {isSmallScreen ? (
        <div className="containerMobile">
          <ItemList list={list} />
        </div>
      ) : (
        <>
          <Row>
            <Col xs={12} md={8}>
              <div className="container">
                <ItemList list={list} />
              </div>
            </Col>
            <Col className="cartCol" xs={6} md={4}>
              <CartView />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
