import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 
const Checkout = ({ cart, cartTotal, cartNumber, currentUser, setCart, setCartNumber, setCartTotal }) => {
  
  const [orderId, setOrderId] = useState("")
  const [isOpen, setisOpen] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => {
    setCart([]);
    setCartNumber(0);
    setCartTotal(0);
    setisOpen(false);
    navigate("/")
  }

  useEffect(() => {
    const orderNumber = require("order-id")("key");
    const id = orderNumber.generate();
    setOrderId(id);
  }, [])

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    axios
      .post(`/order/${currentUser.id}/${orderId}/${totalWithTax}`)
      .then((r) => console.log(r))
    setisOpen(true);
  }

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const allCarts = cart.map((record) => {
    return (
      <div key={record.id}> 
        <p>{record.title}</p>
        <p>${record.price}</p>
      </div>
    )
  })

  const tax = cartTotal * 0.04;
  const totalWithTax = tax + cartTotal
  
  return (
    <div>
      <div>
        <h2>Your order</h2>
        <h3>Items: {cartNumber}</h3>
        <div>{allCarts}</div>

        <div>
          <p>Subtotal: {cartTotal.toFixed(2)}</p>
          <p>Tax: {tax.toFixed(2)}</p>
          <p>Total: {totalWithTax.toFixed(2)}</p>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder}>
        <button type="submit">
          Place ORder
        </button>
      </form>
      {isOpen === true? (
        console.log("fuck you") ) : null 
      }
      <div>
      </div>
    </div>
  )
}

export default Checkout
