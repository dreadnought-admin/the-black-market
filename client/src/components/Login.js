import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ updateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => 
          updateUser(user));
          navigate("/")
        }
      });
    }

  return (
    <div>
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <label className="form_header" htmlFor='username'>Username</label>
          <input
          className="input"
          type="text"
          id="username"
          name="username"
          autoComplete='off'
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form_header" htmlFor='password'>Password</label>
          <input
          className="input"
          type="pasword"
          id="pasword"
          autoComplete="current-password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Login</button>

        </form>
      </div>
      
      <div className="signup">
       <h2>New here? <Link className="create_link" to="/signup">Create an Account</Link></h2> 
      </div>
      
    </div>
  )
}

export default Login
