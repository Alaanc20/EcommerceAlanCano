import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Products from '../data/Products';

const CartWidget = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "35px",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{Products.length}</span>
        </div>
    );
};

export default CartWidget;