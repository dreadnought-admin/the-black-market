import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ updateUser, currentUser }) => {
  
  const navigate = useNavigate();
  const handleLogOut = () => {
      fetch("/logout", {
          method: "DELETE",
      }).then((r) => {
          if (r.ok) {
              navigate("/");
              updateUser(false);
          }
      });
  }

return (
  <header>
          <nav className="navbar">
              <ul class="nav">
              <div className="buttonbar">
                  <div className="logoContainer">
                      <li><Link to="/">
                      <h1 className="home_txt">Home</h1>
                      </Link>
                      </li>
                  </div>

                  <li>
                  <NavLink to="/records">
                      <h1>Records for Sale</h1>
                  </NavLink>
                  </li>

                  <li>
                  <NavLink to="/login">
                      <h1>Login</h1>
                  </NavLink>
                  </li>
                  
                  <li>
                  <NavLink to ="/about">
                      <h1>About</h1>
                  </NavLink>
                  </li>

              {currentUser && (
                  <div>
                      <NavLink to="/profile">
                          <h2>Hello, {currentUser.username}</h2>
                      </NavLink>

                      <div>
                          <NavLink className="logout" to="/" onClick={handleLogOut}>Logout</NavLink>
                      </div>
                  </div>
              )}
                  
              </div>
              </ul>
          </nav>
  </header>
)
}

export default Navbar
