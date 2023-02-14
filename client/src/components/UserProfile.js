import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import RecordList from './RecordList'
import { confirmAlert } from 'react-confirm-alert' 
import 'react-confirm-alert/src/react-confirm-alert.css'
import EditUserProfile from './EditUserProfile'


const UserProfile = ({ currentUser }) => {
  const [userRecords, setUserRecords] = useState([]);
  const [user, setUser] = useState([])


  const { id } = useParams()


  const { username, bio,
  email, twitter_handle, instagram_handle, paypal_handle, avatar } = 
  currentUser

  useEffect(() => {
  fetch(`/user_records/${currentUser.id}`)
  .then((r) => r.json())
  .then((userRecords) => setUserRecords(userRecords));
  }, [currentUser]);

  const [records, setRecords ] = useState([]);

  useEffect(() => {
    fetch("/randomized_records")
    .then((r) => { 
      if (r.ok) {
        r.json().then((records) => {
          setRecords(records)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/users/${id}`)
    .then((r) => r.json())
    .then((user) => {
      setUser(user)
    })
  }, [id])


  if (!records) return <h2>Loading features...</h2>

  if (!user) return <h2>Loading user profile...</h2>

  console.log(avatar)

  return (
    <div>
      <span><h1>Welcome back, {username}</h1><img src={avatar}></img></span>
      <span><h3>Your Active Sales:</h3></span>
        <RecordList records={userRecords}/>
      <div>
        <h3>Your Current Watches:</h3>
      </div>
      <div>
        Albums You Might Like
        <RecordList records={records}/> 
      </div>
      <div>
        <fieldset>
          <legend>About {currentUser.username}</legend>
          <div>
            {bio}
          </div>
        </fieldset>
      </div>
      <div>
      {<Link to={`/users/${user.id}/edit`}>
        <button type="button">Edit Your Profile</button>
      </Link>}
      </div>

    </div>
  )
}

export default UserProfile
