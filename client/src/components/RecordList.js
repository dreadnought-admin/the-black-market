import React from 'react'
import RecordCard from './RecordCard'
import { Link } from 'react-router-dom'

const RecordList = ({records, enterRecordEdit}) => {

  const recordList = records?.map((record) => {
    return <RecordCard
    key={record.id}
    record={record}
    enterRecordEdit={enterRecordEdit}
    />
  })
  
  return (
    <div className="record-list">
      <ul className="cards">
        {recordList}
      </ul>
      <div className="new_book_button_container">
        <Link className="new_button" to="/new_sale">
          Sell a Record
        </Link>
      </div>
    </div>
  )
}
export default RecordList
