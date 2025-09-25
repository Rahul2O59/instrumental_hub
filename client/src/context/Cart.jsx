"use client";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      <p className="cart-subtitle">
        {cartItems.length} {cartItems.length === 1 ? "item" : "items"} 🛒
      </p>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty-title">Your cart is empty</p>
          <p className="cart-empty-text">
            Looks like you haven't added any instruments to your cart yet.
          </p>
          <Link to="/products" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="cart-quantity">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
