import { useState, useEffect } from "react"
import '../css/ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { ProductsData } from '../data/Products';
const ItemDetailContainer = ({ onAdd }) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProductById = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(ProductsData.find((prod) => prod.id === Number(id)));
                }, 500);
            });
        };

        getProductById().then((prod) => setProduct(prod));
    }, [id])

    return (
        <div className="ItemDetailContainer">
            {Object.keys(product).length > 0 ? (
                <ItemDetail product={product} onAdd={onAdd} />
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default ItemDetailContainer
