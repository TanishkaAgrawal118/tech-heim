import React from 'react'
import NavBar from '../LandingPages/Navbar/NavBar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router'
import ViewProduct from './ViewProduct'
import TopProduct from './TopProducts'

const Product = () => {
  return (
    <>
        <NavBar/>
        <Container>
        <div className="navigation">
            <Link to="/" style={{ color: "#717171" }}>
              Home
            </Link>{" "}
            &gt;{" "}
            <Link className="active" to="/products">
              Products
            </Link>
          </div>
          <TopProduct/>
          <ViewProduct/>
        </Container>
    </>
  )
}

export default Product
