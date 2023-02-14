import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const RecordDetail = ({ currentUser, enterRecordEdit }) => {

  const { id } = useParams();

  const [ record, setRecord ] = useState([])
  useEffect(() => {
    fetch(`/records/${id}`)
    .then((r) => r.json())
    .then((record_detail) => {
      setRecord(record_detail)
    })
  }, [id])

  const { user, genre_id, album_name, 
  artist_name, album_cover, condition, 
  release_date, release_description, record_labels, 
  spotify_link, price, in_stock } = record

console.log(user)

if (!user) return <h2>Loading...</h2>

  // useEffect(() => {
  //   fetch(`/records/${id}`)
  //   .then((r) => r.json())
  //   .then((record_detail) => {
  //     setRecordDetails(record_detail)
  //   })
  // }, [id])

  

  const handleEditClick = () => {
    enterRecordEdit(id);
  }

  console.log({price})
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
      <p>Sale Price: {price}</p>
      <button className="for_sale" style={{backgroundColor: in_stock ? "pink" : "yellow"}}>Up For Grabs?: { in_stock ? "Yes" : "No" }</button>
    </div>
    <div>
    <Link to="/records">Back to browsing</Link>
    </div>
    <Link to={`/records/${id}/edit`}>Edit This
    </Link>
    </div>
  )
}

export default RecordDetail
