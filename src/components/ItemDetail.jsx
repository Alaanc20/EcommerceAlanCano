import ItemCount from './ItemCount';
import '../css/ItemDetail.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        addItem(product, quantity)
    }

    return (
        <article className="CardItem">
            <div className='backButton'>
                <Link to="#" className="btn btn-danger" onClick={() => window.history.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left text-dark" viewBox="0 0 16 16">
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
        </svg>
        Volver
                </Link>
            </div>
            <img src={product.image} alt={product.title} className="ItemImg" />
            <h2 className="ItemHeader">{product.title}</h2>
            <section>
                <p className="Info">
                    {product.description}
                </p>
                <p className="InfoPrice">
                    ${product.price}
                </p>
                <div>
                    <div className='row justify-content-between'>
                        <div className="col-4 two">
                            {quantityAdded > 0 ? (
                                <Link to="/cart" style={{ margin: '10px 0px' }} className='Option'>Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail
