import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const RecordDetail = ({ currentUser, enterRecordEdit, handleDeleteRecord }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [ recordDetail, setRecordDetail ] = useState([])
  const [ comment, setComment ] = useState([])

  useEffect(() => {
    fetch(`/records/${id}`)
    .then((r) => r.json())
    .then((record_detail) => {
      setRecordDetail(record_detail)
    })
  }, [id])

  

  const handleDelete = () => {
    fetch(`/records/${recordDetail.id}`, {
      method: "DELETE",
    })
    .then(() => handleDeleteRecord(recordDetail))
    navigate("/records")
  }

  const { user, genre_id, album_name, 
  artist_name, album_cover, condition, 
  release_date, release_description, record_labels, 
  spotify_link, price, in_stock } = recordDetail

  
const submitDelete = () => {
  confirmAlert({
    title: "WARNING!",
    message: "Once you delete your sale, it cannot be undone!",
    buttons: [
      {
        label: "Yes, I want to PERMANENTLY delete my listing!",
        onClick: () => handleDelete()
      },
      {
        label: "No, take me back"
      }
    ]
  });
}


if (!user) return <h2>Loading...</h2>

  const handleEditClick = () => {
    enterRecordEdit(id);
  }

  // in stock will need to be a state function

  return (
    <div>
    <div>
      <p>{genre_id}</p>
      <img src={album_cover}></img>
      <p>{album_name}, {artist_name}</p>
      <p>{condition}</p>
      <p>{release_date}, {release_description}</p>
      <p>{record_labels}</p>
      <a href={spotify_link}></a>
      <p>For sale by: {user.username}</p>
      <p>Sale Price: {price} </p>
      <button className="for_sale" style={{backgroundColor: in_stock ? "pink" : "yellow"}}>Up For Grabs?: { in_stock ? "Yes" : "No" }</button>
    </div>
    <div>
      {user.id != currentUser.id ? null : <button type="button" onClick={submitDelete}>Delete</button>}
    </div>
    <div>
    {user.id != currentUser.id ? null : <Link to={`/records/${id}/edit`}>Edit This
    </Link>}
    </div>

    <div>
      
    </div>
    </div>
  )
}

export default RecordDetail
