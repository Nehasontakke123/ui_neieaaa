// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaWhatsapp,
// } from "react-icons/fa";
// import "../assets/css/Navbar.css";
// import logo from "../assets/image/logo.png"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* === TOP ROW === */}
//       <div className="navbar-top">
//         <div className="logo-container">
//           <img src={logo} alt="NEIEA Logo" className="logo" />
//           <div className="logo-text">
//             <h1>NEIEA</h1>
//             <p>The New Equitable and Innovative Educational Association</p>
//           </div>
//         </div>

//         <div className="top-right">
//           <div className="social-icons">
//             <FaFacebookF />
//             <FaTwitter />
//             <FaInstagram />
//             <FaLinkedinIn />
//             <FaYoutube />
//             <FaWhatsapp />
//           </div>

//           <select className="language-select">
//             <option>Select Language</option>
//             <option>English</option>
//             <option>Hindi</option>
//             <option>Marathi</option>
//           </select>

//           <button className="donate-btn">
//             ❤️ Donate Now
//           </button>
//         </div>
//       </div>

//       {/* === BOTTOM ROW (Navigation Links) === */}
//       <div className="navbar-bottom">
//         <div
//           className={`menu-toggle ${isOpen ? "active" : ""}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Our Projects</li>
//           <li>Courses</li>
//           <li>Donate</li>
//           <li>Featured Stories</li>
//           <li>Media and Events</li>
//           <li>Contact Us</li>
//           <li>Volunteer</li>
//           <li>NEI USA</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "../assets/css/Navbar.css";
import logo from "../assets/image/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* === TOP ROW === */}
      <div className="navbar-top">
        <div className="logo-container">
          <img src={logo} alt="NEIEA Logo" className="logo" />
          <div className="logo-text">
            <h1>NEIEA</h1>
            <p>The New Equitable and Innovative Educational Association</p>
          </div>
        </div>

        <div className="top-right">
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
            <FaWhatsapp />
          </div>

          <select className="language-select">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>

          <button className="donate-btn">❤️ Donate Now</button>
        </div>
      </div>

      {/* === BOTTOM ROW === */}
      <div className="navbar-bottom">
        <div
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Projects</li>
          <li>Courses</li>
          <li>Donate</li>
          <li>Featured Stories</li>
          <li>Media and Events</li>
          <li>Contact Us</li>
          <li>Volunteer</li>
          <li>NEI USA</li>
        </ul>
      </div>
    </nav>
  );
}
