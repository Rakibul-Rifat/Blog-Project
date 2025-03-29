import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import the CSS file

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const images = [
    'https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww', 
    'https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D', 
    'https://assets.blog.engoo.com/wp-content/uploads/sites/9/2023/08/25071441/study_cover.jpg.webp'
  ]; // Array of image URLs
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className="hero-section">
      <div className="slider">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      </div>
      <div className="overlay">
        <h2>Unlock the Power of Learning</h2>
        <p>Explore Expert Resources, Tips, and Guides to Enhance Your Study Journey</p>
      </div>
    </div>
  );
};

export default ImageSlider;