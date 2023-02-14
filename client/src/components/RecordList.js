import React from 'react'
import RecordCard from './RecordCard'
import { Link } from 'react-router-dom'

const RecordList = ({ records, enterRecordEdit }) => {

  const recordList = records?.map((record) => {
    return <RecordCard
    key={record.id}
    record={record}
    enterRecordEdit={enterRecordEdit}/>
  })



  return (
    <div>
      <ul className="cards">
        {recordList}
      </ul>
    </div>
  )
}

export default RecordList
