import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ fontFamily: 'system-ui', fontSize: '14px' }}>
            I'm a very ambitious front-end developer working in one of the
            established IT company in India. I am currently leading a fabulous
            team, dealing with lots of opportunities to work along with the
            latest technologies which has created a really challenging &
            exciting work environement.
          </p>
          <p align="LEFT" style={{ fontFamily: 'system-ui', fontSize: '14px' }}>
            I'm quiet confident, naturally curious in learing new things in the
            tech world, and perpetually working on improving my missing links
            one at a time.
          </p>
          <p style={{ fontFamily: 'system-ui', fontSize: '14px' }}>
            If I need to define myself in one sentence that would be a honest
            and friendly person, a sports fanatic, a enthusiast chef, a
            passionate artist and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          <div className="glow-body">
            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>
            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>

            <div className="glowing">
              <span style={{ '--1': 1 }}></span>
              <span style={{ '--1': 2 }}></span>
              <span style={{ '--1': 3 }}></span>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
