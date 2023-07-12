import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { CartContext } from "./CartContext"
import '../css/Checkout.css'
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import QRCode from "react-qr-code"
import ReactDOM from 'react-dom'
import ReactWhatsapp from "react-whatsapp"

const Checkout = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const { addedProducts, clear } = useContext(CartContext)

  const handleChange = ev => {
    setFormValues(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: addedProducts,
      total: total(),
    }
    clear()

    Swal.fire({
      title: 'Con el siguiente código será atendido: ',
      text: 'Con el siguiente código será atendido: ',
      html: `<div id="qrcode"></div>`,
      showDenyButton: true,
      denyButtonText: `Salir`,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Chatear!',
      didOpen: () => {
        const qrcodeContainer = document.getElementById('qrcode');
        ReactDOM.render(
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '50%', width: '50%' }}
            value={generateOrderId()} // Genera un ID único para el pedido
            viewBox="0 0 256 256"
          />,
          qrcodeContainer
        );
      },
    }).then(result => {
      if (result.isConfirmed) {
        const phoneNumber = '5492616075965'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
        const message = `¡Hola! Aquí está mi código QR para el pedido. ${generateOrderId()}`; // Genera un ID único para el pedido
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      } else if (result.isDenied) {
        Swal.fire('Código no guardado', '', 'error')
      }
    })
  }

  const total = () =>
    addedProducts.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    )

  const generateOrderId = () => {
    // Aquí puedes implementar la lógica para generar un ID único para el pedido, por ejemplo, utilizando una librería como `uuid`.

    // Ejemplo:
    // import { v4 as uuidv4 } from 'uuid';
    // const orderId = uuidv4();
    // return orderId;

    // En este ejemplo, simplemente se genera un ID aleatorio utilizando el timestamp actual.
    return Date.now().toString();
  }

  if (addedProducts.length === 0) {
    return (
      <>
        <Link to="#" className="btn btn-danger" onClick={() => window.history.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
          </svg>
          Volver
        </Link>
        <h1>No posee productos en el carrito</h1>
      </>
    )
  }

  return (
    <>
      <h2 className="checkoutTitle">Ingresar datos de usuario</h2>
      <Link to="#" className="btn btn-danger checkout" onClick={() => window.history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left text-dark" viewBox="0 0 16 16">
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"></path>
        </svg>
        Volver

      </Link>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="Texto">Nombre</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.name}
            type="text"
            name="name"
            className="Completar"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="Texto">Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.email}
            type="email"
            name="email"
            className="Completar"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="Texto">Teléfono</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formValues.phone}
            type="text"
            name="phone"
            className="Completar"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={sendOrder}
          disabled={!formValues.name || !formValues.email || !formValues.phone}
        >
          {!formValues.name || !formValues.email || !formValues.phone
            ? "Completar todos los campos"
            : "Enviar"}
        </Button>
      </Form>
    </>
  )
}

export default Checkout
