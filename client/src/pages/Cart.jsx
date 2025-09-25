// src/pages/Cart.jsx
"use client";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart = [], removeFromCart = () => {}, clearCart = () => {}, updateQuantity = () => {} } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const total = Array.isArray(cart) ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
  const itemCount = Array.isArray(cart) ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert("Thank you for your purchase! Your order has been placed.");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-summary">
          <span className="item-count">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {Array.isArray(cart) && cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-description">Looks like you haven't added any instruments to your cart yet.</p>
          <button className="continue-shopping-btn">Continue Shopping</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {Array.isArray(cart) &&
              cart.map((item, index) => (
                <div key={item.id} className="cart-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="item-image">
                    <img src={item.image || `/.jpg?height=80&width=80&query=${item.name}`} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">${(item.price || 0).toFixed(2)}</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="quantity-display">{item.quantity || 1}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    <span className="total-price">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
          </div>

          <div className="cart-sidebar">
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal ({itemCount} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">Free</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${(total * 1.08).toFixed(2)}</span>
              </div>
              <button
                className={`checkout-btn ${isCheckingOut ? "checking-out" : ""}`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </button>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
            <div className="security-badges">
              <div className="security-badge">
                <span className="badge-icon"></span>
                <span>Secure Checkout</span>
              </div>
              <div className="security-badge">
                <span className="badge-icon"></span>
                <span>Free Shipping</span>
              </div>
              <div className="security-badge">
                <span className="badge-icon">↩</span>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;