import { useState } from "react"
import '../css/ItemCount.css'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ItemCount = ({initial, stock, onAdd}) => {

	const [counter, setCounter] = useState(0)



	const handlerIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handlerDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}
    return(
		<div className="contador">
			<Row>
				<Col><button className="Button" onClick={handlerDecreaseCount}>-</button></Col>
				<Col><h4>{counter}</h4></Col>
				<Col><button className="Button" onClick={handlerIncreaseCount}>+</button></Col>
			</Row>
			<Row>
				<button className="Button" style={{ margin: '0.5rem' }} onClick={() => onAdd(counter)}>Agregar al Carrito</button>
			</Row>
	    </ div>

    )
} 
export default ItemCount