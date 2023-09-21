import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
        <div className='navbar-utama'>
          <div>
            <span className='navbar-judul'>GitHub</span>
            <span className='navbar-subjudul'>Jobs</span>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
    </>
  )
}

export default Navbar