import React, { useState } from "react";
import logo from "../../../../src/assets/logo.svg";
import search from "../../../assets/search-normal.svg";
import basket from "../../../assets/basket.svg";
import profile from "../../../assets/profile.svg";
import "./style.css";
import Modal from "../../Modals/modal";
import Sidebar from "../SideBar/Sidebar";
import ProductDropdown from "../../Products/ProductsDrodown";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductDropdown, setIsProductDropdown] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light px-4"
        style={{ overflowX: "hidden" }}
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
              style={{cursor:"pointer"}}
                className="nav-link"
                href="#"
              >
                Products
              </a>
              {isProductDropdown && <ProductDropdown />}
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="search-container d-lg-none">
            <input
              type="text"
              placeholder="What can we help you to find ?"
              className="search-input"
            />
          </div>

          <div className="d-flex align-items-center">
            <a href="#" className="text-dark me-3">
              <i className="bi bi-search" style={{ fontSize: "1.2rem" }}></i>
            </a>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-cart" style={{ fontSize: "1.2rem" }}></i>
            </a>
          </div>
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
