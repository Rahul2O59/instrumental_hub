import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartProvider, CartContext } from "./context/CartContext";
import "./App.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  // Sum of all quantities in cart
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Instrumental Hub</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart ({itemCount})</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="footer">
            <p>© {new Date().getFullYear()} Instrumental Hub. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
