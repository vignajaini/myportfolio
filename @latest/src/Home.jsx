import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="home">
      <div className={`home-container ${isVisible ? "fade-in" : ""}`}>
        <div className="home-text">
          <h1>
            Hello, I'm <span className="highlight">Vigna Jaini</span>
          </h1>

          <h2 className="typing-effect">
          <Typewriter
              words={["Full-Stack Developer | Data Analyst | Tech Enthusiast"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h2>

          <p>
            I design and develop user-friendly websites and analyze data to uncover insights.
            Passionate about building impactful digital experiences.
          </p>
        </div>

        <div className="home-image">
          <img
            src="/profile.jpg"
            alt="Vigna Jaini"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
