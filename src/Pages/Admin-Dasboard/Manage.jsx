import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Manage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const authorId = sessionStorage.getItem("authorId");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    axios
      .get("http://localhost:100/books/getbooks")
      .then((response) => {
        setTodos(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setIsLoading(false);
      });
  };

  const deleteBookData = (bookId) => {
    axios
      .delete(`http://localhost:100/books/deleteBook/${bookId}`)
      .then((response) => {
        console.log("Book deleted successfully:", response.data);
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo._id !== bookId)
        );
        if (response.data.data - 1) {
          getBooks();
        }
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const updateBooksData = (bookId) => {
    console.log(bookId);
    navigate(`../edit/${bookId}`);
  };

  var displayedIndex = 1;

  return (
    <div style={{ marginLeft: "12%" }}>
      <div className="container mt-4 ms-5">
        <h2>Manage Books</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No.</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit/Manage</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => {
              if (authorId === item.authorDetails) {
                const currentCount = displayedIndex;
                displayedIndex += 1;

                return (
                  <tr key={item._id}>
                    <td>{currentCount}</td>
                    <td>{item.bookTitle}</td>
                    <td>{item.authorName}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => updateBooksData(item._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-1"
                        onClick={() => deleteBookData(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
