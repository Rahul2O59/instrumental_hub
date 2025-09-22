import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const data = [
      { id: 1, name: "Acoustic Guitar", price: 150 },
      { id: 2, name: "Electric Piano", price: 400 },
      { id: 3, name: "Drum Set", price: 600 },
    ];
    setProducts(data);
  }, []);

  return (
    <div>
      <h2>Available Instruments</h2>
      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
