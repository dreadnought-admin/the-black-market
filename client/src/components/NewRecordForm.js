import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewRecordForm = ({ records, setRecords, currentUser }) => {

  const [formData, setFormData] = useState({
    album_name: "",
    artist_name: "",
    album_cover: "",
    condition: "",
    genre: "",
    release_date: "",
    release_description: "",
    record_labels: "",
    spotify_link: "",
    price: 0.00
  })

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const formDataBody =  { ...formData, user_id: currentUser.id }

  const onAddRecord = () => {
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
      })
      } else { 
        r.json().then((json) => setErrors(Object.entries(json.errors)))
      }
    })
  }

  const onFormChange = (e) => {
    let newForm = {... formData}
    newForm[e.target.id]= e.target.value
    setFormData(newForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord(); 
  }

  const handleChange = (e) => {
    onFormChange();
  }


  return (
    <div>
      
    </div>
  )
}

export default NewRecordForm
