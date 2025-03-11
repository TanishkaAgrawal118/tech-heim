import React, { useState } from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import './style.css';

const StarRating = ({ totalStars = 5, value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleStarClick = (index) => {
    onChange(index + 1); 
  };

  const handleMouseEnter = (index) => {
    setHoverValue(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <MdOutlineStarPurple500
          key={index}
          size={24}
          style={{
            cursor: 'pointer',
            color: index < (hoverValue || value) ? '#f45e0c' : '#ccc', 
            transition: 'color 0.2s ease, transform 0.2s ease',
            transform: hoverValue > 0 && index < hoverValue ? 'scale(1.2)' : 'scale(1)',
          }}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
