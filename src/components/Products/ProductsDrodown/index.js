import React, { useState } from "react";
import { MenuItems } from "../../constants/constant";
import "./style.css";

const ProductDropdown = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  return (
    <ul className="dropdown-menu">
      {MenuItems[0]?.subItems?.map((item, index) => ( 
        <li
          key={index}
          className="dropdown-item"
          onMouseEnter={() => setOpenSubMenu(index)}
          onMouseLeave={() => setOpenSubMenu(null)}
        >
          <span>
            {item.icon && <img src={item.icon} alt={item.title} className="icon" />} 
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProductDropdown;
