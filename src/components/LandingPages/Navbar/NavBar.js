import React, { useState } from "react";
import logo from "../../../../src/assets/logo.svg";
import search from "../../../assets/search-normal.svg";
import profile from "../../../assets/profile.svg";
import "./style.css";
import Modal from "../../Modals/modal";
import Sidebar from "../SideBar/Sidebar";
import ProductDropdown from "../../Products/ProductsDropdown";
import { Link, useLocation, useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import AdminDropdown from "../../Admin/ProfileDropdown";
import { navLinks } from "../../constants/constant";

const NavBar = ({ onLoginClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isContactPage = location.pathname === "/contact";
  const isActive = (path, activePaths) => {
    if (activePaths) {
      return activePaths.some((activePath) =>
        location.pathname.startsWith(activePath)
      );
    }
    return location.pathname === path;
  };

  const { cartItems } = useSelector((state) => state.cart);
  const cartQuantity = cartItems.length;

  const handleCart = () => {
    if (cartItems.length > 0) {
      const firstCartItemId = cartItems[0]?.id;
      navigate(`/cartDetails/${firstCartItemId}`);
    }
  };
  const handleHome = () =>{
    navigate('/');
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
      >
        <a className="navbar-brand d-none d-lg-block" href="#">
          <img
            src={logo}
            alt="Logo"
            className="me-2"
            style={{ width: "56px", height: "63px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarNav"
          className={`nav-content ${
            location.pathname === "/contact" ? "contact-page" : ""
          }`}
        >
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link ${
                    isActive(link.path, link.activePaths) ? "active-nav" : ""
                  }`}
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="d-block d-lg-none tech-heim" onClick={handleHome}>Tech Heim</p>
        <div className="d-flex navbar-images">
          <img
            src={search}
            alt="search"
            className="m-3 d-lg-block"
            onClick={() => setIsSearchOpen(true)}
          />
          <div className="cart-container">
            <ShoppingCartIcon className="m-3" onClick={handleCart} />
            {cartQuantity > 0 && (
              <span className="cart-quantity-badge">{cartQuantity}</span>
            )}
          </div>
          {isContactPage ? (
            <Link
              className="btn btn-primary login-signup-btn"
              onClick={onLoginClick}
            >
              Login / Sign Up
            </Link>
          ) : (
            <div
            className="profile-wrapper"
            onClick={(e) => {
              e.stopPropagation(); 
              setUserDropdown((prev) => !prev);
            }}
          >
            <img
              src={profile}
              alt="profile"
              className="icon profile-icon"
              style={{ cursor: "pointer" }}
            />
          </div>
          )}
        </div>
      </nav>
      <div className="user-dropdown">
        {isUserDropdown && (
          <AdminDropdown closeDropdown={() => setUserDropdown(false)} />
        )}
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isProductDropdown && (
        <ProductDropdown setIsProductDropdown={setIsProductDropdown} />
      )}

      <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
        <div className="search-modal">
          <input
            type="text"
            placeholder="What can we help you to find?"
            style={{
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "30px",
            }}
          />

          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <h3>The Most Searched Items</h3>
              <div className="search-row">
                <div className="search-col">
                  <p>MacBook Pro</p>
                  <p>AirPods Pro</p>
                  <p>Samsung S9</p>
                  <p>Tablet</p>
                </div>
                <div className="search-col">
                  <p>Xiami</p>
                  <p>JBL Speaker</p>
                  <p>Canon</p>
                  <p>AirPods Max</p>
                </div>
              </div>
            </div>

            <div>
              <h3>Most Used Keywords</h3>
              <div className="search-row">
                <div className="search-col">
                  <p>Asus</p>
                  <p>MagSafe</p>
                  <p>Samsung S9</p>
                  <p>Tablet</p>
                </div>
                <div className="search-col">
                  <p>MacBook Pro</p>
                  <p>AirPods Pro</p>
                  <p>Phone Cases</p>
                  <p>Smart Watch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
