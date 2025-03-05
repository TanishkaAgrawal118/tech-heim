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

const Filter = ({ selectedFilters, setSelectedFilters }) => {
  const [openFilter, setOpenFilter] = useState({
    brand: true,
    ram: true,
    screenSize: true,
    processor: true,
    gpu: true,
    driveSize: true,
  });

  const toggleFilter = (filter) => {
    setOpenFilter((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({
      brand: [],
      ram: [],
      screenSize: [],
      processor: [],
      gpu: [],
      driveSize: [],
    });
  };

  const renderCheckboxes = (category, options) => (
    options.map((option) => (
      <label key={option} className="filter-option">
        <input
          type="checkbox"
          style={{cursor:"pointer"}}
          checked={selectedFilters[category].includes(option)}
          onChange={() => handleCheckboxChange(category, option)}
        />
        {option}
      </label>
    ))
  );

  return (
    <div className="product-filter">
      <div className="filter-header">
        <h4>Filters</h4>
        <span className="clear-all" onClick={handleClearAll}>Clear all</span>
      </div>

      {[
        { key: "brand", label: "Brand", options: BRANDS },
        { key: "ram", label: "RAM", options: RAM_OPTIONS },
        { key: "screenSize", label: "Screen Size", options: SCREEN_SIZES },
        { key: "processor", label: "Processor", options: PROCESSORS },
        { key: "gpu", label: "GPU Brand", options: GPU_BRANDS },
        { key: "driveSize", label: "Drive Size", options: DRIVE_SIZES },
      ].map(({ key, label, options }) => (
        <div className="filter-section" key={key}>
          <div className="filter-head" onClick={() => toggleFilter(key)}>
            <h5>{label}</h5>
            <img src={arrowDropdown} alt="arrow" className={openFilter[key] ? "rotate" : ""} />
          </div>
          {openFilter[key] && renderCheckboxes(key, options)}
        </div>
      ))}
    </div>
  );
};

export default Filter;
