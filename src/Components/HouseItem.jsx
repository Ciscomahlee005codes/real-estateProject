import React from "react";
import "./HouseItem.css";

const HouseItem = ({ name, image, rating, category }) => {
  return (
    <div className="house-item">
      <img src={image} alt={name} className="house-img" />
      <div className="house-details">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>Rating: {rating}⭐</p>
      </div>
    </div>
  );
};

export default HouseItem;
