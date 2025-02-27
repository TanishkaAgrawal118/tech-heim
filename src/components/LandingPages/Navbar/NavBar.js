import React, { useState } from "react";
import logo from "../../../../src/assets/logo.svg";
import search from "../../../assets/search-normal.svg";
import basket from "../../../assets/basket.svg";
import profile from "../../../assets/profile.svg";
import "./style.css";
import Modal from "../../Modals/modal";
import Sidebar from "../SideBar/Sidebar";
import ProductDropdown from "../../Products/ProductsDropdown";
import { Link, useNavigate } from "react-router";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light px-4"
        style={{ overflowX: "hidden",position:"relative" }}
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

        <div id="navbarNav" className="nav-content">
          <ul className="navbar-nav mx-auto">
            <li className="navItem">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {/* <li
              className="navItem"
              onMouseEnter={() => {
                setIsProductDropdown(true);
                console.log("entered")
              }}
            >
              <a style={{ cursor: "pointer" }} className="nav-link" href="#">
                Products
              </a>
            </li> */}
             <li
              className="navItem"
            >
              <Link style={{ cursor: "pointer" }} className="nav-link" to="#">
                Products
              </Link>
            </li>
            <li className="navItem">
              <Link className="nav-link" to="#">
                Blog
              </Link>
            </li>
            <li className="navItem">
              <Link className="nav-link" to="/FAQ">
                FAQ
              </Link>
            </li>
            <li className="navItem">
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        
        <p className="d-block d-lg-none tech-heim">Tech Heim</p>
        <div className="d-flex navbar-images">
          <img
            src={search}
            alt="search"
            className="m-3 d-none d-lg-block"
            onClick={() => setIsSearchOpen(true)}
          />
          <img src={basket} alt="basket" className="m-3" />
          <img src={profile} alt="profile" className="m-3" />
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isProductDropdown && <ProductDropdown setIsProductDropdown={setIsProductDropdown}/>}

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
