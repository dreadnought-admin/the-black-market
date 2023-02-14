import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const initialState = {
  album_name: "",
  artist_name: "",
  release_date: "",
  album_cover: ""
}


const EditSelfRecord = ({ onUpdateSelfRecord }) => {

  
  const [formData, setFormData] = useState(initialState)
  
    const { album_name, artist_name, condition, release_description, 
      release_date, album_cover, spotify_link, record_labels, price } = formData
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`/records/${id}`)
      .then((r) => r.json())
      .then((record) => setFormData(record))
    }, [id])
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(formData => ({ ...formData, [name]: value }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedRecord = {
        album_name: formData.album_name,
        artist_name: formData.artist_name,
        release_date: formData.release_date,
        album_cover: formData.album_cover

      }
      fetch(`/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecord)
      })
      .then((r) => r.json())
      .then((updatedRecord) => {
        onUpdateSelfRecord(updatedRecord);
        navigate("/records")
      })
    }
    
      return (
        <div className="form_container">
          <form onSubmit={handleSubmit} autoComplete="off">
            <h3>Edit Record</h3>
            <fieldset>
              <legend className="legend-text">
                What do you want to change?
              </legend>
              <ul className="">
                <li>
                  <label className="form_header" htmlFor='album_name'>Album Name:</label>
                  <input
                  className="input"
                  type="text"
                  id="album_name"
                  name="album_name"
                  value={album_name}
                  onChange={handleChange}
                  />
                </li>

                <li>
                  <label className="form_header" htmlFor='artist_name'>Artist:</label>
                  <input
                  className="input"
                  type="text"
                  id="artist_name"
                  name="artist_name"
                  value={artist_name}
                  onChange={handleChange}
                  />
                </li>
              
                <li>
                  <label className="form_header" htmlFor='release_date'>Release Date</label>
                  <input
                  className="input"
                  type="text"
                  id="release_date"
                  name="release_date"
                  value={release_date}
                  onChange={handleChange}
                  />
                </li>
  
  
                <li>
                  <label className="form_header" htmlFor='album_cover'>album cover</label>
                  <input
                  type="text"
                  id="album_cover"
                  name="album_cover"
                  value={album_cover}
                  onChange={handleChange}
                  />
                </li>

                <li>
                  <label className="form_header" htmlFor='condition'>condition</label>
                  <input
                  type="text"
                  id="condition"
                  name="condition"
                  value={condition}
                  onChange={handleChange}
                  />
                </li>

                <li>
                  <label className="form_header" htmlFor='release_description'>description</label>
                  <input
                  type="textarea"
                  id="release_description"
                  name="release_description"
                  value={release_description}
                  onChange={handleChange}
                  />
                </li>

                <li>
                  <label className="form_header" htmlFor='spotify_link'>spotify</label>
                  <input
                  type="text"
                  id="spotify_link"
                  name="spotify_link"
                  value={spotify_link}
                  onChange={handleChange}
                  />
                </li>

                <li>
                  <label className="form_header" htmlFor='record_labels'>record label</label>
                  <input
                  type="text"
                  id="record_labels"
                  name="record_labels"
                  value={record_labels}
                  onChange={handleChange}
                  />
                </li>

                <li>
                  <label className="form_header" htmlFor='price'>price</label>
                  <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  />
                </li>
    
              </ul>
              <button className="button" type="submit">Update</button>
            </fieldset>
          </form>
        </div>
      )
    }

export default EditSelfRecord
