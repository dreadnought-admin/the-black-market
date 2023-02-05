import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import About from './components/About'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Navbar from './components/Navbar'
import NewRecordForm from './components/NewRecordForm'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import RecordList from './components/RecordList'
import Search from './components/Search'
import RecordDetail from './components/RecordDetail'


const App = () => {

  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [watches, setWatches] = useState([]);

  const [recordId, setRecordId] = useState(null);

  useEffect(() => {
    fetch("/authorized_user").then((r) => { 
      if (r.ok) {
        r.json().then((user) => {
          updateUser(user)
        });
      }
    });
  }, []);


  useEffect(() => {
    fetchRecords();
  }, [])

  const fetchRecords = () => {
    fetch("/records")
    .then((r) => r.json())
    .then((records) => {
      setRecords(records);
    })
  }

  console.log(records)

  // delete

  // const handleDeleteRecord = (id) => {
  //   if currentUser.id = record.user.id => { 
  //   fetch(`/records/${id}`,
  //   {
  //     method: "DELETE",
  //   }
  //   )
  //   .then((r) => r.json())
  //   .then(() => {
  //     setRecords((records) => records.filter((record) => record.id !== id ))
  //   }}
  // }

  // patch

  const onUpdateSelfRecord = (updatedRecord) => {
    const updatedRecords = records.map((uneditedRecord) => {
      if (uneditedRecord.id === updatedRecord.id) {
        return updatedRecord;
      } else {
        return uneditedRecord;
      }
    });
    setRecords(updatedRecords)
  }

  // complete patch + patch re-route

  const completeEditRecord = () => {
    setRecordId(null)
  }

  const enterRecordEdit = (recordId) => {
    setRecordId(recordId)
  }

  // set current user

  const updateUser = (user) => setCurrentUser(user);

  // search query

  const [search, setSearch] = useState("")

  const searchQuery = records.filter(record => {
    return(
      (record.album_name).toLowerCase().includes(search.toLowerCase()) ||
      (record.artist_name).toLowerCase().includes(search.toLowerCase()) ||
      (record.genre.genre).toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <h1> hello, bitch. im the app component </h1>
    </div>
  )
}

export default App

