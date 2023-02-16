import React from 'react'
import CartItem from './CartItem'

const Cart = ({ cart, removeCartItem, cartRemoveAll, cartTotal, handleCheckoutClick }) => {

  

    const allCartItems = cart?.map((cartItem) => (
        <CartItem
        key={cartItem.id}
        cartItem={cartItem}
        cartRemoveAll={cartRemoveAll}
        removeCartItem={removeCartItem}
        />
      ))

      
      
      return (
        <div>
          <div>{allCartItems}</div>
          <div>
            <p></p>
            <p>Subtotal: ${cartTotal <= 0 ? "0.00" : cartTotal?.toFixed(2)}</p>
          </div>
          <button onClick={handleCheckoutClick}>Checkout</button>
          
          <button onClick={cartRemoveAll}>Remove All</button>
        </div>
      )
    }
export default Cart
