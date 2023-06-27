import React, { Component } from 'react';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-page">
        <div className="banner-section">
          <h1>Welcome to BCAS MLibrarian</h1>
          <p>Your Gateway to Knowledge and Learning</p>
        </div>

        <div className="content-section">
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At BCAS MLibrarian, our mission is to empower BCAS students with easy access to a wide range of educational resources and promote a culture of reading and continuous learning.
            </p>
          </div>

          <div className="features-section">
            <h2>Key Features</h2>
            <ul>
              <li>Extensive collection of books and study materials</li>
              <li>24/7 online access to resources</li>
              <li>Personalized recommendations based on your interests</li>
              <li>Collaborative learning opportunities with fellow BCAS students</li>
              <li>Access to exclusive educational events and workshops</li>
            </ul>
          </div>

          <div className="testimonial-section">
            <h2>What BCAS Students Say</h2>
            <div className="testimonial">
              <blockquote>
                "BCAS MLibrarian has been a game-changer for my studies. The vast collection of resources and personalized recommendations have helped me excel in my academic journey."
              </blockquote>
              <cite>- John Doe, BCAS Student</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                "I appreciate the convenience of accessing books and study materials anytime, anywhere. BCAS MLibrarian has truly made learning enjoyable and accessible for BCAS students."
              </blockquote>
              <cite>- Jane Smith, BCAS Student</cite>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
