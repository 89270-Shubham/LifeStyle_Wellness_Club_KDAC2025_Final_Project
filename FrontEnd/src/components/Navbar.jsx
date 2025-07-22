import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const onLogout = ()=>{
        console.log("Logged Out")
        navigate("/")
    }






  return (
       
    <nav
      className='navbar navbar-expand-lg bg-primary'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/home'
        >
          Club
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/home/events'
              >
               Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/home/villas'
              >
                Villas
              </Link>
            </li>
             <li className='nav-item'>
              <Link
                className='nav-link'
                to='/home/profile'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/about-us'
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/contact-us'
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/home/manage-members'
              >
                Manage Members
              </Link>
            </li>
              <li className='nav-item'>
              <Link
                className='nav-link'
                to='/home/health'
              >
                Health Status
              </Link>
            </li>
            <li className='nav-item'>
              <button
                onClick={onLogout}
                className='btn'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbar
