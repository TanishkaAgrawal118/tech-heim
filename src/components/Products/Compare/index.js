import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Container, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { removeFromCompare } from "../../../redux/actions/compareAction";
import { addToCart } from "../../../redux/actions/cartAction";
import closeIcon from "../../../assets/sidebar-close.svg";
import "./style.css";
import { featureList } from "../../constants/constant";

const CompareProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compareList = useSelector((state) => state.compare.compareList);
  const showToastMessage = () =>
    toast.success("Product added to cart!", { position: "top-right" });
  useEffect(() => {
    if (compareList.length === 1) {
      navigate("/products");
    }
  }, [compareList, navigate]);  
  const handleRemoveFromCompare = (id) => dispatch(removeFromCompare(id));
  const handleBuyNow = (product) => navigate(`/cartDetails/${product.id}`);
  const handleAddToCart = (product) => {
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
              <tr>
                <th>Feature</th>
                {compareList.map((product) => (
                  <th key={product.id}>
                    <img
                      src={closeIcon}
                      className="compare-remove-btn"
                      alt="Remove"
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
              {featureList.map(({ label, key }) => (
                <tr key={key}>
                  <td>{label}</td>
                  {compareList.map((product) => (
                    <td key={product.id}>
                      {product.details?.[key] || product[key] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
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
                      onClick={() => handleAddToCart(product)}
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
