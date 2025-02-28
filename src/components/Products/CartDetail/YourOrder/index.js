import React from 'react';
import './style.css';
import laptop1 from '../../../../assets/laptop1.svg'
import laptop2 from '../../../../assets/laptop2.svg'
import laptop3 from '../../../../assets/laptop3.svg'

const YourOrder = ({ onProceed }) => {
  return (
    <div className="yourOrder">
      <h4>Your Order</h4>
      <div className="orderItem">
        <img src={laptop3} alt="MacBook" />
        <div>
          MacBook Pro M2 MNEJ3 2022 13.3 inch
          <div className="itemMeta">Black ×1</div>
          <div className="itemPrice">$433.00 from $1299.00</div>
        </div>
      </div>

      <div className="orderItem">
        <img src={laptop1} alt="Case" />
        <div>
          Inateck 12.3-13 Inch Laptop Case Sleeve
          <div className="itemMeta">Blue ×1</div>
          <div className="itemPrice">$63.26</div>
        </div>
      </div>

      <div className="orderItem">
        <img src={laptop2} alt="Screen" />
        <div>
          Laptop Privacy Screen for 13 inch MacBook
          <div className="itemMeta">Black ×1</div>
          <div className="itemPrice">$23.26</div>
        </div>
      </div>

      <div className="discountBox">
        <input type="text" placeholder="discount code" />
        <button>Apply</button>
      </div>

      <div className="orderSummaryDetails">
        <div className="row"><span>Subtotal</span><span>$519.52</span></div>
        <div className="row"><span>Discount</span><span>-$111.87</span></div>
        <div className="row"><span>Shipment cost</span><span>$22.50</span></div>
        <div className="grandTotal"><span>Grand Total</span><span>$543.02</span></div>
      </div>

      <button className="checkoutButton" onClick={onProceed}>Continue to pay</button>
    </div>
  );
};

export default YourOrder;
