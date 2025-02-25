import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../../../src/assets/logo.svg";
import close from "../../../assets/sidebar-close.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MenuItems } from "../../constants/constant";

const Sidebar = ({ isOpen, onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>

      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <img src={close} alt="close" onClick={onClose} style={{ cursor: "pointer" }} />
      </div>

      <ul className="sidebar-menu">
        {MenuItems.map((item, index) => (
          <li key={index} onClick={() => item.subItems && setIsProductsOpen(!isProductsOpen)}>
            <span className="menu-item">
              {item.title} {item.subItems && (isProductsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)}
            </span>

            {item.subItems && isProductsOpen && (
              <ul className="submenu">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <img src={subItem.icon} alt={subItem.title} />
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
