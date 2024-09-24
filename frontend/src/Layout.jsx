import React from 'react'
import { Outlet } from 'react-router'
import "./index.css"
import Navbar from './component/navbar/Navbar'
import { NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='layout-block'>
        <div className='layout-body'>

            <Navbar></Navbar>
            <div className=' flex justify-center text-black h-8'>
                <NavLink to="/" className=" w-[50%] text-center">listView</NavLink>
                <NavLink to="/map" className=" w-[50%] text-center" >mapView</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    </div>
    </>
  )
}

export default Layout