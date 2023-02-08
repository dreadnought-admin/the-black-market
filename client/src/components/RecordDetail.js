import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const RecordDetail = () => {

  const [record, setRecord] = useState("")
  const { id } = useParams()

  useEffect(() => {
    fetch(`/records/${id}`)
    .then((r) => r.json())
    .then((record) => {
      setRecord(record)
    })
  }, [id])

  const { 
    album_title, 
    artist_name, 
    album_cover, 
    release_date } = record


  return (
    <div>
      <div>
        <div className="details">
          <h1 className="detail_title">{album_title}</h1>
          <h2>{artist_name}</h2>
          <h2>{release_date}</h2>
          <img src={album_cover}></img>
        </div>
      </div>
      <div className="detail_links">
        <Link to="/records">
        <button className="button" type="button">Bac to Home</button>
        </Link>
        <Link className="detail_edit" to={`/records/${id}/edit`}>
          Suggest an Edit
        </Link>
      </div>
      {/* <button type="button" onClick={handleFavorite}>Favorite</button> */}

      
    </div>
  )
}

export default RecordDetail
