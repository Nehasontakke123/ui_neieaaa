// import React, { useEffect, useState } from "react";
// import "../assets/css/StatsSection.css";
// import { FaBook, FaChalkboardTeacher, FaHandshake, FaUserGraduate, FaUniversity, FaUsers, FaChartLine } from "react-icons/fa";

// const statsData = [
//   { label: "Online Courses", value: 16, showPlus: true, icon: <FaBook /> },
//   { label: "Live Online Classes", value: 63, showPlus: true, icon: <FaChalkboardTeacher /> },
//   { label: "Partnerships", value: 94, showPlus: true, icon: <FaHandshake /> },
//   { label: "Teachers Trained", value: 2000, showPlus: true, icon: <FaUserGraduate /> },
//   { label: "Institutional Enrollments", value: 6182, showPlus: true, icon: <FaUniversity /> },
//   { label: "Individual Enrollments", value: 10612, showPlus: true, icon: <FaUsers /> },
//   { label: "Total Enrollments", value: 16801, showPlus: true, icon: <FaChartLine /> },
// ];

// const StatCard = ({ label, value, showPlus, icon }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     if (start === end) return;

//     let duration = 2000; // 2 sec
//     let incrementTime = 20;
//     let step = Math.ceil((end - start) / (duration / incrementTime));

//     const timer = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         start = end;
//         clearInterval(timer);
//       }
//       setCount(start);
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [value]);

//   return (
//     <div className="stat-card">
//       <div className="icon-box">{icon}</div>
//       <h3>
//         {showPlus && "+"}
//         {count.toLocaleString()}
//       </h3>
//       <p>{label}</p>
//     </div>
//   );
// };

// const StatsSection = () => {
//   return (
//     <section className="stats-section">
//       <div className="stats-header">
//         <h2 className="stats-title">We connect children to a bright future</h2>
//         <span className="stats-subtitle">At-a-glance</span>
//       </div>

//       <div className="stats-grid">
//         {statsData.map((stat, index) => (
//           <StatCard
//             key={index}
//             label={stat.label}
//             value={stat.value}
//             showPlus={stat.showPlus}
//             icon={stat.icon}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


import React, { useEffect, useState, useRef } from "react";
import "../assets/css/StatsSection.css";
import {
  FaBook,
  FaChalkboardTeacher,
  FaHandshake,
  FaUserGraduate,
  FaUniversity,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const statsData = [
  { label: "Online Courses", value: 16, showPlus: true, icon: <FaBook /> },
  { label: "Live Online Classes", value: 63, showPlus: true, icon: <FaChalkboardTeacher /> },
  { label: "Partnerships", value: 94, showPlus: true, icon: <FaHandshake /> },
  { label: "Teachers Trained", value: 2000, showPlus: true, icon: <FaUserGraduate /> },
  { label: "Institutional Enrollments", value: 6182, showPlus: true, icon: <FaUniversity /> },
  { label: "Individual Enrollments", value: 10612, showPlus: true, icon: <FaUsers /> },
  { label: "Total Enrollments", value: 16801, showPlus: true, icon: <FaChartLine /> },
];

const StatCard = ({ label, value, showPlus, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [visible, value]); // 👈 visible बदललं की परत run होईल (repeat)

  return (
    <div className="stat-card" ref={ref}>
      <div className="icon-box">{icon}</div>
      <h3>
        {showPlus && "+"}
        {count.toLocaleString()}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-header">
        <h2 className="stats-title">We connect children to a bright future</h2>
        <span className="stats-subtitle">At-a-glance</span>
      </div>

      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            showPlus={stat.showPlus}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
