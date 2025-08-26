import React from "react";
import "../assets/css/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Header */}
      <div className="about-header">
        <span className="about-tag">ABOUT US</span>
        <h2 className="about-title">Equitable. Innovative. Transparent.</h2>
        <p className="about-desc">
          NEIEA (The New Equitable and Innovative Educational Association) is a
          non-profit NGO led by educationists and supporters committed to
          advancing educational goals with innovative pedagogy, inclusive
          culture, and cutting-edge technology. As a knowledge sharing
          platform, we collaborate with Educational Institutions, Colleges, and
          Skills Development Centers. Join us in bringing transformative changes
          to education, making it equitable and innovative for everyone!
        </p>
      </div>

      {/* Vision + Mission Cards */}
      <div className="impact-cards">
        <div className="impact-card">
          <h4>Our Vision</h4>
          <p>
            To envision a society where all youth and citizens are able to
            obtain good quality education and use this to transform society
            ensuring human welfare, sustainability, and progress.
          </p>
        </div>

        <div className="impact-card">
          <h4>Our Mission</h4>
          <p>
            To provide good quality and innovative education to all segments of
            society with high consideration given to providing free education to
            the poor.
          </p>
        </div>
      </div>

      {/* Impact Report Section */}
      <div className="impact-section">
        <span className="about-tag">IMPACT REPORT 2022–24</span>
        <h2 className="about-title">Education for All</h2>
        <p className="about-desc">
          NEIEA is committed to revolutionizing education through innovative
          approaches and extensive collaborations. Since April 2022, NEIEA has
          introduced 13 free online courses and partnered with various
          institutions to benefit thousands of learners. We are recognized for
          credibility and transparency, having obtained the <b>80G
          certification</b> for tax-exempt donations and a <b>Darpan ID</b> to
          ensure compliance and accountability.
        </p>
        <p className="about-desc">
          NEIEA uses a modern pedagogy called{" "}
          <b>Discourse Oriented Pedagogy (DOP)</b> to nurture critical
          thinking—unlike the widely used rote-memorization approach.
        </p>

        <div className="impact-cards">
          <div className="impact-card">
            <h4>Transparency</h4>
            <p>
              80G certified and registered with Darpan for accountability.
            </p>
          </div>

          <div className="impact-card">
            <h4>Modern Pedagogy</h4>
            <p>
              DOP fosters analytical, critical, and collaborative learning.
            </p>
          </div>

          <div className="impact-card highlight">
            <h4>Key Outcomes</h4>
            <ul>
              <li>13 free online courses introduced since 2022</li>
              <li>Thousands of learners benefited via partnerships</li>
              <li>Inclusive, ethical, and democratic operating processes</li>
            </ul>
          </div>
        </div>

        <a href="#" className="impact-btn">
          Click Here To Know More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
