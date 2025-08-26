import React, { useState, useEffect } from "react";
import "../assets/css/ImageSlider.css";

// Imported local images
import slider1 from "../assets/image/slider1.png";
import slider2 from "../assets/image/slider2.png";
import slider3 from "../assets/image/slider3.png";

const images = [slider1, slider2, slider3]; // Use imported images

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {/* Dots Navigation */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
