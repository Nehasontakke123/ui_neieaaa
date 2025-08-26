import React from "react";
import "../assets/css/Introduction.css";

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <h2 className="intro-title">NEIEA'S INTRODUCTION</h2>
        <p className="intro-subtitle">
          Welcome to <span className="highlight">NEIEA</span>, The New Equitable and Innovative Educational Association
        </p>
        <p className="intro-text">
          NEIEA is committed to revolutionizing education through innovative approaches and extensive collaborations. 
          Since <strong>April 2022</strong>, NEIEA has introduced <strong>13 free online courses</strong> and partnered 
          with various institutions to benefit thousands of learners. We employ cutting-edge technological tools, 
          the best pedagogy and teaching practices, and ethical, transparent, and democratic processes to make education 
          equitable and accessible for learners worldwide.
        </p>

        <div className="intro-buttons">
          <button className="btn primary-btn">Explore Free Courses</button>
          <button className="btn secondary-btn">Support Our Mission</button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
