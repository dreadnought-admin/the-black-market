import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Spotify from 'react-spotify-embed'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import CommentSection from './CommentSection';


const RecordDetail = ({ records, currentUser, enterRecordEdit, handleDeleteRecord, addToCart, removeCartItem, cart, watches, setWatches, handleDeleteWatch }) => {

  console.log({watches})

  const { id } = useParams();
  const navigate = useNavigate();

  const [ recordDetail, setRecordDetail ] = useState([])

  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`/records/${id}`)
    .then((r) => r.json())
    .then((recordData) => {
      setComments(recordData.comments)
    })
  }, [])

  const handleWatch = () => {
    const watchObj = { user_id: currentUser.id, record_id: id }
    fetch("/watches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(watchObj)
    })
    .then((r) => r.json())
    .then((data) => {
      setWatches([... watches, data])
      alert("Record added to your watch collection!")
    })
  }

  const handleDeleteWatchClick = () => {
    fetch(`/watches/${id}`, {
      method: "DELETE",
    })
    handleDeleteWatch(id)
  }

  useEffect(() => {
    fetch(`/records/${id}`)
    .then((r) => r.json())
    .then((record_detail) => {
      setRecordDetail(record_detail)
    })
  }, [id])


  const isFound = cart?.some((element) => {
    if (element.id === recordDetail.id) {
      return true
    }
    return false; 
  })

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

const checkUser = () => {
  if (currentUser.id === user.id)
  return true
  else { 
    return false 
  }
} 



if (!user) return <h2>Loading...</h2>
if (!watches) return <h2>Watching...</h2>

  const handleEditClick = () => {
    enterRecordEdit(id);
  }


  return (
    <div>
    <div>
      <p>{genre_id}</p>
      <img src={album_cover}></img>
      <p>{album_name}, {artist_name}</p>
      <p>{condition}</p>
      <p>{release_date}, {release_description}</p>
      <p>{record_labels}</p>
      {spotify_link ? <Spotify link={spotify_link}/> : null }
      <p>For sale by: {user.username}</p>
      <p>Sale Price: {price} </p>
      <button className="for_sale" style={{backgroundColor: in_stock ? "pink" : "yellow"}}>In Stock: { in_stock ? "Yes" : "No" }</button>
    </div>

    <div>
      <CommentSection records={records} comments={comments} setComments={setComments} currentUser={currentUser}></CommentSection>
    </div>

    <div>
      {isFound ? (
        <button onClick={() => removeCartItem(recordDetail.id)}>
          Remove From Cart
      </button>
      ) : (
        <button onClick={() => addToCart(recordDetail.id)}>
          Add to Cart
        </button>
      )}
    </div>
    <div>
      {currentUser? (
        <button onClick={handleWatch}>👀 Watch this</button>
      ) : null }
      {currentUser? (
        <button onClick={handleDeleteWatchClick}>Remove from Watches</button>
      ) : null }
    </div>



    <div>
      {/* {user.id !== currentUser.id ? null : <button type="button" onClick={submitDelete}>Delete</button>} */}
    </div>
    <div>
    {user.id !== currentUser.id ? null : <Link to={`/records/${id}/edit`}>Edit This
    </Link>}
    </div>

    <div>
      
    </div>
    </div>
  )
}

export default RecordDetail
