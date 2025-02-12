import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_bd1n1qc',
        'template_6ollkjm',
        form.current,
        'KGyDqdtcYX6yHk5kv'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ fontFamily: 'system-ui', fontSize: '14px' }}>
            I am interested in new opportunities - especially on exciting
            technologies or large projects. However, if you have any other
            requests or questions, don't hesitate to contact me using below form
            either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    style={{ fontFamily: 'system-ui', fontSize: '14px' }}
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    style={{ fontFamily: 'system-ui', fontSize: '14px' }}
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    style={{ fontFamily: 'system-ui', fontSize: '14px' }}
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    style={{
                      fontFamily: 'system-ui',
                      fontSize: '14px',
                      resize: 'none',
                    }}
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    style={{
                      fontFamily: 'system-ui',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div
          className="info-map"
          style={{ fontFamily: 'system-ui', fontSize: '14px' }}
        >
          Souvik Mitra,
          <br />
          India,
          <br />
          56 Abinash Chandra Banerjee Lane <br />
          Kolkata - 700010 <br />
          <br />
          <span style={{ fontFamily: 'system-ui', fontSize: '14px' }}>
            <a style={{ fontFamily: 'system-ui', fontSize: '14px', color: 'white' }} href="mailto:msouvik38@gmail.com">msouvik38@gmail.com</a>
          </span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[22.566052163470165, 88.39264719753113]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.566052163470165, 88.39264719753113]}>
              <Popup>Souvik lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
