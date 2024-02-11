import React from 'react'
import "./Navbar.css"
import NavLogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg"
const Navbar = () => {
  return (
      <div className='navbar'>
          <img src={NavLogo} className='nav-logo' alt="logo" />
          <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar