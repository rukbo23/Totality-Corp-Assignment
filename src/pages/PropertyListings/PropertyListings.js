import React, { useState, useEffect } from "react";
import "./PropertyListings.css";

function PropertyListings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://api.ccbp.com/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <div className="property-listings-container">
      <h2>Property Listings</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListings;
