import React from 'react'
import { Link } from 'react-router-dom'

const RecordCard = ({ record, handleDeleteRecord, enterRecordEdit}) => {

  // add more information 
  
  const { id, album_title, artist_name, album_cover } = record

  const handleDelete = (e) => {
    fetch(`records/${id}`, {
      method: "DELETE",
    })
    handleDeleteRecord(id)
  }

  const handleEditClick = (e) => {
    enterRecordEdit(id);
  }

  return (
    <li className="card">
      <img width="150x" height="200px" src={album_cover}></img>
      <div>
        <h2>{album_title} by {artist_name}</h2>
        
      </div>
      <Link className="detailsLink" to={`/records/${id}`}>See details...</Link>
      <div>
        <button className="button" type="button" id={id} onClick={handleDelete}>Delete</button>
      </div>
      
    </li>
  )
}

export default RecordCard
