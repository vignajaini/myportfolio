import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-card">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> your.email@example.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin</a></p>
          <p><strong>Git hub:</strong><a href=""target="_blank">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
