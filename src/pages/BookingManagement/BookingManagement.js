
import React, { useState } from 'react';
import './BookingManagement.css'; 

function BookingManagement() {
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(userData);
  };

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="booking-management-container">
      <h2>Booking Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
