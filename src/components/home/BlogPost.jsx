import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MLibrarian = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    // Simulated search history data
    const mockSearchHistory = ['machine learning','game and animation','cooking',];

    // Update the search history state
    setSearchHistory(mockSearchHistory);

    // Call the recommendation algorithm
    recommendBooks(mockSearchHistory);
  }, []);

  const recommendBooks = async (searchHistory) => {
    try {
      // Get book recommendations from the Google Books API
      const apiKey = 'AIzaSyAXhwkDUZukuYDhEfXNWjBsOPIipX2zDOI';
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchHistory.join(
          '+'
        )}&key=${apiKey}&maxResults=10`
      );

      console.log('API Response:', response.data); // Log the API response

      // Extract the book items from the response data
      const books = response.data.items || [];

      // Update the recommended books state
      setRecommendedBooks(books);
    } catch (error) {
      console.error('Error fetching book recommendations:', error);
    }
  };

  return (
    <div>
      <h1>MLibrarian</h1>
      <h2>Search History:</h2>
      <ul>
        {searchHistory.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
      <h2>Recommended Books:</h2>
      <div>
        {recommendedBooks.map((book) => (
          <div key={book.id}>
            <img
              src={book.volumeInfo.imageLinks.thumbnail || ''}
              alt={book.volumeInfo.title || ''}
            />
            <p>{book.volumeInfo.title || ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MLibrarian;
