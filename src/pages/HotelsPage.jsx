import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';
import Carousel from 'react-bootstrap/Carousel';
import imagefirst from '../asset/images/Slide1.jpeg';
import imagesecond from '../asset/images/Slide2.jpeg';
import imagethird from '../asset/images/Slide3.jpeg';
import '../asset/css/custom-styles.css';

function BookSearch({ searchBooks, query, setQuery, books }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter book title or keywords"
      />
      <button onClick={searchBooks}>Search</button>
    </div>
  );
}

function HotelsPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Menu />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imagefirst} alt="Slide1" style={{ height: '700px' }} />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Reading is the key that unlocks the doors of imagination, and the BCAS MLibrarian holds the treasure trove.</h3>
            <BookSearch
              searchBooks={searchBooks}
              query={query}
              setQuery={setQuery}
              books={books}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <header className="page-header">
        <h1>Welcome to Hotels Page</h1>
      </header>
      <Container>
        <Row>
          <div className="book-column">
            {books.map((book, index) => (
              <div className="book-card" key={book.id}>
                <img
                  src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <div className="book-details">
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                  <p>{book.volumeInfo.publishedDate}</p>
                </div>
                {(index + 1) % 5 === 0 && <div className="column-divider" />}
              </div>
            ))}
          </div>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default HotelsPage;
