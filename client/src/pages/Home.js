// src/pages/Home.js
import React from "react";
import guitarImage from "../assets/guitar.jpg";
import pianoImage from "../assets/piano.jpg";
import drumsImage from "../assets/drums.jpg";
import violinImage from "../assets/violin.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center bg-gray-100 p-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to Instrumental Hub</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your one-stop shop for guitars, pianos, drums, and more 🎶
        </p>
        <img
          src={guitarImage}
          alt="Guitar"
          className="mx-auto rounded-lg shadow-lg w-2/3 md:w-1/2"
        />
      </section>

      {/* Featured Instruments Section */}
      <section className="p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Instruments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Piano */}
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img src={pianoImage} alt="Piano" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Piano</h3>
            <p className="text-gray-600">Elegant sound for all occasions.</p>
          </div>

          {/* Drums */}
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img src={drumsImage} alt="Drums" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Drums</h3>
            <p className="text-gray-600">Bring the beat to life.</p>
          </div>

          {/* Violin */}
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img src={violinImage} alt="Violin" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Violin</h3>
            <p className="text-gray-600">Classical beauty in every note.</p>
          </div>

          {/* Guitar */}
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <img src={guitarImage} alt="Guitar" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">Guitar</h3>
            <p className="text-gray-600">Rock the stage with powerful chords.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white text-center p-12 mt-12">
        <h2 className="text-4xl font-bold mb-4">Start Your Musical Journey Today 🎼</h2>
        <p className="mb-6">Explore a wide collection of instruments crafted for beginners to professionals.</p>
        <a
          href="/products"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default Home;
