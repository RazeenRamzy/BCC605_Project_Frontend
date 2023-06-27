import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-container">
          <Container>
            <Row className="footer-content">
              <Col className="footer-column" lg={4} md={4} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p>A 24/1, Galle road, Colombo 03, Sri Lanka</p>
              </Col>

              <Col className="footer-column" lg={4} md={4} sm={6} xs={12}>
                <h5 className="footer-menu-title">OUR COMPANY</h5>
                <Link to="/About" className="footer-link">About Us</Link><br />
                <Link to="/Faq" className="footer-link">FAQ</Link><br />
                <Link to="/Contact" className="footer-link"> Contact Us</Link><br />
              </Col>

              <Col className="footer-column" lg={4} md={4} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/Howtopurchase" className="footer-link">How To Purchase</Link><br />
                <Link to="/Privacypolicy" className="footer-link"> Privacy Policy</Link><br />
                <Link to="/Refundpolicy" className="footer-link"> Refund Policy </Link><br />
                <Link to="/Subscriber" className="footer-link"> Subscribe to our Newsletter</Link><br />
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className="footer-bottom">
            <Container>
              <Row>
                <h6 className="footer-text">© BCAS MLibrarian | All rights reserved</h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
