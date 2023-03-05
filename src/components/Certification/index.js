import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Certification = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [certificate, setCertificate] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    getCertificate()
  }, [])

  const getCertificate = async () => {
    const querySnapshot = await getDocs(collection(db, 'certification'))
    setCertificate(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderCertificate = (certificate) => {
    return (
      <div className="images-container">
        {certificate.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="certificate"
              />
              <div className="content">
                <p
                  className="title"
                  style={{ 'font-family': 'Coolvetica', color: '#ffd700' }}
                >
                  {port.name}
                </p>
                <h4
                  className="description"
                  style={{ 'font-family': 'Coolvetica', color: '#ffd700' }}
                >
                  {port.description}
                </h4>
                <button
                  className="btn"
                  style={{ 'font-family': 'Coolvetica' }}
                  onClick={() => window.open(port.url)}
                >
                  View &nbsp;
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Certification'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderCertificate(certificate)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Certification
