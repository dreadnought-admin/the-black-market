import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom"

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
import EditSelfRecord from './components/EditSelfRecord'


const App = () => {

  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [watches, setWatches] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

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

  // function removeCartItem(record_id) {
  //   axios.delete(`/destroy/${user.id}/${record_id}`).then(() => {
  //     setCartNumber(cartNumber - 1);
  //     let record = cart.find((element) => element.id === record_id);
  //     setCartTotal(cartTotal - dish.price);
  //     const newRecords = cart.filter((item) => item.id !== record.id);
  //     setCart(newRecords);
  //   });
  // }

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

  // edit user profile

  const onUpdateUserInfo = (user) => {
    return null
  }

  // set current user

  const updateUser = (user) => setCurrentUser(user);

  // search query

  const [search, setSearch] = useState("")

  // const searchQuery = records.filter(record => {
  //   return(
  //     (record.album_name).toLowerCase().includes(search.toLowerCase()) ||
  //     (record.artist_name).toLowerCase().includes(search.toLowerCase()) ||
  //     (record.genre.genre).toLowerCase().includes(search.toLowerCase())
  //   )
  // })

  // checkout

  // const handleCheckoutClick = () => {
  //   if (cartNumber === 0) {
  //     return;
  //   } else {
  //     navigate("/checkout");
  //   }
  // }

  // 

  console.log(currentUser)

  return (
    <div>
      <Router>

        <Navbar updateUser={updateUser} currentUser={currentUser}/>


        <Routes>
          <Route 
            exact 
            path = "/signup"
            element={<Signup updateUser={updateUser} />}
          /> 

          <Route
            exact
            path = "/login"
            element={<Login updateUser={updateUser} />}
          />

          <Route
            exact
            path = "/"
            element={<Home />}
          />

          <Route 
          exact
          path = "/records"
          element=
          {<RecordList
            records={records}
            currentUser={currentUser}
            enterRecordEdit={enterRecordEdit}
            />}
          />

          <Route
          exact 
          path = "/about"
          element={<About />}
          />

          <Route
          exact
          path = "/records/:id/edit"
          element=
          {<EditSelfRecord 
            recordId={recordId}
            completeEditRecord={completeEditRecord}
            onUpdateSelfRecord={onUpdateSelfRecord}/>}
          />

          <Route 
          exact
          path = "/records/:id"
          element=
          {<RecordDetail
            currentUser={currentUser}
          />}
          />

        {currentUser && (
          <Route
          exact
          path = "/profile"
          element=
          {<UserProfile
            currentUser={currentUser}
            />}
          />
          )}

        {currentUser && (
            <Route 
            exact
            path="/new_sale"
            element=
              {<NewRecordForm
                records={records}
                setRecords={setRecords}
                currentUser={currentUser}/>}
            />
          )}
        
        </Routes>

      </Router>
    </div>
  )
}

export default App

