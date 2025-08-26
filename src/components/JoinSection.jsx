import React from "react";
import "../assets/css/JoinSection.css";

const JoinSection = () => {
  return (
    <section className="join-section">
      {/* Floating Emojis */}
      <span className="floating-emoji">🎓</span>
      <span className="floating-emoji">📚</span>
      <span className="floating-emoji">✨</span>

      {/* Content */}
      <div className="join-content">
        <h2 className="join-title">🌟 Join the Movement</h2>
        <p className="join-desc">
          Partner with us, volunteer your time, or support a learner.
          Together we can make education equitable, innovative, and
          accessible for everyone.
        </p>
        <div className="join-buttons">
          <a href="#volunteer" className="btn volunteer-btn">
            🤝 Become a Volunteer
          </a>
          <a href="#donate" className="btn donate-btn">
            💛 Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
