import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import profile from '../../../assets/adminProfile.svg';
import productEdit from '../../../assets/product-edit.svg';
import contactUs from '../../../assets/24-support.svg';
import logout from '../../../assets/logout.svg';
import close from "../../../assets/sidebar-close.svg";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleDashboard = () => {
    setIsOpen(!isOpen);
  };

  const handleProduct = () => {
    navigate('/product-management');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const handleUserOnBoard = () => {
    navigate('/user-onBoard');
  };

  const isActive = (pathname) => location.pathname.startsWith(pathname);

  return (
    <>
      <div className="navigation">
        <Link to="/" style={{ color: "#717171" }}>Home</Link> &gt;
        <Link to="/admin-dashboard">Admin Dashboard</Link>
      </div>
      <div className="admin-dashboard-1" onClick={handleToggleDashboard}>
        <img src={profile} alt="profile" className="admin-profile" />
        <p>Admin Dashboard</p>
      </div>

      <div className={`admin-dashboard ${isOpen ? 'open' : 'closed'}`}>
        <img src={close} alt="close" onClick={handleToggleDashboard} className="dashboard-close"/>

        <div
          className={`admin-dashboard-2 ${isActive("/product-management") || isActive("/edit-product") ? "active-admin-dashboard" : "inactive-admin-dashboard"}`}
          onClick={handleProduct}
        >
          <img src={productEdit} alt="product-edit" />
          <p>Product Management</p>
        </div>

        <div
          className={`admin-dashboard-2 ${isActive("/user-onBoard") ? "active-admin-dashboard" : "inactive-admin-dashboard"}`}
          onClick={handleUserOnBoard}
        >
          <img src={productEdit} alt="product-edit" />
          <p>User Onboarding</p>
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
    </>
  );
};

export default AdminDashboard;
