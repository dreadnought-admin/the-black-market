import React from 'react'

const CartItem = ({ cartItem, removeCartItem }) => {

  const { album_name, album_cover, price } = cartItem;
  
  return (
    <div>
      <h3>{album_name}</h3>
      <img height="50px" width="50px" src={album_cover}></img>
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

