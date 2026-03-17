import React from 'react'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Loading/Loading'

function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Suspense fallback={<Loading/>}>
            <Outlet/>
        </Suspense>
        <Footer/>
    </div>
  )
}

export default MainLayout