import React, { useState } from "react";
import NavBar from "../../LandingPages/Navbar/NavBar";
import AddProduct from "../AddProduct/AddProduct";
import "./style.css";
import { Link, useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import profile from '../../../assets/adminProfile.svg';
import productEdit from '../../../assets/product-edit.svg';
import contactUs from '../../../assets/24-support.svg';
import logout from '../../../assets/logout.svg';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleProduct = () =>{
    navigate('/product-management')
  }
  const handleAdmin = () =>{
    navigate('/admin-management')
  }
  const handleContact = () => {
    navigate('/contact');
  }

  return (
    <>
        <div className="navigation">
          <Link to="/" style={{ color: "#717171" }}>Home</Link> &gt;
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </div>

        <div className="dashboard-layout">
          <div className="admin-dashboard">
            <div className="admin-dashboard-1">
              <img src={profile} alt="profile" className="admin-profile" />
              <p>Jimmy Smith</p>
            </div>

            <div className="admin-dashboard-2" onClick={handleProduct}>
              <img src={productEdit} alt="product-edit" />
              <p>Product Management</p>
            </div>

            <div className="admin-dashboard-2" >
              <img src={productEdit} alt="product-edit" />
              <p>User Onboarding</p>
            </div>

            <div className="admin-dashboard-2" onClick={handleAdmin}>
              <img src={productEdit} alt="product-edit" />
              <p>Add Admin</p>
            </div>

            <div className="admin-dashboard-2" onClick={handleContact}>
              <img src={contactUs} alt="contact-us" />
              <p>Contact Us</p>
            </div>

            <div className="admin-dashboard-2">
              <img src={logout} alt="logout" />
              <p style={{ color: "#C91433" }}>Log out</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default AdminDashboard;
