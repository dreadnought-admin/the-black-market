import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import About from './components/About'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import Navbar from './components/Navbar'
import NewRecordForm from './components/NewRecordForm'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import RecordList from './components/RecordList'
import Search from './components/Search'
import RecordDetail from './components/RecordDetail'
import FeaturedRecords from './components/FeaturedRecords'

import EditSelfRecord from './components/EditSelfRecord'
import EditUserProfile from './components/EditUserProfile'
// import Watches from './components/Watches'


const App = () => {

  const [records, setRecords] = useState([]);
  const [recordDetail, setRecordDetail] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);
  const [watches, setWatches] = useState([]);

  const [recordId, setRecordId] = useState(null);

  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [orderIndex, setOrderIndex] = useState("All");

  const navigate = useNavigate();

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

  useEffect(() => {
    fetch("/shopping_cart")
    .then((r) => r.json())
    .then((data) => {
      setCartNumber(data.total_items);
      setCartTotal(data.total_price);
      setCart(data.records)
    })
  }, [])

  const addToCart = (record_id) => {
    axios.post(`/new/${currentUser.id}/${record_id}`)
    .then((r) => {
      setCartNumber(cartNumber + 1);
      setCart((cart) => [... cart, r.data]);
      setCartTotal(cartTotal + r.data.price)
    })
  }



  const cartRemoveAll = () => {
    axios.delete(`/delete/${currentUser.id}`)
    .then(() => {
      setCartNumber(0);
      setCart([]);
      setCartTotal(0);
    })
  }

  const removeCartItem = (record_id) => {
    axios.delete(`/destroy/${currentUser.id}/${record_id}`)
    .then(() => {
      setCartNumber(cartNumber - 1);
      const record = cart.find((element) => element.id === record_id)
      setCartTotal(cartTotal - record.price);
      const newRecords = cart.filter((item) => item.id !== record.id)
      setCart(newRecords);
    })
  }

  const handleCheckoutClick = () => {
    if (cartNumber === 0) {
      return null;
    } else {
      navigate("/checkout")
    }
  }

  // delete

const handleDeleteRecord = (deleted) => {
 const updatedRecords = records.filter((record) => record.id !== deleted.id)
 setRecords(updatedRecords)
}
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
      (record.artist_name).toLowerCase().includes(search.toLowerCase())
    )
  })

  

  return (
    <div>

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
          removeCartItem={removeCartItem}
          cartRemoveAll={cartRemoveAll}
          handleCheckoutClick={handleCheckoutClick}
          cartTotal={cartTotal}
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
          <RecordList 
          records={searchQuery}
          handleDeleteRecord={handleDeleteRecord}

          addToCart={addToCart}
          removeCartItem={removeCartItem}
          cart={cart}
          currentUser={currentUser}
          /></>}
          />

          <Route
          exact path = "/users/:id/edit"
          element = {
          <EditUserProfile 
          user={currentUser} 
          setCurrentUser={setCurrentUser}/>}
          />

          <Route
          exact path = "/records/:id/edit"
          element = {<EditSelfRecord onUpdateSelfRecord={onUpdateSelfRecord}/>}
          />

          
          <Route
          exact path = "/records/:id"
          element = {<RecordDetail 
          currentUser={currentUser}
          record={recordDetail}
          setRecordDetail={setRecordDetail}
          handleDeleteRecord={handleDeleteRecord}
          
          addToCart={addToCart}
          removeCartItem={removeCartItem}
          cart={cart}
          />}
          />

          {/* {currentUser && (
            <Route 
            exact path = "/user_favorites"
            element = {<Watches currentUser={currentUser} />}
            />
          )} */}

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
            element = {<UserProfile 
            currentUser={currentUser}/>}
            /> 
          )}

        </Routes>
        <Footer />
    </div>
  )
}

export default App

