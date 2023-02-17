import React from 'react'
import RecordCard from './RecordCard'
import { Link } from 'react-router-dom'

const RecordList = ({ currentUser, records, enterRecordEdit, handleDeleteRecord, addToCart, removeCartItem, cart }) => {

  const recordList = records?.map((record) => {
    return <RecordCard
    key={record.id}
    record={record}
    enterRecordEdit={enterRecordEdit}
    addToCart={addToCart}
    removeCartItem={removeCartItem}
    cart={cart}
    currentUser={currentUser}
    />
  })

  if (!records) return <img className="loading" src="/images/loading.gif"></img>


  return (
    <div>
      <ul className="cards">
        {recordList}
      </ul>
    </div>
  )
}

export default RecordList
