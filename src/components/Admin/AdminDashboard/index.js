import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./style.css";
import profile from '../../../assets/adminProfile.svg';
import productEdit from '../../../assets/product-edit.svg';
import contactUs from '../../../assets/24-support.svg';
import logout from '../../../assets/logout.svg';
import close from "../../../assets/sidebar-close.svg";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/contact'); 
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  const handleToggleDashboard = () => {
    setIsOpen(!isOpen);
  };

  const handleProduct = () => navigate('/product-management');

  const handleContact = () => navigate('/contact');

  const handleUserOnBoard = () => navigate('/user-onBoard');

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate('/contact'); 
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const isActive = (pathname) => location.pathname.startsWith(pathname);
  if (!user) return null;
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

        <div className="admin-dashboard-2" onClick={handleLogout}>
          <img src={logout} alt="logout" />
          <p style={{ color: "#C91433" }}>Log out</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
