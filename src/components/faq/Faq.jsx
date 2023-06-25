import React, { Component } from 'react';
import { Fragment } from 'react';
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

class Faq extends Component {
  render() {
    return (
      <Fragment>
        <MDBContainer>
          <section>
            <MDBTypography tag="h3" className="text-center mb-4 pb-2 text-primary fw-bold">
              FAQ
            </MDBTypography>
            <p className="text-center mb-5" style={{ fontWeight: 'bold', backgroundColor: '#9dc0f2' }}>
              Answers to the Most Frequently Asked Questions about the MLibrarian Project
            </p>

            <MDBRow>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> What is MLibrarian?
                </MDBTypography>
                <p>
                  MLibrarian is a machine learning-based library system developed for BCAS students.
                  It provides an advanced search and recommendation engine to help students find relevant books and resources.
                </p>
              </MDBCol>

              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> How does MLibrarian work?
                </MDBTypography>
                <p>
                  MLibrarian utilizes machine learning algorithms to analyze user preferences and behavior,
                  recommending books and resources based on individual interests and past interactions with the system.
                  It also offers intelligent search capabilities to quickly find books based on various criteria.
                </p>
              </MDBCol>

              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> How can I access MLibrarian?
                </MDBTypography>
                <p>
                  MLibrarian can be accessed through the BCAS student portal or by loging to the MLibrarian site.
                  Students can log in using their BCAS credentials and start exploring the library's vast collection of books.
                </p>
              </MDBCol>

              {/* Add more FAQ items as needed */}

            </MDBRow>

            <p className="text-center mb-5" style={{ fontWeight: 'bold', backgroundColor: '#9dc0f2' }}>
              If you have any further questions, please contact us using the "Contact Us" link provided below.
            </p>

          </section>
        </MDBContainer>
      </Fragment>
    );
  }
}

export default Faq;
