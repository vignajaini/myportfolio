import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section  id="Contact"className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-card">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> jainivigna4@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vigna-jaini-019031316" target="_blank">linkedin</a></p>
          <p><strong>Git hub:</strong><a href="https://github.com/vignajaini"target="_blank">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
