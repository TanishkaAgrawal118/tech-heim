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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  const cartQuantity = cartItems.length;

  const isContactPage = location.pathname === "/contact";

  const isActive = (path, activePaths) => {
    if (activePaths) {
      return activePaths.some((activePath) =>
        location.pathname.startsWith(activePath)
      );
    }
    return location.pathname === path;
  };

  const handleCart = () => {
    if (cartItems.length > 0) {
      const firstCartItemId = cartItems[0]?.id;
      navigate(`/cartDetails/${firstCartItemId}`);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3);
    const handleProductClick = (id) => {
      navigate(`/productDetails/${id}`);
    };
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
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

        <p className="d-block d-lg-none tech-heim" onClick={handleHome}>
          Tech Heim
        </p>
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
      {isUserDropdown && (
        <AdminDropdown closeDropdown={() => setUserDropdown(false)} />
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {isProductDropdown && (
        <ProductDropdown setIsProductDropdown={setIsProductDropdown} />
      )}
      <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
        <div className="search-modal">
          <input
            type="text"
            placeholder="What can we help you to find?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "30px",
            }}
          />

          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <div className="search-row">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <p key={product.id}  onClick={() => handleProductClick(product.id)}>
                      {product.name}
                    </p>
                  ))
                ) : (
                  <p>No matching products found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
