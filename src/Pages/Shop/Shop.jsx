import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Shop.css";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const authorId = sessionStorage.getItem("authorId");
  useEffect(() => {
    axios
      .get("http://localhost:100/books/getbooks")
      .then((response) => {
        setBooks(response.data.data);
        console.log(books);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const moreInfo = (bookId) => {
    navigate(`/moredetails/${bookId}`);
  };
  return (
    <div className="book-list-container">
      {books.length > 0 ? (
        books.map((book) =>
          book.authorDetails !== authorId ? (
            <div key={book.id} className="book-item">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="book-image"
              />
              <div className="book-details">
                <h3 className="book-title">{book.bookTitle}</h3>
                <p className="author-name">{book.authorName}</p>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => moreInfo(book._id)}
                >
                  More Info
                </button>
              </div>
            </div>
          ) : null
        )
      ) : (
        <p className="no-books-message">No books available</p>
      )}
    </div>
  );
};

export default Shop;
