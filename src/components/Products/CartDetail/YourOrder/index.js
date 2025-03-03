import React from 'react';
import './style.css';
import laptop1 from '../../../../assets/laptop1.svg'
import laptop2 from '../../../../assets/laptop2.svg'
import laptop3 from '../../../../assets/laptop3.svg'
import { useLocation, useNavigate, useParams } from 'react-router';

const YourOrder = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const product = state?.product;
  const handleProceedToPayment = (product) => {
    navigate(`/cartDetails/${id}/payment`, { state: { product } });
  };
  return (
    <div className="yourOrder">
      <h4>Your Order</h4>
      <div className="orderItem">
      <img src={product.image} alt={product.name} />
        <div>
          {product.name}
          <div className="itemMeta">{product.details?.color} ×{product.quantity}</div>
          <div className="itemPrice">
            ${product.discountedPrice?.toFixed(2)} each <br />
            <del>${product.originalPrice?.toFixed(2)} each</del>
          </div>
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

      <button className="checkoutButton" onClick={() => handleProceedToPayment(product)}>Continue to pay</button>
    </div>
  );
};

export default YourOrder;
