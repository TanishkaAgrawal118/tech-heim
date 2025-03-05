import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Paper, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import deleteIcon from "../../../../assets/trash btn.svg";
import "./style.css";
import Footer from "../../../LandingPages/Footer";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../../redux/actions/productAction";
import {
  addToCart,
  decreaseItem,
  removeFromCart,
} from "../../../../redux/actions/cartAction";

const CartItems = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cartListItems, setCartListItems] = useState([]);
  const { product } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const cartProduct = cartItems.find((item) => item.id === id);
  const displayProduct = cartProduct || { ...product, quantity: 1 };

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartListItems(savedCartItems);
  }, []);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(id));
  }, [dispatch, id]);
  const updateCart = (updatedCart) => {
    setCartListItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  if (!displayProduct) {
    return <p>No product found in cart.</p>;
  }

  const calculateTotal = () => {
    let subtotal = 0;
    let discount = 0;
    let shipmentCost = 0;

    cartListItems.forEach((product) => {
      subtotal += product.discountedPrice * product.quantity;
      discount +=
        (product.originalPrice - product.discountedPrice) * product.quantity;
      shipmentCost += product.shipmentCost || 0;
    });

    const grandTotal = subtotal + shipmentCost;

    return { subtotal, discount, shipmentCost, grandTotal };
  };
  const { subtotal, discount, shipmentCost, grandTotal } = calculateTotal();

  const handleCheckout = () => {
    navigate(`/cartDetails/${displayProduct.id}/checkout`);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartListItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
    dispatch(removeFromCart(id));
  };
  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartListItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const product = cartListItems.find((item) => item.id === id);
  
    if (product.quantity === 1) {
      const updatedCart = cartListItems.filter((item) => item.id !== id);
      updateCart(updatedCart);
      dispatch(removeFromCart(id)); 
    } else {
      const updatedCart = cartListItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      updateCart(updatedCart);
      dispatch(decreaseItem({ ...product, quantity: product.quantity - 1 })); 
    }
  };
  
  return (
    <>
      <Container>
        <div className="cartDetails">
          <div className="selectedCartItems">
          {cartListItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartListItems.map((product) => (
                <Paper key={product.id} elevation={3} className="singleCart">
                  <div className="itemImage">
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="itemDetails">
                    <h5>{product.name}</h5>
                    <p>
                      <strong>Color:</strong> {product.details?.color}
                    </p>
                    <p>{product.delivery}</p>
                    <p>
                      <strong>{product.guarantee}</strong>
                    </p>
                    <p>
                      <del>${product.originalPrice?.toFixed(2)}</del>&nbsp;
                      <strong>${product.discountedPrice?.toFixed(2)}</strong>
                    </p>
                  </div>

                  <div className="itemActions">
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <img src={deleteIcon} alt="delete" />
                    </IconButton>

                    <div className="quantityControl">
                      <IconButton
                        size="small"
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <span>{product.quantity}</span>
                      <IconButton
                        size="small"
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  </div>
                </Paper>
              ))
            )}
          </div>

          <div className="cartPayment">
            <Paper elevation={3} className="paymentDetails">
              <h4>Payment Details</h4>
              <div className="paymentRow">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="paymentRow">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="paymentRow">
                <span>Shipment cost</span>
                <span>${shipmentCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="paymentRow">
                <strong>Grand Total</strong>
                <strong>${grandTotal.toFixed(2)}</strong>
              </div>
              <button className="checkoutButton" onClick={handleCheckout}>
                Proceed to checkout
              </button>
            </Paper>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CartItems;
