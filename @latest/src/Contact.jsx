import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-container">
        <div className="contact-info-box">
          <h3>Contact Information</h3>
          <p><strong>Email</strong><br />jainivigna4@gmail.com</p>
          <p><strong>LinkedIn</strong><br />
            <a href="https://www.linkedin.com/in/vigna-jaini-019031316" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/vigna-jaini-019031316
            </a>
          </p>
          <p><strong>GitHub</strong><br />
            <a href="https://github.com/vignajaini" target="_blank" rel="noopener noreferrer">
              github.com/vignajaini
            </a>
          </p>
          <div className="status">
            <span className="status-dot"></span> Available for freelance work and full-time opportunities
          </div>
        </div>

        <form className="contact-form">
          <h3>Send Me a Message</h3>
          <input type="text" placeholder="Full Name *" required />
          <input type="email" placeholder="Email Address *" required />
          <input type="text" placeholder="Subject *" required />
          <textarea placeholder="Your detailed message here..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
