import React from 'react'
import NavBar from '../LandingPages/Navbar/NavBar'
import { Container } from 'react-bootstrap'
import frequently from '../../../src/assets/FAQ.svg'

const FAQ = () => {
  return (
   <>
    <NavBar/>
    <Container>
      <div>
      <p>Home</p> <p>FQA</p>
      </div>
      <img src={frequently} alt='FAQ' />
    </Container>
   </>
  )
}

export default FAQ
