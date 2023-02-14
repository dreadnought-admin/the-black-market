import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecordList from './RecordList'
import RecordDetail from './RecordDetail'


const UserProfile = ({ currentUser }) => {
  const [userRecords, setUserRecords] = useState([]);

  const { username, 
  email, twitter_handle, instagram_handle, paypal_handle } = 
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

  if (!records) return <h2>Loading features...</h2>

  if (!currentUser) return <h2>Loading user profile...</h2>


  return (
    <div>
      <span><h1>Welcome back, {username}</h1></span>
      <span><h3>Your Active Sales:</h3></span>
        <RecordList records={userRecords}/>
      <div>
        <h3>Your Current Watches:</h3>
      </div>
      <div>
        Albums You Might Like
        <RecordList records={records}/> 
      </div>
      <Link to="/edit_profile"></Link>
    </div>
  )
}

export default UserProfile
