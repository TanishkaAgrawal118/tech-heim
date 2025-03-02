import React, { useState } from 'react'
import NavBar from '../../../LandingPages/Navbar/NavBar'
import YourOrder from '../YourOrder'
import './style.css'

const Payment = () => {
    const [selectedPayment, setSelectedPayment] = useState('credit-card');

    return (
        <>
            <div className="payment-container">

                <div className="payment-section">
                    <h2>Payment</h2>


                    <div className="payment-methods">
                        <div
                            className={`payment-option ${selectedPayment === 'credit-card' ? 'selected' : ''}`}
                            onClick={() => setSelectedPayment('credit-card')}
                        >
                            <input type="radio" checked={selectedPayment === 'credit-card'} readOnly />
                            <span>Credit Cards</span>
                            <span className="payment-logo">AMERICAN EXPRESS</span>
                        </div>

                        <div
                            className={`payment-option ${selectedPayment === 'paypal' ? 'selected' : ''}`}
                            onClick={() => setSelectedPayment('paypal')}
                        >
                            <input type="radio" checked={selectedPayment === 'paypal'} readOnly />
                            <span className="paypal-text">PayPal</span>
                        </div>
                    </div>

                    <div className="billing-address">
                        <h3>Billing address</h3>
                        <div className="billing-address-box">
                            Same as shipping address
                        </div>
                    </div>

                    <a href="/checkout" className="return-link">Return to checkout</a>
                </div>

                <div className="order-section">
                    <YourOrder />
                </div>
            </div>
        </>
    )
}

export default Payment
