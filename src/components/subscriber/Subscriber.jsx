import React, { useState } from 'react';
import newsletterImage from '../../asset/images/bk1.jpeg';
import '../../asset/css/custom-styles.css';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display success message
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-image-container">
        <img src={newsletterImage} alt="Newsletter" className="newsletter-image" />
      </div>
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Stay up to date with the latest news, events, and offers from MLibrarian.
        </p>
        {subscribed ? (
          <p className="newsletter-success-message">Thank you for subscribing!</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="newsletter-label">Email:</label>
            <div className="newsletter-input-container">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
