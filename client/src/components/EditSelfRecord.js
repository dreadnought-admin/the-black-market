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
  
    const { album_name, artist_name, release_date, album_cover } = formData
  
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
                  <label className="form_header" htmlFor='album_name'>Title:</label>
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
                  <label className="form_header" htmlFor='artist'>Artist:</label>
                  <input
                  className="input"
                  type="text"
                  id="artist"
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
                  <label className="form_header" htmlFor='cover_img'>Cover Image URL</label>
                  <input
                  type="text"
                  id="cover_img"
                  name="cover_img"
                  value={album_cover}
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
