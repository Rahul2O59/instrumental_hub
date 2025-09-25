"use client"

import { useEffect, useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./Product.css"

function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Acoustic Guitar",
        price: 299,
        originalPrice: 349,
        category: "strings",
        image: "/acoustic-guitar.png",
        rating: 4.8,
        reviews: 124,
        description: "Professional acoustic guitar with rich, warm tone",
      },
      {
        id: 2,
        name: "Digital Piano",
        price: 899,
        originalPrice: 1099,
        category: "keyboards",
        image: "/digital-piano.jpg",
        rating: 4.9,
        reviews: 89,
        description: "88-key weighted digital piano with authentic sound",
      },
      {
        id: 3,
        name: "Acoustic Drum Kit",
        price: 1299,
        originalPrice: 1499,
        category: "drums",
        image: "/acoustic-drum-kit.png",
        rating: 4.7,
        reviews: 67,
        description: "Complete 5-piece acoustic drum set with cymbals",
      },
      {
        id: 4,
        name: "Solo Violin",
        price: 449,
        originalPrice: 529,
        category: "strings",
        image: "/solo-violin.png",
        rating: 4.6,
        reviews: 43,
        description: "Handcrafted violin with exceptional tone quality",
      },
      {
        id: 5,
        name: "Electric Bass",
        price: 599,
        originalPrice: 699,
        category: "strings",
        image: "/electric-bass.jpg",
        rating: 4.8,
        reviews: 92,
        description: "4-string electric bass with versatile pickup system",
      },
      {
        id: 6,
        name: "Alto Saxophone",
        price: 799,
        originalPrice: 949,
        category: "brass",
        image: "/saxophone.png",
        rating: 4.7,
        reviews: 56,
        description: "Professional alto saxophone with gold lacquer finish",
      },
      {
        id: 7,
        name: "Brass Trumpet",
        price: 349,
        originalPrice: 429,
        category: "brass",
        image: "/brass-trumpet.png",
        rating: 4.5,
        reviews: 78,
        description: "Student-level brass trumpet with clear, bright tone",
      },
    ]
    setProducts(data)
    setFilteredProducts(data)
  }, [])

  useEffect(() => {
    let filtered = products

    if (selectedCategory !== "all") {
      filtered = products.filter((product) => product.category === selectedCategory)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, selectedCategory, sortBy])

  const categories = [
    { value: "all", label: "All Instruments" },
    { value: "strings", label: "String Instruments" },
    { value: "keyboards", label: "Keyboards & Pianos" },
    { value: "drums", label: "Drums & Percussion" },
    { value: "brass", label: "Brass & Woodwinds" },
  ]

  const sortOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "price-low", label: "Price (Low to High)" },
    { value: "price-high", label: "Price (High to Low)" },
    { value: "rating", label: "Highest Rated" },
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>,
      )
    }

    return stars
  }

  return (
    <div className="products-container">
      <div className="products-hero">
        <div className="products-hero-content">
          <h1 className="products-title">
            Our Instrument Collection
            <span className="products-subtitle">Discover Your Perfect Sound</span>
          </h1>
          <p className="products-description">
            From beginner-friendly instruments to professional-grade equipment, find the perfect instrument to express
            your musical passion.
          </p>
        </div>
      </div>

      <div className="products-main">
        <div className="products-filters">
          <div className="filter-group">
            <label htmlFor="category-filter" className="filter-label">
              Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter" className="filter-label">
              Sort By
            </label>
            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="products-count">
            <span>{filteredProducts.length} instruments found</span>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <button onClick={() => addToCart(product)} className="quick-add-btn">
                    Quick Add to Cart
                  </button>
                </div>
                {product.originalPrice > product.price && (
                  <div className="sale-badge">Save ${product.originalPrice - product.price}</div>
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-rating">
                  <div className="stars">{renderStars(product.rating)}</div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="product-pricing">
                  <span className="product-price">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>

                <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No instruments found</h3>
            <p>Try adjusting your filters to see more products.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
