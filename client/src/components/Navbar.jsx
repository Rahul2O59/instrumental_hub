"use client";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // ✅ consistent
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-title">
              Instrumental <span className="brand-accent">Hub</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link">
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link cart-link">
              <span className="cart-text">Cart</span>
              <span className="cart-badge">{cartItems?.length || 0}</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <Link to="/" className="mobile-menu-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                to="/products"
                className="mobile-menu-link"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                to="/cart"
                className="mobile-menu-link"
                onClick={toggleMenu}
              >
                <span className="cart-text">Cart</span>
                <span className="cart-badge">{cartItems?.length || 0}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
