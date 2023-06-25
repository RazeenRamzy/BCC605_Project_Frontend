import React, { Component } from 'react';
import { Fragment } from 'react';
import { MDBContainer, MDBTypography, MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdb-react-ui-kit';


class Faq extends Component  {
  render() {
    return (
      <Fragment className="faq-container">
        <MDBContainer >
          <section className="faq-section">
            <MDBTypography tag="h3" className="faq-title">
              FAQ
            </MDBTypography>
            <p className="faq-subtitle">
              Answers to the Most Frequently Asked Questions about the MLibrarian Project
            </p>

            <MDBListGroup>
              <MDBListGroupItem className="faq-item">
                <h6 className="faq-item-title">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> What is MLibrarian?
                </h6>
                <p className="faq-item-content">
                  MLibrarian is a machine learning-based library system developed for BCAS students.
                  It provides an advanced search and recommendation engine to help students find relevant books and resources.
                </p>
              </MDBListGroupItem>

              <MDBListGroupItem className="faq-item">
                <h6 className="faq-item-title">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> How does MLibrarian work?
                </h6>
                <p className="faq-item-content">
                  MLibrarian utilizes machine learning algorithms to analyze user preferences and behavior,
                  recommending books and resources based on individual interests and past interactions with the system.
                  It also offers intelligent search capabilities to quickly find books based on various criteria.
                </p>
              </MDBListGroupItem>

              <MDBListGroupItem className="faq-item">
                <h6 className="faq-item-title">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> How can I access MLibrarian?
                </h6>
                <p className="faq-item-content">
                  MLibrarian can be accessed through the BCAS student portal or by logging into the MLibrarian website.
                  Students can log in using their BCAS credentials and start exploring the library's vast collection of books.
                </p>
              </MDBListGroupItem>

              <MDBListGroupItem className="faq-item">
                <h6 className="faq-item-title">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> How can I borrow books from MLibrarian?
                </h6>
                <p className="faq-item-content">
                  Borrowing books from MLibrarian is easy. Simply search for the book you want, check its availability,
                  and click on the "Borrow" button. You can then pick up the book from the designated library location.
                  Make sure to return the book within the specified due date to avoid any late fees.
                </p>
              </MDBListGroupItem>

              <MDBListGroupItem className="faq-item">
                <h6 className="faq-item-title">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> How does MLibrarian handle book recommendations?
                </h6>
                <p className="faq-item-content">
                  MLibrarian uses a collaborative filtering algorithm to generate personalized book recommendations.
                  It analyzes the reading history and preferences of other students with similar interests to suggest
                  books that you may find interesting. The more you interact with the system, the better the recommendations
                  become as it learns your preferences over time.
                </p>
              </MDBListGroupItem>

              <MDBListGroupItem className="faq-item">
                <h6 className="faq-item-title">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" /> Can I suggest books to be added to MLibrarian?
                </h6>
                <p className="faq-item-content">
                  Absolutely! We welcome book suggestions from BCAS students. If there's a specific book you would like to see
                  added to the MLibrarian collection, please contact us through the "Suggest a Book" feature on the website or portal.
                  Our team will review the suggestion and do their best to acquire the book for the library.
                </p>
              </MDBListGroupItem>
            </MDBListGroup>

            <p className="text-center mb-5" style={{ fontWeight: 'bold', color: '#fff' }}>
              If you have any further questions, please contact us using the "Contact Us" link provided below.
            </p>
          </section>
        </MDBContainer>
      </Fragment>
    );
  }
}

export default Faq;
