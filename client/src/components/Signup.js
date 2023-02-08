import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({ updateUser }) => {


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { username, email, password } = formData

  const handleUpdateUser = (e) => {
    
    const user = {
      username,
      email,
      password
    }
    
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          updateUser(user)
          navigate("/")
        });
      } else {
        r.json().then((json) => setErrors(Object.entries(json.errors)))
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser();
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value});
  }


  return (
    <div>
      <div>
        <div className="signup_container">
          <form onSubmit={onSubmit}>
            <ul>
              <li>
                <label className="form_header" htmlFor='password'>Username</label>
                <input
                className="input"
                type="text"
                name="username"
                id="username"
                placeholder=""
                onChange={handleChange}
                />
              </li>
              <li>
                <label className="form_header" htmlFor='password'>Email</label>
                <input
                className="input"
                type="text"
                name="email"
                id="email"
                placeholder="To what email shall we send letters?"
                onChange={handleChange}
                />
              </li>
              <li>
                <label className="form_header" htmlFor='password'>Password</label>
                <input
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder=""
                onChange={handleChange}
                />
              </li>
            </ul>

            <div className="signup_button">
              <button
                className="button"
                type="submit"
                value="Submit">Sign up</button>
            </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default Signup
