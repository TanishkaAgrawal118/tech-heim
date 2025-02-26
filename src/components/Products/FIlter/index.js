import React, { useState } from "react";
import "./style.css";
import {
  BRANDS,
  RAM_OPTIONS,
  SCREEN_SIZES,
  PROCESSORS,
  GPU_BRANDS,
  DRIVE_SIZES,
} from "../../constants/constant";
import arrowDropdown from "../../../assets/arrow-down.svg";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: ["Apple"],
    ram: ["12 GB"],
    screenSize: ['15" - 15.9"'],
    processor: ["AMD Ryzen 9"],
    gpu: ["NVIDIA", "Intel"],
    driveSize: ["128GB"],
  });

  const [openFilter, setOpenFilter] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilter((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter((item) => item !== value);
      } else {
        updated[category] = [...updated[category], value];
      }
      return updated;
    });
  };

  return (
    <div className="product-filter">
      <div className="filter-header">
        <h4>Filters</h4>
        <span className="clear-all">Clear all</span>
      </div>

      <div className="filter-section">
        <div className="filter-head" onClick={() => toggleFilter("brand")}>
          <h5>Brand</h5>
          <img src={arrowDropdown} alt="arrow" className={openFilter.brand ? "rotate" : ""} />
        </div>
        {openFilter.brand &&
          BRANDS.map((brand) => (
            <label key={brand} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.brand.includes(brand)}
                onChange={() => handleCheckboxChange("brand", brand)}
              />
              {brand}
            </label>
          ))}
      </div>

      <div className="filter-section">
        <div className="filter-head" onClick={() => toggleFilter("ram")}>
          <h5>RAM</h5>
          <img src={arrowDropdown} alt="arrow" className={openFilter.ram ? "rotate" : ""} />
        </div>
        {openFilter.ram &&
          RAM_OPTIONS.map((ram) => (
            <label key={ram} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.ram.includes(ram)}
                onChange={() => handleCheckboxChange("ram", ram)}
              />
              {ram}
            </label>
          ))}
      </div>

      <div className="filter-section">
        <div className="filter-head" onClick={() => toggleFilter("screenSize")}>
          <h5>Screen Size</h5>
          <img src={arrowDropdown} alt="arrow" className={openFilter.screenSize ? "rotate" : ""} />
        </div>
        {openFilter.screenSize &&
          SCREEN_SIZES.map((size) => (
            <label key={size} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.screenSize.includes(size)}
                onChange={() => handleCheckboxChange("screenSize", size)}
              />
              {size}
            </label>
          ))}
      </div>

      <div className="filter-section">
        <div className="filter-head" onClick={() => toggleFilter("processor")}>
          <h5>Processor</h5>
          <img src={arrowDropdown} alt="arrow" className={openFilter.processor ? "rotate" : ""} />
        </div>
        {openFilter.processor &&
          PROCESSORS.map((cpu) => (
            <label key={cpu} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.processor.includes(cpu)}
                onChange={() => handleCheckboxChange("processor", cpu)}
              />
              {cpu}
            </label>
          ))}
      </div>

      <div className="filter-section">
        <div className="filter-head" onClick={() => toggleFilter("gpu")}>
          <h5>GPU Brand</h5>
          <img src={arrowDropdown} alt="arrow" className={openFilter.gpu ? "rotate" : ""} />
        </div>
        {openFilter.gpu &&
          GPU_BRANDS.map((gpu) => (
            <label key={gpu} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.gpu.includes(gpu)}
                onChange={() => handleCheckboxChange("gpu", gpu)}
              />
              {gpu}
            </label>
          ))}
      </div>

      <div className="filter-section">
        <div className="filter-head" onClick={() => toggleFilter("driveSize")}>
          <h5>Drive Size</h5>
          <img src={arrowDropdown} alt="arrow" className={openFilter.driveSize ? "rotate" : ""} />
        </div>
        {openFilter.driveSize &&
          DRIVE_SIZES.map((size) => (
            <label key={size} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.driveSize.includes(size)}
                onChange={() => handleCheckboxChange("driveSize", size)}
              />
              {size}
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filter;
