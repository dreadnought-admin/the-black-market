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
import FeaturedRecords from './components/FeaturedRecords'
import Cart from './components/Cart'
// import CartItem from './components/CartItem.js'
import EditSelfRecord from './components/EditSelfRecord'
import Watches from './components/Watches'


const App = () => {

  const [records, setRecords] = useState([]);
  const [recordDetail, setRecordDetail] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [watches, setWatches] = useState([]);

  const [recordId, setRecordId] = useState(null);

  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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

  const EditUserProfile = () => {
    console.log("It's a function")
  }

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
      (record.artist_name).toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <Router>

        <Navbar updateUser={updateUser} currentUser={currentUser} />

        <Routes>

          <Route
          exact path = "/signup"
          element = {<Signup updateUser={updateUser}/>}
          />

          <Route
          exact path = "/login"
          element = {<Login updateUser={updateUser} />}
          /> 

          <Route
          exact path = "/about"
          element = {<About />}
          />

          <Route
          exact path = "/cart"
          element = {<Cart cart={cart} 
          />}
          />

          <Route
          exact path = "/checkout"
          element = {<Checkout cart={cart} 
          cartTotal={cartTotal} 
          cartNumber={cartNumber} 
          currentUser={currentUser} 
          setCart={setCart} 
          setCartNumber={setCartNumber} 
          setCartTotal={setCartTotal}/>}
          />

          <Route
          exact path = "/"
          element = {<>
          <FeaturedRecords records={records} setRecords={setRecords}/>
          <Home records={records} /></>}
          />
          
          <Route
          exact path = "/records"
          element = {<>
          <Search search={search} setSearch={setSearch} />
          <RecordList records={searchQuery}/></>}
          />

          <Route
          exact path = "/users/:id/edit"
          element = {<EditUserProfile />}
          />

          <Route
          exact path = "/records/:id/edit"
          element = {<EditSelfRecord />}
          />

          <Route
          exact path = "/records/:id"
          element = {<RecordDetail 
          currentUser={currentUser}
          record={recordDetail}
          setRecordDetail={setRecordDetail}/>}
          />

          {currentUser && (
            <Route 
            exact path = "/user_favorites"
            element = {<Watches currentUser={currentUser} />}
            />
          )}

          {currentUser && (
            <Route
            exact path = "/new_sale"
            element = {<NewRecordForm 
              records={records}
              setRecords={setRecords}
              currentUser={currentUser} />}
            /> 
          )}

          {currentUser && (
            <Route
            exact path = "/profile"
            element = {<UserProfile currentUser={currentUser} />}
            /> 
          )}

        </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App

