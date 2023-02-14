import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ updateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


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
      <form onSubmit={handleSubmit}>
        <h1>This is the temporary Login Text</h1>
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
          <h1>And of course, your password</h1>
          <input
          className="input"
          type="pasword"
          id="pasword"
          autoComplete="current-password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          />
      </form>
      <div>
        <h1>But if not, then <Link to="/signup">sign up!</Link></h1>
        
      </div>
    </div>
  )
}

export default Login
