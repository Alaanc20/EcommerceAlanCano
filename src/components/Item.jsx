import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../css/Item.css';
import { getProductByCategory, ProductsData } from '../data/Products';

const Item = (product) => {
  return (
    <>
      
      <Card key={product.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} alt={product.title} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>
    <Card.Text>{product.description}</Card.Text>
    <Card.Text className="price">${product.price}</Card.Text>
    <Link to={`/item/${product.id}`} className="Option">Detalle</Link>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Stock: {product.stock}</small>
  </Card.Footer>
</Card>
    </>
  );
};

export default Item;
