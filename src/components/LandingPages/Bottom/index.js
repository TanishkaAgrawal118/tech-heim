import React from 'react'
import './bottom.css'
import tech from '../../../assets/tech.svg'
import guarantee from '../../../assets/guarantee.svg'
import shipping from '../../../assets/guarantee.svg'
import support from '../../../assets/support.svg'

const Bottom = () => {
  return (
   <>
    <div className='bottom'>
        <div className='bottom-section'>
            <img src={tech} alt='tech'/>
            <p>Latest and Greatest Tech</p>
        </div>

        <div className='bottom-section'>
            <img src={guarantee} alt='guarantee'/>
            <p>Guarantee</p>
        </div>

        <div className='bottom-section'>
            <img src={shipping}/>
            <p>Free shipping over 1000$</p>
        </div>

        <div className='bottom-section'>
            <img src={support} alt='support'/>
            <p>24/7 Support</p>
        </div>
    </div>
    </>
  )
}

export default Bottom
