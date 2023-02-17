import React from 'react'

const Confirmation = ({orderId, handleClose, currentUser }) => {
  return (
    <div>
      <div>
      </div>
      <div>
        <h3>Your order has been received, {currentUser.username}!</h3>
        <p>Your order number is <strong>{orderId}</strong></p>
        <p><span onClick={handleClose}> Click Here to Browse Again </span></p>
      </div>
    </div>
  )
}

export default Confirmation
