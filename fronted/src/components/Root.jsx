import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './NavBar'
import Footer from './Footer'

function Root() {
  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default Root