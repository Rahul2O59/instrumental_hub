"use client";

import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Fill in your details to complete your purchase.</p>

      <form className="checkout-form">
        <label>
          Name:
          <input type="text" placeholder="Your full name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Address:
          <textarea placeholder="Shipping address" required></textarea>
        </label>

        <label>
          Payment Method:
          <select required>
            <option value="">Select Payment Method</option>
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>

        <button type="submit" className="checkout-btn">
          Complete Purchase
        </button>
      </form>

      <Link to="/cart" className="back-btn">
        ← Back to Cart
      </Link>
    </div>
  );
};

export default Checkout;
