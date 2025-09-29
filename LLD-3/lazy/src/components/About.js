// src/components/About.js
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import "./About.css";

function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fakeTeam = Array.from({ length: 2000 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
      bio: faker.lorem.sentence(),
      avatar: faker.image.avatar(),
      company: faker.company.name(),
    }));
    setTeam(fakeTeam);
  }, []);

  return (
    <div className="about-container">
      {/* Hero */}
      <div className="about-hero">
        <h1>About Our Company 🚀</h1>
        <p>
          We are a team of passionate developers, designers, and innovators,
          building scalable products with cutting-edge technology.
        </p>
      </div>

      {/* Mission */}
      <div className="mission-card">
        <h2>Our Mission</h2>
        <p>
          To empower students and professionals worldwide with accessible,
          high-quality education and tools for the digital age.
        </p>
        <div className="mission-progress">
          <div className="mission-progress-fill"></div>
        </div>
        <p style={{ fontSize: "0.9rem", color: "#718096" }}>
          80% Goal Achieved 🎯
        </p>
      </div>

      {/* Team */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.avatar} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="company">{member.company}</p>
              <p className="bio">“{member.bio}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
