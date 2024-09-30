import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutPage from '../pages/AboutPage'
import SkillPage from '../pages/SkillPage'
import ProjectPage from '../pages/ProjectPage'
import ContactPage from '../pages/ContactPage'

function App() {

  return (
    <>
      <div className='min-h-screen bg-emerald-200'>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage /> } >
              <Route index element={<AboutPage />} />
              <Route path='skill-page' element={<SkillPage />} />
              <Route path='project-page' element={<ProjectPage />} />
              <Route path='contact-page' element={<ContactPage />} /> 
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
