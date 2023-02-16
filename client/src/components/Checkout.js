import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confirmation from './Confirmation'
import axios from 'axios'
 
const Checkout = ({ cart, cartTotal, cartNumber, currentUser, setCart, setCartNumber, setCartTotal }) => {
  
  // console.log({cart})
  // console.log({cartTotal})
  // console.log({cartNumber})
  // console.log({currentUser})
  // console.log({setCart})
  // console.log({setCartNumber})
  // console.log({setCartTotal})
  


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
    // const orderNumber = require("order-id")("key");
    // const id = orderNumber.generate();
    const id = Math.floor(Math.random() * 10000)
    setOrderId(id);
  }, [])

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("In handleplaceorder")
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

  const allCarts = cart?.map((record) => {
    return (
      <div key={record.id}> 
        <p>{record.album_name}</p>
        <img src={record.album_cover}></img>
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
          Place Order
        </button>
      </form>
      {isOpen === true? (
        <Confirmation orderId={orderId} handleClose={handleClose} currentUser={currentUser}/>)  : null 
      }
      <div>
      </div>
    </div>
  )
}

export default Checkout
