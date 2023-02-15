import React from 'react'

const CartItem = ({ cartItem, removeCartItem }) => {

  const { title, price } = cartItem;

  return (
    <div>
      <h3>{title}</h3>
      <p>${price}</p>
      <div>
        <button onClick={() => removeCartItem(cartItem.id)}>
          Remove from Cart
        </button>
      </div>
    </div>

  )
}

export default CartItem

