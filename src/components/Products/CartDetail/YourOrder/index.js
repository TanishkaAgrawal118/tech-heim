import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../../redux/actions/productAction";
import { toast, ToastContainer } from "react-toastify";

const YourOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    product: passedProduct,
    subtotal,
    discount,
    shipmentCost,
    grandTotal,
  } = location.state || {};

  const { product } = useSelector((state) => state.products);
  const [cartListItems, setCartListItems] = useState([]);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id));
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartListItems(localStorageCartItems);
  }, [dispatch, id]);

  const displayProduct =
    cartListItems.find((item) => item.id === id) || passedProduct || {
      ...product,
      quantity: 1,
    };

  const handleProceedToPayment = () => {
    if (location.pathname === `/cartDetails/${id}/payment`) {
      const options = {
        key: "rzp_test_oqaFJcEsF6IBAJ",
        amount: grandTotal * 100, 
        currency: "INR",
        name: displayProduct.name,
        description: "Payment for your order",
        image: displayProduct.image || "",
        handler: function (response) {
          toast.success(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`,
            {
              position: "top-right",
            }
          );
          navigate(`/products`);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Test Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on("payment.failed", function (response) {
        toast.error(`Payment failed: ${response.error.description}`, {
          position: "top-right",
        });
      });
    } else {
      navigate(`/cartDetails/${id}/payment`, {
        state: { product: displayProduct, subtotal, discount, shipmentCost, grandTotal },
      });
    }
  };

  return (
    <>
      <div className="yourOrder">
        <h4>Your Order</h4>
        <div className="orderItemsList">
          {cartListItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartListItems.map((product) => (
              <div key={product.id} className="orderItem">
                <img src={product.image} alt={product.name} />
                <div>
                  <h5>{product.name}</h5>
                  <div className="itemMeta">
                    {product.details?.color} × {product.quantity}
                  </div>
                  <div className="itemPrice">
                    ${product.discountedPrice?.toFixed(2)} each <br />
                    <del>${product.originalPrice?.toFixed(2)} each</del>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="discountBox">
          <input type="text" placeholder="Discount code" />
          <button>Apply</button>
        </div>
        <div className="orderSummaryDetails">
          <div className="row">
            <span>Subtotal</span>
            <span>${subtotal?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="row">
            <span>Discount</span>
            <span>-${discount?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="row">
            <span>Shipment cost</span>
            <span>${shipmentCost?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="grandTotal">
            <span>Grand Total</span>
            <span>${grandTotal?.toFixed(2) || "0.00"}</span>
          </div>
        </div>
        <button className="checkoutButton" onClick={handleProceedToPayment}>
          {location.pathname === `/cartDetails/${id}/payment`
            ? "Pay Now"
            : "Proceed to Payment"}
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default YourOrder;
