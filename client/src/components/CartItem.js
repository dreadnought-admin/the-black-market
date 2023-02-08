import React from 'react'

const CartItem = ({ cartItem, removeCartItem }) => {

  const { album_name, artist_name, album_cover, price } = cartItem; 

  return (
    <div className="cart-card">
      <h3 className="heading-tertiary">{album_name}</h3>
      <h4>{artist_name}</h4>
      <img className="dish-image cart-img" src={album_cover} alt={description} /> */}
      <p className="dish-price">${price}</p>

      <button className="btn" onClick={() => removeCartItem(cartItem.id)}>
        Remove from Cart
      </button>
    </div>
  )
}

export default CartItem