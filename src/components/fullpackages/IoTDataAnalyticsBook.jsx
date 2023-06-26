import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bookCollection from '../../asset/images/bookcollection.jpeg'; 
import axios from 'axios';
import APICALL from '../../api/APICALL';

class IoTDataAnalyticsBook extends Component {
    constructor() {
        super();
        this.state = {
            sdid: '',
            stname: '',
            stemail: '',
            sphone: '',
            selectedDate: null,
            bookingConfirmed: false
        };
    }

    onchangename = (event) => {
        let stname = event.target.value;
        this.setState({ stname: stname });
    };

    onchangeemail = (event) => {
        let stemail = event.target.value;
        this.setState({ stemail: stemail });
    };

    onchangephone = (event) => {
        let sphone = event.target.value;
        this.setState({ sphone: sphone });
    };

    onchangecountry = (event) => {
        let sdid = event.target.value;
        this.setState({ sdid: sdid });
    };

    onDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    onformsubmit = (event) => {
        const { stname, stemail, sphone, sdid, selectedDate } = this.state;

        const bookingData = {
            sdid,
            stname,
            stemail,
            sphone,
            selectedDate
        };

        axios
            .post(APICALL.BookingConfirm, bookingData)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ bookingConfirmed: true });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <Fragment >
                <Container>
                    <Row>
                        <Col md={12}>
                        {/* <div className="image-container">
                            <Image src={bookCollection} alt="Book Image" className="book-image" fluid />
                        </div> */}
                        <h2>Internet of Things and Data Analytics</h2>
                       
                        <p style={{ textAlign: 'justify' }}>
                            The field of Internet of Things (IoT) and Data Analytics is a rapidly evolving area that involves connecting physical devices and sensors to collect and analyze data for insights and decision-making. This technology has revolutionized various industries, including healthcare, manufacturing, transportation, and smart cities. In this course, you will learn about the fundamentals of IoT and data analytics, including data collection, storage, analysis, and visualization. You will also explore real-world applications and case studies to understand how IoT and data analytics are transforming businesses and society.
                        </p>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col md={8}>
                                {/* Course Details */}
                                <Row>
                                    <Col md={8}>
                                        <h3>Course Details</h3>
                                        <ul>
                                            <li>Introduction to Internet of Things (IoT)</li>
                                            <li>Sensors and Data Collection</li>
                                            <li>Data Storage and Management</li>
                                            <li>Data Analysis Techniques</li>
                                            <li>Data Visualization and Reporting</li>
                                            <li>Real-time Monitoring and Control</li>
                                            <li>IoT Security and Privacy</li>
                                            <li>Case Studies and Applications</li>
                                        </ul>

                                        <h3>Reserving a Book:</h3>
                                        <ul>
                                            <li>Reservation can be made up to 2 weeks in advance.</li>
                                            <li>Each student can reserve a maximum of 2 books at a time.</li>
                                            <li>Reserved books should be collected within 2 days of the reserved date.</li>
                                            <li>Failure to collect the reserved book within the specified time may result in cancellation.</li>
                                        </ul>

                                        <h3>Returning a Book:</h3>
                                        <ul>
                                            <li>The maximum loan period is 2 weeks.</li>
                                            <li>Books must be returned on or before the due date to avoid late charges.</li>
                                            <li>Late charges for overdue books are RS.200 per day.</li>
                                        </ul>
                                </Col>
                                </Row>
                                </Col>
                            
                            
                                
                           

                            {/* User Inquiries */}
                            <Col md={4}>
                                <Card>
                                    <Card.Header as="h5">Reserve the Book</Card.Header>
                                    {this.state.bookingConfirmed && <Alert variant="success">Booking Confirmed</Alert>}
                                    <Card.Body>

                                        <Form>
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Student ID <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangename}
                                                    type="text"
                                                    placeholder="Enter your student ID"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Student Name <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangeemail}
                                                    type="email"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangephone}
                                                    type="text"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="country">
                                                <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangecountry}
                                                    type="text"
                                                    placeholder="Enter your number"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="date">
                                                <Form.Label>Select Date <span className="text-danger">*</span></Form.Label>
                                                <br />
                                                <DatePicker
                                                    selected={this.state.selectedDate}
                                                    onChange={this.onDateChange}
                                                    minDate={new Date()}
                                                    placeholderText="Select the reservation date"
                                                    className="form-control"
                                                    required
                                                />
                                            </Form.Group>

                                            <Button variant="primary" onClick={this.onformsubmit}>Submit</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default IoTDataAnalyticsBook;
