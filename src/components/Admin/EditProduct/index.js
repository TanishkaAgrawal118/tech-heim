import React, { useEffect, useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard";
import { Paper } from "@mui/material";
import "./style.css";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdThunk } from "../../../redux/actions/productAction";

const EditProduct = () => {
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.products);
  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    rating: "",
    quantity: "",
    brand: "",
    model: "",
    hardDiskSize: "",
    processor: "",
    graphics: "",
    display: "",
    batteryLife: "",
    weight: "",
    color: "",
    includedItems: "",
    originalPrice: "",
    discountPrice: "",
    shipmentCost: "",
    discount: "",

    image: "",
  });
  const [descriptionData, setDescriptionData] = useState({
    description: "",
  });
  useEffect(() => {
    dispatch(fetchProductByIdThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("Fetched Product:", product);
    if (product) {
      setFormData({
        name: product.name || "",
        stock: product.status || "",
        rating: product.rating || "",
        quantity: product.quantity || "",
        brand: product.details?.brand || "",
        model: product.details?.model || "",
        hardDiskSize: product.details?.hardDiskSize || "",
        processor: product.details?.processor || "",
        graphics: product.details?.graphics || "",
        display: product.details?.display || "",
        batteryLife: product.details?.batteryLife || "",
        weight: product.details?.weight || "",
        color: product.details?.color || "",
        includedItems: product.details?.includedItems || "",
        originalPrice: product.originalPrice || "",
        discountPrice: product.discountPrice || "",
        shipmentCost: product.shipmentCost || "",
        discount: product.discount || "",
        description: product.description || "",
        image: product.image || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDescriptionChange = (value) => {
    setDescriptionData({
      description: value,
    });
  };

  return (
    <>
      <NavBar />
      <Container>
        <div className="product-edit-page">
          <div>
            <AdminDashboard />
          </div>
          <div>
            <div className="edit-product-detail">
              <div className="edit-product-info">
                <Paper elevation={0}>
                  <h5>Product Information</h5>
                  <form>
                    <Row>
                      <Col>
                        <label>Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          name="name"
                          placeholder="Name of Product"
                          className="edit-input"
                          onFocus={() => {
                            console.log("focused");
                          }}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Stock</label>
                        <input
                          type="text"
                          name="stock"
                          value={formData.stock}
                          placeholder="Active/Inactive"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Rating</label>
                        <input
                          type="text"
                          name="rating"
                          value={formData.rating}
                          placeholder="Rating"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Quantity</label>

                        <input
                          type="number"
                          name="quantity"
                          className="edit-input"
                          value={formData.quantity}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Brand</label>
                        <input
                          type="text"
                          name="brand"
                          value={formData.brand}
                          placeholder="Brand"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Model</label>
                        <input
                          type="text"
                          name="model"
                          value={formData.model}
                          placeholder="Model"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>HardDisk Size</label>
                        <input
                          type="text"
                          name="hardDiskSize"
                          value={formData.hardDiskSize}
                          placeholder="HardDisk Size"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Processor</label>
                        <input
                          type="text"
                          name="processor"
                          value={formData.processor}
                          placeholder="Processor"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Graphics</label>
                        <input
                          type="text"
                          name="graphics"
                          value={formData.graphics}
                          placeholder="Graphics"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Display</label>
                        <input
                          type="text"
                          name="display"
                          value={formData.display}
                          placeholder="Display"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Battery Life</label>
                        <input
                          type="text"
                          name="batteryLife"
                          value={formData.batteryLife}
                          placeholder="Battery Life"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Weight</label>
                        <input
                          type="text"
                          name="weight"
                          value={formData.weight}
                          placeholder="Weight"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Color</label>
                        <input
                          type="text"
                          name="color"
                          value={formData.color}
                          placeholder="Color"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Included Items</label>
                        <input
                          type="text"
                          name="includedItems"
                          value={formData.includedItems}
                          placeholder="Included Items"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </form>
                </Paper>
              </div>
              <div className="edit-product-right">
                <div className="edit-product-pricing">
                  <Paper elevation={0}>
                    <h5>Product Pricing</h5>
                    <Row>
                      <Col>
                        <label>Original Price</label>
                        <input
                          type="number"
                          name="originalPrice"
                          value={formData.originalPrice}
                          placeholder="Original Price"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Discount Price</label>
                        <input
                          type="number"
                          name="discountPrice"
                          value={formData.discountPrice}
                          placeholder="Discounted Price"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Shipment Cost</label>
                        <input
                          type="number"
                          name="shipmentCost"
                          value={formData.shipmentCost}
                          placeholder="Shipment Cost"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col>
                        <label>Discount</label>
                        <input
                          type="number"
                          name="discount"
                          value={formData.discount}
                          placeholder="Discount"
                          className="edit-input"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                  </Paper>
                </div>
                <div className="edit-product-media">
                  <Paper elevation={0}>
                    <h5>Product media</h5>
                    <div>
                      <img src={formData.image} alt="product" />
                    </div>
                  </Paper>
                </div>
              </div>
            </div>
            <div className="edit-product-description">
              <Paper elevation={0}>
                <h5>Product Description</h5>
                <ReactQuill
                  value={descriptionData.description}
                  onChange={handleDescriptionChange}
                  placeholder="Enter product description here..."
                  style={{ height: "200px", marginBottom: "30px" }}
                />
              </Paper>
            </div>
          </div>

        </div>
                  
        <div className="edit-btn">
            <button className="discard-edit">Discard</button>
            <button className="save-edit">Save</button>
          </div>
      </Container>
    </>
  );
};

export default EditProduct;
