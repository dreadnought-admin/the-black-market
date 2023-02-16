import React from 'react'

const Confirmation = ({orderId, handleClose, currentUser }) => {
  return (
    <div>
      <div>
        <span onClick={handleClose}> x </span>
      </div>
      <div>
        <h3>Your order has been received, {currentUser.username}!</h3>
        <p>Your order number is <strong>{orderId}</strong></p>
      </div>
    </div>
  )
}

export default Confirmation
