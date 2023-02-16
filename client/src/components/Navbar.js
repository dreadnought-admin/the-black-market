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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/records">Records</NavLink>
      
      {!currentUser?
        <NavLink to="/signup">Create Account</NavLink> : null}
      
      {!currentUser? 
      <NavLink to="/login">Login</NavLink> : null }

      {currentUser &&(
      <NavLink to="/new_sale">Sell a Record</NavLink>)}

      {currentUser && (
        <NavLink to="/cart">Your Cart</NavLink>
      )}
      
      {currentUser&&(
        <NavLink to="/profile">Welcome back, {username}</NavLink>
      )}
      {currentUser&&(
        <NavLink onClick={handleLogOut} to="/">Logout</NavLink>
      )}
    </div>
  )
}

export default Navbar
