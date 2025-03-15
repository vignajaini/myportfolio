import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section full-screen">
      <h2>Contact</h2>
      <p>Email: yourname@example.com</p>
      <p>
        LinkedIn:{" "}
        <a
          href="www.linkedin.com/in/vigna-jaini-019031316"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/vigna-jaini
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/yourusername
        </a>
      </p>
    </section>
  );
}

export default Contact;
