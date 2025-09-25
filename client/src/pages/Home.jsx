// src/pages/Home.jsx
"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "../components/ui/button"; 

import homeProducts from "../data/homeProducts";
import "./Home.css";

const CategorySection = ({ title, items = [] }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="category-section">
      <h2>{title}</h2>
      <div className="products-grid">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <Button onClick={() => addToCart(item)}>Add to Cart</Button>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const safeHomeProducts = {
    topSelling: Array.isArray(homeProducts.topSelling) ? homeProducts.topSelling : [],
    trending: Array.isArray(homeProducts.trending) ? homeProducts.trending : [],
    onSale: Array.isArray(homeProducts.onSale) ? homeProducts.onSale : [],
    offers: Array.isArray(homeProducts.offers) ? homeProducts.offers : [],
    reviews: Array.isArray(homeProducts.reviews) ? homeProducts.reviews : [],
  };

  return (
    <div className="home-container">
      <h1>Welcome to Instrumental Hub</h1>
      <p>Your one-stop shop for musical instruments</p>
      <CategorySection title=" Top Selling" items={safeHomeProducts.topSelling} />
      <CategorySection title=" Trending Now" items={safeHomeProducts.trending} />
      <CategorySection title=" On Sale" items={safeHomeProducts.onSale} />
      <CategorySection title=" Special Offers" items={safeHomeProducts.offers} />
      <CategorySection title=" Customer Reviews" items={safeHomeProducts.reviews} />
    </div>
  );
};

export default Home;