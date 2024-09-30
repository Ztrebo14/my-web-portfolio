import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import SkillPage from '../pages/SkillPage'
import ProjectPage from '../pages/ProjectPage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'

const router = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/'  element={<App />}>
                  <Route index element={<AboutPage />} />
                  <Route path='skill-page' element={<SkillPage />} />
                  <Route path='project-page' element={<ProjectPage /> } />
                  <Route path='contact-page' element={<ContactPage /> } />
                </Route>
              {/* <Route path='/' element={<App />} />
              <Route path='/aboutme-page' element={<AboutPage />} />
              <Route path='/skill-page' element={<SkillPage />} />
              <Route path='/project-page' element={<ProjectPage />} />
              <Route path='/contact-page' element={<ContactPage />} /> */}
                
            </Routes>
        </Router>
    </>
  )
}

export default router