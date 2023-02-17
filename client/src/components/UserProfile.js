import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import RecordList from './RecordList'
import { confirmAlert } from 'react-confirm-alert' 
import 'react-confirm-alert/src/react-confirm-alert.css'
import EditUserProfile from './EditUserProfile'


const UserProfile = ({ currentUser, watches }) => {
  const [userRecords, setUserRecords] = useState([]);
  const [user, setUser] = useState([])


  const { id } = useParams()


  const { username, bio, country,
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


  if (!records) return  <img className="loading" src="/images/loading.gif"></img>
  if (!watches) return  <img className="loading" src="/images/loading.gif"></img>
  if (!user) return  <img className="loading" src="/images/loading.gif"></img>

  console.log(user)
  console.log(currentUser)

  return (
    <div>
      <span><h1>Welcome back, {username}</h1><img className="avatar" src={avatar}></img></span>
      <span><h3>Your Active Sales:</h3></span>
        <RecordList records={userRecords}/>
      <div>
        <h3>Your Current Watches:</h3>
        <RecordList records={watches}/>
      </div>
      <div>
        <p><em>Albums You Might Like</em></p>
        <RecordList records={records}/> 
      </div>

      <div>
        <fieldset>
          <legend className="legend_text">About {currentUser.username}</legend>
          <div>
            <p><span>Country: {currentUser? (country) : null}</span></p>
          </div>
          <div>
            {bio}
          </div>
        </fieldset>
        <div>
          <div className="user_info">
            <p>{email? (email) : null}</p>
            <p>{instagram_handle? (instagram_handle) : null}</p>
            <p>{twitter_handle? (twitter_handle) : null}</p>
            <p>{paypal_handle? (paypal_handle) : null}</p>
          </div>
        </div>
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
