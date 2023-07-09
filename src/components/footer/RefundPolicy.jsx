import React from 'react';
import '../../asset/css/custom-styles.css';

const BookReturn = () => {
  return (
    <div className="book-return-container">
      <h1 className="book-return-heading">Book Return</h1>
      <div className="book-return-content">
        <p>
          As a student using the MLibrarian system, it's important to follow the proper book return process
          once you have finished using a borrowed book. By returning books on time, you help ensure fair access
          for other students and maintain a well-functioning library system.
        </p>

        <h2>Book Return Process</h2>
        <p>
          To return a book, please follow these steps:
        </p>
        <ol>
          <li>Check the due date of the book you borrowed.</li>
          <li>Gather all the books you need to return.</li>
          <li>Visit the library or designated book return area on your campus.</li>
          <li>Present your student ID card to the library staff.</li>
          <li>Hand over the books to the staff for check-in.</li>
          <li>Wait for confirmation that the books have been successfully returned.</li>
          <li>Make sure to collect any receipts or return confirmations provided by the library.</li>
        </ol>

        <h2>Book Return Guidelines</h2>
        <p>
          Please keep the following guidelines in mind while returning books:
        </p>
        <ul>
          <li>Ensure that the books are in good condition, free from excessive damage or markings.</li>
          <li>Remove any bookmarks or personal items from the books.</li>
          <li>Return all accompanying materials, such as CDs or DVDs, if applicable.</li>
          <li>Be mindful of returning books on or before the due date to avoid late fees or penalties.</li>
        </ul>

        <p>
          If you have any questions or encounter any issues during the book return process, don't hesitate
          to reach out to the library staff for assistance. Your cooperation is greatly appreciated in
          maintaining a well-managed library system.
        </p>
      </div>
    </div>
  );
};

export default BookReturn;
