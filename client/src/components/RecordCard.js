import React from 'react'
import { Link } from 'react-router-dom'

const RecordCard = ({ currentUser, record, handleDeleteRecord, enterRecordEdit }) => {


  const { id, user: { username }, genre_id, album_name, 
  artist_name, album_cover, condition, 
  release_date, release_description, record_labels, 
  spotify_link, price, in_stock } = record

  const handleDelete = () => {
    fetch(`records/${id}`, {
      method: "DELETE",
    })
    handleDeleteRecord(id)
  }

  const handleEditClick = () => {
    enterRecordEdit(id);
  }

  const logIdClick = (e) => {
    console.log(`${id}`)
  }
  

  return (
    <div>
      <li className="card">
      <Link to={`/records/${id}`}>
        <img onClick={logIdClick} height="75x" width="75px" src={album_cover}></img>
        <p>{album_name}</p>
        <p>{artist_name}</p>
        
      </Link>
      </li>
    </div>
  )
}

export default RecordCard
