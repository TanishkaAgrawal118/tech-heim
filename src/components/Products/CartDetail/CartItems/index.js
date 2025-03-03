import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Paper, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import deleteIcon from "../../../../assets/trash btn.svg";
import "./style.css";
import Footer from "../../../LandingPages/Footer";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../../redux/actions/productAction";

const CartItems = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const product = state?.product;

  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProductByIdThunk(id));
  }, [dispatch, id]);

  const updateQuantity = (change) => {
    setCartProduct((prevProduct) => ({
      ...prevProduct,
      quantity: Math.max(1, prevProduct.quantity + change),
    }));
  };
  const [cartProduct, setCartProduct] = useState(product || {});
  const subtotal = (product?.discountedPrice || 0) * (product?.quantity || 1);
  const shipmentCost = product?.shipmentCost || 0;
  const discount =
    (product?.originalPrice - product?.discountedPrice || 0) *
    (product?.quantity || 1);
  const grandTotal = subtotal + shipmentCost;

  const handleCheckout = () => {
    navigate(`/cartDetails/${product.id}/checkout`);
  };

  if (!product) {
    return <p>No product found in cart.</p>;
  }

  return (
    <>
      <Container>
        <div className="cartDetails">
          <div className="selectedCartItems">
            <Paper elevation={3} className="singleCart">
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
                  <del>${product.originalPrice?.toFixed(2)}</del> &nbsp;
                  <strong>${product.discountedPrice?.toFixed(2)}</strong>
                </p>
              </div>

              <div className="itemActions">
                <IconButton color="error">
                  <img src={deleteIcon} alt="delete" />
                </IconButton>

                <div className="quantityControl">
                  <IconButton size="small" onClick={() => updateQuantity(-1)}>
                    <RemoveIcon />
                  </IconButton>
                  <span>{product.quantity}</span>
                  <IconButton size="small" onClick={() => updateQuantity(1)}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
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
