import React from "react";
import heroImg from "../assets/hero.jpg";
import guitarImg from "../assets/guitar.jpg";
import pianoImg from "../assets/piano.jpg";
import drumsImg from "../assets/drums.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <h2>Welcome to Instrumental Hub</h2>
          <p>Find the perfect instrument for your music journey</p>
          <a href="/products" className="btn">Shop Now</a>
        </div>
      </section>

      {/* Featured Instruments */}
      <section className="featured">
        <h2>Featured Instruments</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <img src={guitarImg} alt="Guitar" />
            <h3>Acoustic Guitar</h3>
          </div>
          <div className="featured-card">
            <img src={pianoImg} alt="Piano" />
            <h3>Electric Piano</h3>
          </div>
          <div className="featured-card">
            <img src={drumsImg} alt="Drums" />
            <h3>Drum Set</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
