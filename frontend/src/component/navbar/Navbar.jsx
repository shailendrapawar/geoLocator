import React from 'react'
import "./navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className='navbar-body bg-blue-700 text-white h-16'>
        <div className='flex items-center h-full'>
            <RxHamburgerMenu className='h-10 w-10 mr-4'/>
            <h2 className=''>Attendance</h2>
        </div>
    </div>
  )
}

export default Navbar