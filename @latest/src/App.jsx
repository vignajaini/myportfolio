import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
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
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <Home />
      <About />
      <Projects />
      <Contact />

      <footer>
        <p>&copy; 2025 Vigna. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
