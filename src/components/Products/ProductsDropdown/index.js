import React, { useState } from "react";
import "./style.css";
import product1 from "../../../assets/product1.svg";
import product2 from "../../../assets/product2.svg";
import product3 from "../../../assets/product3.svg";

const categories = [
  { title: "Mobile Phones" },
  { title: "Laptops & Computers" },
  { title: "Tablets & E-reader" },
  { title: "Wearables" },
  { title: "Audio" },
  { title: "Cameras" },
  { title: "Gaming" },
  { title: "Networking" },
  { title: "Accessories" },
];

const featuredProducts = [
  { image: product1, title: "Watch & Earpods" },
  { image: product2, title: "Holder" },
  { image: product3, title: "Power cables" },
  { image: product3, title: "Cases & Protection" },
];

const ProductDropdown = ({ setIsProductDropdown }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div
      className="product-dropdown"
      onMouseLeave={() => setIsProductDropdown(false)}
    >
      <div className="dropdown-sidebar">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`sidebar-item ${
              hoveredCategory === index ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredCategory(index)}
          >
            <span>{category.title}</span>
          </div>
        ))}
      </div>

      <div className="dropdown-content">
        <div className="subcategories">
          <a href="#" className="view-all">
            View all
          </a>
        </div>

        <div className="featured-products">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
