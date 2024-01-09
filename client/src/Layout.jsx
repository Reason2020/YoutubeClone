import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import './App.scss'

const Layout = () => {
  return (
    <div className='main'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout