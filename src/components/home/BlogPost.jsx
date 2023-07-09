import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../asset/css/custom-styles.css';

const MLibrarian = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {

    const mockSearchHistory = ['arts', 'game and animation', 'cooking', 'software', 'java'];

  
    setSearchHistory(mockSearchHistory);

 
    recommendBooks(mockSearchHistory);
  }, []);

  const recommendBooks = async (searchHistory) => {
    try {
      // G-Books API
      const apiKey = 'AIzaSyALejRE1KjemejVVPfqru9wrYSfX_EJUi0';
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchHistory.join('+')}&key=${apiKey}&maxResults=15`
      );

      console.log('API Response:', response.data); //
   
      const books = response.data.items || [];

      setRecommendedBooks(books);
    } catch (error) {
      console.error('Error fetching book recommendations:', error);
    }
  };

  const BookCard = ({ book }) => {
    return (
      <div className="book-card">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || ''}
          alt={book.volumeInfo.title || ''}
          className="book-image"
        />
        <p className="book-title">{book.volumeInfo.title || ''}</p>
      </div>
    );
  };

  const renderRecommendedBooks = () => {
    if (recommendedBooks.length === 0) {
      return <p>No recommended books found.</p>;
    }

    return (
      <div className="recommended-books-container">
        <h2 className="subtitle">Recommended Books:</h2>
        <div className="book-grid">
          {recommendedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mlibrarian-container">
      <h1 className="title">MLibrarian</h1>
      <div className="content-container">
        <div className="search-history-container">
          <h2 className="subtitle">Search History:</h2>
          <ul className="search-history">
            {searchHistory.map((query, index) => (
              <li key={index}>{query}</li>
            ))}
          </ul>
        </div>
        {renderRecommendedBooks()}
      </div>
    </div>
  );
};

export default MLibrarian;
