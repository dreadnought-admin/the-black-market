import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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

  const handleDeleteRecord = (id) => {
    const newRecordList = records.filter((record) => 
    record.id !== id )
    setRecords(newRecordList)
  }



  const updateUser = (user) => setCurrentUser(user);

  return (
    <div>
      <h1> hello, bitch</h1>
    </div>
  )
}

export default App

