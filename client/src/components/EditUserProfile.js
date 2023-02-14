import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUserProfile = ({ currentUser, user, setCurrentUser }) => {

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formdata => ({ ...formData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      username: formData.username,
      bio: formData.bio,
      instagram_handle: formData.instagram,
      twitter_handle: formData.twitter_handle,
      avatar: formData.avatar,
      email: formData.email
    }
    fetch(`/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPoem)
    })
    .then((r) => r.json())
    .then((updatedUser) => {
      onUpdateUser(updatedUser);
      navigate("/profile")
    })
  }

  return (
    <div>
      
    </div>
  )
}

export default EditUserProfile
