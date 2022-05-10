import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'o', 'n']
  const jobArray = [
    'w','e','b', ' ', 'd','e','v','e','l','o','p','e','r','.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    setTimeout(()=>{
      document.querySelector(".solid-logo").style.display = "block"
    }, 2000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Gamer / JavaScript Beginner</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
      </div>
      <div>
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      </div>

      <Loader type="pacman"/>
      
    </>
  )
}

export default Home