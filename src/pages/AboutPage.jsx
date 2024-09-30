import React from 'react'
import robertme from '../assets/images/robert_abon.JPG'
import fbIcon from '../assets/icons/icons8-facebook-120.png'
import ghIcon from '../assets/icons/icons8-github-120.png'
import Card from '../components/Card'
import TypewritterEffect from '../components/TypewritterEffect'

const AboutPage = () => {
  return (
    <>
      <h1>About me</h1>
      <div className="grid grid-cols-2">
          <Card >
            <img 
                src={robertme} 
                alt="robert-abon.image" 
                height={100} 
                width={100}
                className='rounded-full'
            />
            <p className='text-5xl my-6'><b>Robert Bragais Abon</b></p>
            <p className='text-2xl'>Aspiring Front-End Developer</p>
            <TypewritterEffect 
              textToType={'Web Developer || React Developer'} 
              typeSpeed={150} 
              deletingSpeed={90} 
              pauseDuration={1000}
            />
            <ul className='flex flex-row'>
              <li className='mx-2'>
                <a href="https://web.facebook.com/TreborZ14">
                <img src={fbIcon} alt="facebook" title='facebook' height={100} width={100} />
                </a>
              </li>
              <li className='mx-2'>
                <a href="https://github.com/Ztrebo14">
                  <img src={ghIcon} alt="github" title='Github' height={100} width={100} />
                </a>
              </li>
              <li></li>
            </ul>
          </Card>
          
          <p>
              Greetings fellow Developers, I am Robert B. Abon aspiring
              to be an Front-end Dev. A proudly graduate of Information 
              System in Technological University of the Philippines - 
              Manila Campus. A passionate programmer and likes learning 
              in the world of technology specifically in Web Development.
          </p>
      </div>
    </>
  )
}

export default AboutPage