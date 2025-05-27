import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-container">

        <div className="project-card">
          <img src="/icons/portfolio.png" alt="Portfolio Website" />
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website showcasing my skills, projects, and achievements.</p>
          <p className="tech">Tech Stack: React, Vite, CSS, HTML</p>
          <div className="buttons">
            <button className="github">GitHub</button>
            <button className="live">Live Demo</button>
          </div>
        </div>

        <div className="project-card">
          <img src="/icons/language-learning.png" alt="Language Learning Platform" />
          <h3>Language Learning Platform</h3>
          <p>Real-time language classes, chatbot practice, and interactive exercises.</p>
          <p className="tech">Tech Stack: Django, React, Firebase, WebRTC</p>
          <div className="buttons">
            <button className="github">GitHub</button>
            <button className="live">Live Demo</button>
          </div>
        </div>

        <div className="project-card">
          <img src="/icons/weather-app.png" alt="Weather App" />
          <h3>Weather App</h3>
          <p>Displays real-time weather data based on user’s location and city search.</p>
          <p className="tech">Tech Stack: React, OpenWeatherMap API, CSS</p>
          <div className="buttons">
            <button className="github">GitHub</button>
            <button className="live">Live Demo</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
