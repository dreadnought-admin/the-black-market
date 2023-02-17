import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Black Market</h1>
      <h3>Browse, sell, and discover new darque musik</h3>
      <div className="iconContainer">
            <a target="_blank" href="https://www.youtube.com/watch?v=w9DPEkguMqE&ab_channel=kamerarosak">
                <button className="icon">🧛🏻</button>
            </a>
            <a target="_blank" href="https://www.youtube.com/watch?v=fcF8DaOSasY&ab_channel=SpinningTheVinyl101">
                <button className="icon">🕷</button>
            </a>
            <a target="_blank" href="https://www.youtube.com/watch?v=TjvvK-Rj0WI&ab_channel=SiouxsieBansheesVEVO">
                <button className="icon">🦇</button>
            </a>
      </div>
      <div className="create_or_sign">
       <h2>New here?</h2> <Link className="navButton" to="/signup">Create an Account</Link> <p>𓆩♱𓆪 Returning Bat?</p> <Link className="navButton" to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Home
