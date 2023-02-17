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

  if (!records) return  <img className="loading" src="/images/loading.gif"></img>

  
  
  return (
    <div className="featured">
      <li className="cards">
        <div className="featured_container"><h1 className="featured_text">Check out this week's features</h1></div>
      <RecordList records={records}></RecordList>
      </li>
    </div>
  )
}

export default FeaturedRecords
