import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class WhyMlibrarian extends Component {
  render() {
    return (
      <Fragment>
        <hr className="line" />
        <Container className="py-5" fluid={true}>
          <h2 className="text-center">Why MLibrarian?</h2>
          <Row className="mt-4">
            <Col md={4}>
              <div className="text-center">
                <i className="fa fa-book fa-3x mb-3 icon-yellow"></i>
                <h4>Access to Vast Knowledge</h4>
                <p>Expand your horizons with our extensive collection of books.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <i className="fa fa-graduation-cap fa-3x mb-3 icon-blue"></i>
                <h4>Academic Excellence</h4>
                <p>Enhance your academic performance through reading and learning.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <i className="fa fa-users fa-3x mb-3 icon-green"></i>
                <h4>Community Engagement</h4>
                <p>Join a community of readers and engage in intellectual discussions.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default WhyMlibrarian;
