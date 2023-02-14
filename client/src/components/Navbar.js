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
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/records">Records</NavLink>
      <NavLink to="/signup">Create Acct</NavLink>
      <NavLink to="/login">Login</NavLink>
      {currentUser&&(
        <NavLink to="/profile">Welcome back, currentUser</NavLink>
      )}
      {currentUser&&(
        <NavLink to="/">Logout</NavLink>
      )}
    </div>
  )
}

export default Navbar
