import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section full-screen">
        <h2>About Me</h2>
        <p>Hi, I'm [Your Name], a passionate web developer.</p>
      </section>

      <section id="projects" className="section full-screen">
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
          <li>Project 3 - Description</li>
        </ul>
      </section>

      <section id="contact" className="section full-screen">
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourname</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
       
      </section>

      <footer>
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
