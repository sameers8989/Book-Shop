import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const authorId = sessionStorage.getItem("authorId");
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getBook();
  }, [bookId]);

  const getBook = () => {
    axios
      .get(`http://localhost:100/books/getbookbyid/${bookId}`)
      .then((response) => {
        setBook(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const backToShopPage = () => {
    navigate("/shop");
  };
  return (
    <div className="container mt-5">
      {book ? (
        <div>
          <h2 className="mb-4">{book.bookTitle}</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src={book.imageURL}
                alt={book.bookTitle}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <p className="lead">Author: {book.authorName}</p>
              <p className="lead">Category: {book.category}</p>
              <p className="lead">Price: ${book.price}</p>
              <p>{book.description}</p>
              <button className="btn btn-primary" onClick={backToShopPage}>
                Back to Shop page
              </button>
              {/* Add more details based on your book object structure */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
