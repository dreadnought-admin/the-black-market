import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUserProfile = ({ currentUser }) => {

  const initialProfile = {
    username: "",
    bio: "",
    country: "",
    instagram_handle: "",
    twitter_handle: "", 
    avatar: "",
    email: ""
  }
  

  const [formData, setFormData] = useState(initialProfile)

  const { username, bio, country, instagram_handle, twitter_handle, avatar, email } = 
  formData

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${id}`)
    .then((r) => r.json())
    .then((user) => setFormData(user))
  }, [id])

  // const allowEditUser = () => {
  //   if currentUser.id == `${$}`
  //     return 
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formdata => ({ ...formData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPoem = {
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
      year_published: formData.year_published,
      poem_txt: formData.poem_txt,
      poem_type: formData.poem_type
    }
    fetch(`/poems/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPoem)
    })
    .then((r) => r.json())
    .then((updatedPoem) => {
      onUpdatePoem(updatedPoem);
      navigate("/poems")
    })
  }

  return (
    <div>
      
    </div>
  )
}

export default EditUserProfile
