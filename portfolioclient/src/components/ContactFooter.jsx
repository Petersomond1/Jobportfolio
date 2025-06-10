import React from 'react';
import './ContactFooter.css';

const ContactFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact-footer-wrapper">
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h1 className="header"><span>Contact</span></h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span>Full Name</span>
            <input type="text" placeholder='Enter Your Full Name' required/>
          </div>
          <div className="input-box">
            <span>Email</span>
            <input type="email" placeholder='Enter Your Email' required/>
          </div>
          <div className="input-box">
            <span>Message</span>
            <textarea placeholder='Enter Your Message' required></textarea>
          </div>
          <div className="btttn">
            <input type="submit" value="Send"/>
          </div>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="col-left">
          <div className="col-box">
            <span className="footer-label">Mondayp</span>
            <span className="footer-info">4105 Hawkins street, Atlanta, GA, USA</span>
          </div>
          <div className="col-box">
            <span className="footer-label">Work Phone</span>
            <span className="footer-info">+1 6784208200</span>
          </div>
          <div className="col-box">
            <span className="footer-label">Email</span>
            <span className="footer-info">
              <a href="mailto:petersomond@gmail.com">
                petersomond@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="col-right">
          {/* You can add social media links or additional footer content here */}
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;