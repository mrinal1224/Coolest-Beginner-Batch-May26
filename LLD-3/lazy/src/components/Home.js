// src/components/Home.js
import React from "react";
import "./Home.css";

function Home() {
  const stats = [
    { id: 1, number: "500+", label: "Active Students" },
    { id: 2, number: "120+", label: "Projects Completed" },
    { id: 3, number: "25+", label: "Instructors" },
  ];

  return (
    <div className="home-container">
      {/* Hero */}
      <div className="home-hero">
        <h1>Welcome to Our Platform 🌟</h1>
        <p>
          Learn, build, and grow with our community of developers and innovators.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.id} className="stat-card">
            <div className="stat-number">{item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
