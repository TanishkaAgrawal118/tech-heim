import React from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Container } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard";
import { Paper } from "@mui/material";
import './style.css'

const EditProduct = () => {
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
                    <Paper>
                        <h5>Product Information</h5>
                        
                    </Paper>
                </div>
                <div className="edit-product-right">
                    <div className="edit-product-pricing">
                        <Paper>
                            <h5>Product Pricing</h5>
                        </Paper>
                    </div>
                    <div className="edit-product-media">
                        <Paper>
                            <h5>Product media</h5>
                        </Paper>
                    </div>
                </div>
            </div>
            <div className="edit-product-description">
                <Paper>
                    <h5>Product Description</h5>
                </Paper>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EditProduct;
