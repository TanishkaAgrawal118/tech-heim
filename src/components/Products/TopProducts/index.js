import React from 'react'
import { Container } from 'react-bootstrap'
import { dropdownProduct } from '../../constants/constant'
import './topProducts.css'

const TopProduct = () => {
  return (
    <Container>
      <div className="topProducts-wrapper">
        <div className='topProducts'>
          {dropdownProduct.map((item) => (
            <div key={item.title} className='products'>
              <img src={item.icon} alt={item.title} />
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default TopProduct
