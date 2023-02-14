import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const NewRecordForm = ({ records, setRecords, currentUser }) => {

const [formData, setFormData] = useState({
  artist_name: "",
  album_cover: "",
  album_name: "",
  condition: "",
  release_date: "",
  release_description: "",
  record_labels: "",
  spotify_link: "",
  price: 0
})

const [errors, setErrors] = useState([])
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();

const formDataBody = {... formData, user_id: currentUser.id }

fetch("/records", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formDataBody)
}).then((r) => {
  if (r.ok) {
    r.json().then((newRecord) => {
      setRecords([...records, newRecord])
      navigate("/records")
      console.log(newRecord)
    })
    } else { 
      r.json().then((json) => setErrors(Object.entries(json.errors)))
    }
  })
}

const handleChange = (e) => {
  let newInfo = {...formData}
  newInfo[e.target.id] = e.target.value
  setFormData(newInfo)
}


  return (
    <div>
      <fieldset>
        <legend>Sell a Record</legend>
        <form onSubmit={handleSubmit}>
        <ul>
        <li>
            <label htmlFor='artist_name'>Artist Name</label>
            <input
            className="input"
            type="text"
            name="artist_name"
            id="artist_name"
            placeholder="Enter the artist name"
            value={formData.artist_name}
            onChange={handleChange}
            />
          </li>
        <li>
            <label htmlFor='album_name'>Album Name</label>
            <input
            className="input"
            type="text"
            name="album_name"
            id="album_name"
            placeholder="Enter the album name"
            value={formData.album_name}
            onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor='album_cover'>Album Cover</label>
            <input
            className="input"
            type="text"
            name="album_cover"
            id="album_cover"
            placeholder="Enter an Album Cover (URL)"
            value={formData.album_cover}
            onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor='condition'>Condition</label>
            <input
            className="input"
            type="text"
            name="condition"
            id="condition"
            placeholder="Enter record condition (Mint, Near-Mint, Average, Below Average, Poor"
            value={formData.condition}
            onChange={handleChange}
            />
          </li>
          {/* <li>
            <label htmlFor='genre'>Genre</label>
            <input
            className="input"
            type="text"
            name="genre"
            id="genre"
            placeholder="Enter a genre"
            value={formData.genre}
            onChange={handleChange}
            />
          </li> */}
          <li>
            <label htmlFor='release_date'>Release Date</label>
            <input
            className="input"
            type="text"
            name="release_date"
            id="release_date"
            placeholder="Enter the release date"
            value={formData.release_date}
            onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor='release_description'>Release Description</label>
            <input
            className="input"
            type="textarea"
            name="release_description"
            id="release_description"
            placeholder="Release description"
            value={formData.release_description}
            onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor='record_labels'>Record Labels</label>
            <input
            className="input"
            type="text"
            name="record_labels"
            id="record_labels"
            placeholder="Enter a title"
            value={formData.record_labels}
            onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor='spotify_link'>Spotify Link (Optional)</label>
            <input
            className="input"
            type="text"
            name="spotify_link"
            id="spotify_link"
            value={formData.spotify_link}
            onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor='price'>Price</label>
            <input
            className="input"
            type="number"
            name="price"
            id="price"
            placeholder="Enter the sale price"
            value={formData.price}
            onChange={handleChange}
            />
          </li>
        </ul>
        </form>
      </fieldset>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default NewRecordForm
