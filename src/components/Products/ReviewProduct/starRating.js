import React from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import './style.css';

const StarRating = ({ totalStars = 5, value, onChange }) => {

  const handleStarClick = (index) => {
    onChange(index + 1); 
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <MdOutlineStarPurple500
          key={index}
          size={24}
          style={{
            cursor: 'pointer',
            color: index < value ? '#f45e0c' : '#ccc', 
            transition: 'color 0.2s ease',
          }}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
