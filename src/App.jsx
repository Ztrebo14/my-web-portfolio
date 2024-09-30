import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='min-h-screen bg-emerald-200'>
        <header>
          <nav><NavBar /></nav>
        </header>
        <main>
          <Outlet />  
        </main>
        {/* <section>
        </section> */}
      </div>
    </>
  )
}

export default App
