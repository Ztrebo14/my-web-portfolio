import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className='bg-black rounded-xl mx-10 py-4'>
            <ul className='flex space-x-14 justify-center text-white text-xl'>
                <li>
                    <Link to={'/'} className='transition hover:text-slate-300 duration-300'>Homepage</Link>
                </li>
                <li>
                    <Link to={'aboutme-page'} className='transition hover:text-slate-300 duration-300'>About me</Link>
                </li>
                <li>
                    <Link to={'skill-page'} className='transition hover:text-slate-300 duration-300'>Skill</Link>
                </li>
                <li>
                    <Link to={'project-page'} className='transition hover:text-slate-300 duration-300'>Tech</Link>
                </li>
                <li>
                    <Link to={'contact-page'} className='transition hover:text-slate-300 duration-300'>Contact</Link>
                </li>
            </ul>
        </div>

    </>
  )
}

export default NavBar