import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class HowItsWork extends Component {
    render() {
        return (
            <Fragment>
                <hr className="line" />
                <Container className="py-5" fluid={true}>
                
                    <h2 className="text-center">How to Reserve The Books from MLibrarian</h2>
                    
                    <Row className="mt-4">
                        <Col md={4} className="text-center">
                            <i className="fa fa-search fa-3x mb-3  icon-blue"></i>
                            <h4>Step 1</h4>
                            <p>Search and Select Book</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="fa fa-clock fa-3x mb-3 icon-green"></i>
                            <h4>Step 2</h4>
                            <p>Check Availability and Reserve</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="fa fa-check-circle fa-3x mb-3 icon-orange"></i>
                            <h4>Step 3</h4>
                            <p>Collect the Reserved Book</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default HowItsWork
