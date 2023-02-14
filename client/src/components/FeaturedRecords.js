import React, { useEffect, useState } from 'react'
import RecordList from './RecordList'

const FeaturedRecords = () => {

  const [records, setRecords ] = useState([]);

  useEffect(() => {
    fetch("/randomized_records")
    .then((r) => { 
      if (r.ok) {
        r.json().then((records) => {
          setRecords(records)
        });
      }
    });
  }, []);

  if (!records) return <h2>Loading features...</h2>

  
  
  return (
    <div>
      <li className="cards">
        <h1>Check out this week's features</h1>
      <RecordList records={records}></RecordList>
      </li>
    </div>
  )
}

export default FeaturedRecords
