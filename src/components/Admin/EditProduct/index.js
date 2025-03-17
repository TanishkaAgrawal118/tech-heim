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
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import edit from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/trash btn.svg";
import {
  PRODUCT_FIELDS,
  PRODUCT_PRICING_FIELDS,
} from "../../constants/constant";

const EditProduct = () => {
  const [descriptionData, setDescriptionData] = useState({
    description: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.products);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdThunk(id));
    } else {
      console.log("no id");
      setFormData({
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
    }
  }, [dispatch, id]);

  useEffect(() => {
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
    setFormData({ ...formData, description: value });
  };
  const handlePreviewClick = () => {
    setIsPreviewOpen(true);
  };
  const handleClosePreview = () => {
    setIsPreviewOpen(false);
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
                      {PRODUCT_FIELDS.map(
                        ({ label, name, placeholder, type }) => (
                          <Col key={name} md={4}>
                            <label>{label}</label>
                            <input
                              type={type}
                              name={name}
                              value={formData[name] || ""}
                              placeholder={placeholder}
                              className="edit-input"
                              onChange={handleChange}
                            />
                          </Col>
                        )
                      )}
                    </Row>
                  </form>
                </Paper>
              </div>
              <div className="edit-product-right">
                <div className="edit-product-pricing">
                  <Paper elevation={0}>
                    <h5>Product Pricing</h5>
                    <Row>
                      {PRODUCT_PRICING_FIELDS.map(
                        ({ label, name, placeholder, type }) => (
                          <Col key={name} md={6}>
                            <label>{label}</label>
                            <input
                              type={type}
                              name={name}
                              value={formData[name] || ""}
                              placeholder={placeholder}
                              className="edit-input"
                              onChange={handleChange}
                            />
                          </Col>
                        )
                      )}
                    </Row>
                  </Paper>
                </div>
                <div className="edit-product-media">
                  <Paper elevation={0}>
                    <h5>Product media</h5>
                    <div>
                      <img src={formData.image} alt="product" />
                      <div className="image-actions">
                        <VisibilityOutlinedIcon
                          className="product-preview"
                          onClick={handlePreviewClick}
                        />
                        <img src={edit} alt="edit" className="product-edit" />
                        <img
                          src={deleteIcon}
                          alt="delete"
                          className="product-delete"
                        />
                      </div>
                      {isPreviewOpen && (
                        <div className="preview-modal">
                          <div className="preview-modal-content">
                            <button
                              className="close-button"
                              onClick={handleClosePreview}
                            >
                              ✕
                            </button>
                            <img src={formData.image} alt="Product Preview" />
                          </div>
                        </div>
                      )}
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
