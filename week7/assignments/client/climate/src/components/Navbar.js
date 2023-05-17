import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider.js'

export default function Navbar(){
  const { logout, token } = useContext(UserContext)
  return (
    <div className="navbar">
      <Link to="/profile" onClick={() => {window.location.href="/profile"}}>Profile</Link>
      <Link to="/public" onClick={() => {window.location.href="/public"}}>Public</Link>
      { token && <button onClick={logout}>Logout</button>}
    </div>
  )
}