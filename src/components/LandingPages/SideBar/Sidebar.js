import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import logo from "../../../../src/assets/logo.svg";
import close from "../../../assets/sidebar-close.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MenuItems } from "../../constants/constant";

const Sidebar = ({ isOpen, onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    if (link) {
      navigate(link);
      onClose();
    }
  };
  const handleHome = () =>{
    navigate('/');
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" onClick={handleHome}/>
        <img src={close} alt="close" onClick={onClose} style={{ cursor: "pointer" }} />
      </div>

      <ul className="sidebar-menu">
        {MenuItems.map((item, index) => (
          <li key={index} onClick={() => item.subItems ? setIsProductsOpen(!isProductsOpen) : handleNavigate(item.link)}>
            <span className="menu-item">
              {item.title} {item.subItems && (isProductsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)}
            </span>

            {item.subItems && isProductsOpen && (
              <ul className="submenu">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} onClick={() => handleNavigate(subItem.link)}>
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
