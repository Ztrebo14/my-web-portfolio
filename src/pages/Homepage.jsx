import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Homepage