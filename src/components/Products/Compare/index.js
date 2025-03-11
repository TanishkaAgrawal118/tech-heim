import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Container, Table } from "react-bootstrap";
import "./style.css";
import { removeFromCompare } from "../../../redux/actions/compareAction";
import close from "../../../assets/sidebar-close.svg";
import { useNavigate } from "react-router";
import { addToCart } from "../../../redux/actions/cartAction";
import { ToastContainer, toast } from "react-toastify";

const CompareProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const compareList = useSelector((state) => state.compare.compareList);

  const showToastMessage = () => {
    toast.success("Product added to cart!", {
      position: "top-right",
    });
  };

  const handleRemoveFromCompare = (id) => {
    dispatch(removeFromCompare(id));
  };

  const handleBuyNow = (product) => {
    navigate(`/cartDetails/${product.id}`);
  };

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    showToastMessage();
  };

  return (
    <>
      <NavBar />
      <Container className="compare-container">
        {compareList.length > 0 ? (
          <Table striped bordered hover responsive className="compare-table">
            <thead className="compare-top-tr">
              <tr >
                <th>Feature</th>
                {compareList.map((product) => (
                  <th key={product.id}>
                    <img
                      src={close}
                      className="compare-remove-btn"
                      alt="cross"
                      onClick={() => handleRemoveFromCompare(product.id)}
                    />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="compare-image"
                    />
                    <h5>{product.name}</h5>
                    <p>
                      <span className="compare-price">
                        ${product.discountedPrice}
                      </span>
                      <span className="compare-original-price">
                        ${product.originalPrice}
                      </span>
                      <br />
                      <span className="compare-discount">
                        ({product.discount} OFF)
                      </span>
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Processor</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.processor || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Screen Size</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.screenSize || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Brand</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.brand || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Model</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.model || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Graphics</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.graphics || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Display</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.display || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Storage</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.hardDiskSize || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Battery Life</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.batteryLife || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Weight</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.weight || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Color</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.color || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Delivery</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.delivery || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Warranty</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.guarantee || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Included Items</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.details.includedItems || "-"}</td>
                ))}
              </tr>
              <tr>
                <td>Rating</td>
                {compareList.map((product) => (
                  <td key={product.id}>{product.rating || "-"}</td>
                ))}
              </tr>
              <tr>
                <td></td>
                {compareList.map((product) => (
                  <td key={product.id}>
                    <button
                      className="compare-buy-btn"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                    <br />
                    <button
                      className="compare-add-btn"
                      onClick={() => handleAdd(product)}
                    >
                      Add to Cart
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        ) : (
          <p className="text-center">No products in the comparison list!</p>
        )}
      </Container>
      <ToastContainer />
    </>
  );
};

export default CompareProducts;
