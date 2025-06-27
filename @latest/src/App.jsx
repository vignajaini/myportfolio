import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import "./App.css";


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer>
        <p>&copy; 2025 Vigna. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
