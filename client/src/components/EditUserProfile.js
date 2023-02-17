import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'

const EditUserProfile = ({ setCurrentUser }) => {

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

  const { username, bio, country, instagram_handle, twitter_handle, paypal_handle, avatar, email, password } = 
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

  const submitChange = () => {
    confirmAlert({
      title: "Wait!",
      message: "Are you sure you want to submit these changes? You can't recover your old information.",
      buttons: [
        {
          label: "Yes, I want to PERMANENTLY change my profile!",
          onClick: () => handleSubmit()
        },
        {
          label: "No, take me back"
        }
      ]
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedProfile = {
      username: formData.username,
      bio: formData.bio,
      country: formData.country,
      instagram_handle: formData.instagram,
      twitter_handle: formData.twitter_handle,
      paypal_handle: formData.paypal_handle,
      avatar: formData.avatar,
      email: formData.email,
      password: formData.password
    }
    fetch(`/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile)
    })
    .then((r) => r.json())
    .then((updatedUser) => {
      setCurrentUser(updatedUser);
      alert("Your profile has been updated!")
      navigate("/profile")
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3>Edit profile</h3>
      </form>
      <fieldset>
        <legend className="legend_text">
          What do you want to change?
        </legend>
        <ul>
          <li>
            <label className="form_header"  htmlFor='username'>Username</label>
            <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header"  htmlFor='bio'>Bio</label>
            <input
            className="input"
            type="textarea"
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label  className="form_header" htmlFor='country'>country</label>
            <input
            className="input"
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header"  htmlFor='email'>Email</label>
            <input
            className="input"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header"  htmlFor='paypal_handle'>Paypal</label>
            <input
            className="input"
            type="text"
            id="paypal_handle"
            name="paypal_handle"
            value={paypal_handle}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header"  htmlFor='twitter_handle'>Twitter</label>
            <input
            className="input"
            type="text"
            id="twitter_handle"
            name="twitter_handle"
            value={twitter_handle}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header" htmlFor='instagram_handle'>Instagram</label>
            <input
            className="input"
            type="text"
            id="instagram_handle"
            name="instagram_handle"
            value={instagram_handle}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header"  htmlFor='avatar'>Avatar</label>
            <input
            className="input"
            type="text"
            id="avatar"
            name="avatar"
            value={avatar}
            onChange={handleChange} 
            />
          </li>
          <li>
            <label className="form_header" htmlFor='password'>Password</label>
            <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange} 
            />
          </li>
        </ul>
      </fieldset>
      <button className="button" type="submit" onClick={handleSubmit}>Submit Changes</button>
    </div>
  )
}

export default EditUserProfile
