import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import blogimg1 from '../../asset/images/blogpop.jpg'
// import blogimg2 from '../../asset/images/IMG2.png'
// import blogimg3 from '../../asset/images/blogella.jpg'
// import blogimg4 from '../../asset/images/bloggalle.jpg'

class BlogPost extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5" fluid={true}>
                <hr className="line" />
                    <h3 className="text-center">MLibrarian Recommendations for You</h3>
                    <Row className="mt-4">
                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                {/* <Card.Img variant="top" src={blogimg1} /> */}
                                <Card.Body>
                                    <Card.Title>To do</Card.Title>
                                        <Card.Text>
                                        To do
                                        </Card.Text>

                                    <Button className="text-center" variant="secondary">
                                        <a href="/#" className="mb-4">  
                                            <Link to="/BlogPopular" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button> 
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Duplicate the above Card component as needed */}

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                {/* <Card.Img variant="top" src={blogimg2} /> */}
                                <Card.Body>
                                    <Card.Title>To do</Card.Title>
                                        <Card.Text>
                                        To do
                                        </Card.Text>
                                    
                                    <Button className="text-center" variant="secondary">
                                        <a href="/#" className="mb-4">  
                                            <Link to="/BlogBeach" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                {/* <Card.Img variant="top" src={blogimg3} /> */}
                                <Card.Body>
                                    <Card.Title>To do</Card.Title>
                                        <Card.Text>
                                        To do 
                                        </Card.Text>

                                    <Button className="text-center" variant="secondary">
                                        <a href="/#" className="mb-4">  
                                            <Link to="/BlogElla" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button> 

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                {/* <Card.Img variant="top" src={blogimg4} /> */}
                                <Card.Body>
                                    <Card.Title>To do <br></br> </Card.Title>
                                        <Card.Text>
                                        To do
                                        </Card.Text>
                                    
                                    <Button className="text-center" variant="secondary">
                                        <a href="/#" className="mb-4">  
                                            <Link to="/BlogGalleFort" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Duplicate the above Card component as needed */}

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default BlogPost
