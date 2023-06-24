import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Card, Row, Badge } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import image from '../../asset/images/IMG1.png'
import IoTbook from '../../asset/images/IoTbook.jpeg'
import codeBook from '../../asset/images/codeBook.jpeg'
import badSciBook from '../../asset/images/badSciBook.jpeg'
import justiceBook from '../../asset/images/justiceBook.jpeg'
import eMythBook from '../../asset/images/eMythBook.jpeg'
import thinkBook from '../../asset/images/thinkBook.jpeg';
import patternsBook from '../../asset/images/patternsBook.jpeg';
import hospitalityBook from '../../asset/images/hospitalityBook.jpeg';
import { Rating } from '@mui/material';
import '../../asset/css/custom-styles.css';




class Packages extends Component {
    render() {
        return (
            <Fragment>
                <div  className="text-center p-1 mt-2">
                    <hr className="line" />
                    <h2>Unveiling the Literary Gems of 2023 for BCAS Students</h2>

                </div>
                <Container fluid={true}>
                    <Row>

                    <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                            <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                    <Card.Img  variant="top" src={IoTbook} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center" >
                                        <div>
                                            <Card.Title>Internet of Things and Data Analytics</Card.Title>
                                        </div>                                  
                                    </div>
                                    <Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                            <Rating name="size-medium" defaultValue={5} size="medium" readOnly />
                                            </div>
                                            <div>
                                            <Badge bg="success">Available</Badge>
                                            </div>
                                        </div>
                                        </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">
                                        <Link to="/SafariTour" style={{ color: 'white' }}>
                                            Click here for more information!
                                        </Link>
                                        </a>
                                    </Container>
                                    </Card.Footer>
                            </Card>
                            </div>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                            <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                    <Card.Img variant="top" src={codeBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center" >
                                        <div>
                                            <Card.Title>Cracking the Coding Interview</Card.Title>
                                        </div>                                  
                                    </div>
                                    <Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                            <Rating name="size-medium" defaultValue={5} size="medium" readOnly />
                                            </div>
                                            <div>
                                            <Badge bg="success">Available</Badge>
                                            </div>
                                        </div>
                                        </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                    <Container className="text-center">
                                    <a href="#" className="btn btn-link w-100">  
                                            <Link to="/Popular" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                    </Card.Footer>
                            </Card>
                            </div>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                            <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                    <Card.Img variant="top" src={badSciBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center" >
                                        <div>
                                            <Card.Title>Bad Science Paperback - Ben Glodacre</Card.Title>
                                        </div>                                  
                                    </div>
                                    <Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                            <Rating name="size-medium" defaultValue={5} size="medium" readOnly />
                                            </div>
                                            <div>
                                            <Badge bg="success">Available</Badge>
                                            </div>
                                        </div>
                                        </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                    <Container className="text-center">
                                    <a href="#" className="btn btn-link w-100">  
                                            <Link to="/FamilyTrip" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                    </Card.Footer>
                            </Card>
                            </div>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                            <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                    <Card.Img variant="top" src={justiceBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center" >
                                        <div>
                                            <Card.Title>Jeremy Hutchinson’s Case Histories</Card.Title>
                                        </div>                                  
                                    </div>
                                    <Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                            <Rating name="size-medium" defaultValue={4} size="medium" readOnly />
                                            </div>
                                            <div>
                                            <Badge bg="success">Available</Badge>
                                            </div>
                                        </div>
                                        </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                    <Container className="text-center">
                                    <a href="#" className="btn btn-link w-100">  
                                            <Link to="/Discover" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                    </Card.Footer>
                            </Card>
                            </div>
                            </Col>

                            <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                                <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                        <Card.Img variant="top" src={eMythBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center" >
                                            <div>
                                                <Card.Title>E-Myth Manager by Michael E. Gerber </Card.Title>
                                            </div>                                  
                                        </div>
                                        <Card.Text>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                <Rating name="size-medium" defaultValue={4} size="medium" readOnly />
                                                </div>
                                                <div>
                                                <Badge bg="success">Available</Badge>
                                                </div>
                                            </div>
                                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                        <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                                <Link to="/Honeymoon" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                            </a>
                                        </Container>
                                        </Card.Footer>
                                </Card>
                                </div>
                                </Col>

                                <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                                <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                        <Card.Img variant="top" src={thinkBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center" >
                                            <div>
                                                <Card.Title>Thinking, Fast and Slow by Daniel Kahneman </Card.Title>
                                            </div>                                  
                                        </div>
                                        <Card.Text>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                <Rating name="size-medium" defaultValue={5} size="medium" readOnly />
                                                </div>
                                                <div>
                                                <Badge bg="success">Available</Badge>
                                                </div>
                                            </div>
                                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                        <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                                <Link to="/JaffnaTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                            </a>
                                        </Container>
                                        </Card.Footer>
                                </Card>
                                </div>
                                </Col>
                       
                             <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                                <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                        <Card.Img variant="top" src={patternsBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center" >
                                            <div>
                                                <Card.Title>Soft Skills: The Software Developer’s Life Manual </Card.Title>
                                            </div>                                  
                                        </div>
                                        <Card.Text>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                <Rating name="size-medium" defaultValue={5} size="medium" readOnly />
                                                </div>
                                                <div>
                                                <Badge bg="success">Available</Badge>
                                                </div>
                                            </div>
                                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                        <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                                <Link to="/ColomboTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                            </a>
                                        </Container>
                                        </Card.Footer>
                                </Card>
                                </div>
                                </Col>

                                <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>

                                <div className="cover-photo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Card style={{ height: '33rem', width: '20rem', margin: '10px', transform: 'scale(1.0)' }}>
                                        <Card.Img variant="top" src={hospitalityBook} style={{ borderRadius: '0', objectFit: 'cover', }} />
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center" >
                                            <div>
                                                <Card.Title>Setting the Table: The Transforming Pow... </Card.Title>
                                            </div>                                  
                                        </div>
                                        <Card.Text>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                <Rating name="size-medium" defaultValue={4} size="medium" readOnly />
                                                </div>
                                                <div>
                                                <Badge bg="success">Available</Badge>
                                                </div>
                                            </div>
                                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ backgroundColor: '#022fd3', padding: '5px', fontSize: '14px' }}>
                                        <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                                <Link to="/KandyTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                            </a>
                                        </Container>
                                        </Card.Footer>
                                </Card>
                                </div>
                                </Col>






                        {/* <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagekan} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Kandy Tour with your family</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">3 Days</Badge>
                                            <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Visit Kandy for a once in a lifetime experience with your loved ones
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 160,000 (GBP 422)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/KandyTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
            </Fragment>

        )
    }
}

export default Packages




