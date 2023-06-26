import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bookCollection from '../../asset/images/bookcollection.jpeg'; 
import axios from 'axios';
import APICALL from '../../api/APICALL';

class EMythBook extends Component {
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
                        <h2>E-Myth Manager by Michael E. Gerber</h2>
                       
                        <p style={{ textAlign: 'justify' }}>
                        E-Myth Manager is an insightful book by Michael E. Gerber that delves into the essential principles and strategies for effective management in today's business world. Drawing on Gerber's extensive experience as a business consultant, this book offers practical guidance and valuable insights for managers looking to enhance their leadership skills and drive organizational success.
                        </p>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col md={8}>
                                {/* Course Details */}
                                <Row>
                                    <Col md={8}>
                                    <h3>Course Details - E-Myth Manager</h3>
                                    <ul>
                                        <li>Understanding the Role of a Manager</li>
                                        <li>Effective Leadership and Team Management</li>
                                        <li>Building a High-Performance Culture</li>
                                        <li>Strategic Planning and Goal Setting</li>
                                        <li>Financial Management and Budgeting</li>
                                        <li>Operations and Process Improvement</li>
                                        <li>Employee Development and Performance Management</li>
                                        <li>Effective Communication and Conflict Resolution</li>
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

export default EMythBook;
