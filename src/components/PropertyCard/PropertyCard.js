import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img
        className="property-image"
        src={property.imageUrl}
        alt={property.title}
      />
      <div className="property-details">
        <h2 className="property-title">{property.title}</h2>
        <p className="property-description">{property.description}</p>
        <p className="property-price">Price: {property.price}</p>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default PropertyCard;
