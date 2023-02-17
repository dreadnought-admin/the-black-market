import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ updateUser, currentUser }) => {

  const navigate = useNavigate();

  const { username } = currentUser

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
    <div>
      <div className="logoContainer">
    
        <img className="siteLogo" src="../images/church.jpg"></img>
    
      </div>
      <NavLink className="navButton" to="/">Home •</NavLink>
      <NavLink className="navButton" to="/about">About •</NavLink>
      <NavLink className="navButton" to="/records">Records •</NavLink>
      
      {!currentUser?
        <NavLink className="navButton" to="/signup">Create Account •</NavLink> : null}
      
      {!currentUser? 
      <NavLink to="/login">Login</NavLink> : null }

      {currentUser &&(
      <NavLink className="navButton" to="/new_sale">Sell a Record • </NavLink>)}

      {currentUser && (
        <NavLink className="navButton" to="/cart">Your Cart 𖤐</NavLink>
      )}
      
      {currentUser&&(
        <NavLink className="navButton" to="/profile">Welcome back, {username} ✚</NavLink>
      )}
      {currentUser&&(
        <NavLink className="navButton" onClick={handleLogOut} to="/">Logout ☠ </NavLink>
      )}
    </div>
  )
}

export default Navbar
