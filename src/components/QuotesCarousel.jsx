import React from "react";
import { FaGraduationCap } from "react-icons/fa"; // 🎓 icon
import "../assets/css/QuotesCarousel.css";

const QuotesCarousel = () => {
  const quotes = [
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "The future belongs to those who prepare for it today. – Malcolm X",
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "Education is not preparation for life; education is life itself. – John Dewey",
    "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
    "The New Equitable and Innovative Educational Association (NEIEA) believes in education for all."
  ];

  return (
    <div className="quotes-container">
      <div className="quotes-track">
        {quotes.map((quote, index) => (
          <span className="quote" key={index}>
            <FaGraduationCap /> {quote}
          </span>
        ))}
        {/* duplicate set for infinite loop */}
        {quotes.map((quote, index) => (
          <span className="quote" key={`dup-${index}`}>
            <FaGraduationCap /> {quote}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuotesCarousel;
