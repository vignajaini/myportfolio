import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300); 
  }, []);

  return (
    <section id="about" className="about-section">
      <div className={`about-container ${show ? "fade-in" : ""}`}>
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
            👋 Hi! I'm <span className="highlight">Vigna Jaini</span>, a passionate developer and data enthusiast based in India. 
              With a knack for crafting sleek front-end interfaces and diving deep into data analysis, 
              I bring ideas to life through clean code and thoughtful design.
            </p>

            <p>
              I love working on full-stack projects that solve real-world problems and analyzing data to uncover valuable insights. 
              I believe in continuous learning, clean architecture, and writing code that’s as readable as it is functional.
            </p>

            <p>
              Outside of coding, I enjoy exploring new tech trends, 
              contributing to open-source .
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
