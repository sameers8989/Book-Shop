import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Books = () => {
  const [getbooks, setGetBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:100/books/getbooks");
        console.log(response.data);
        setGetBooks(response.data); // Assuming response.data is an array of books
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(getbooks); // Handle the response data as needed

  return (
    <div>
      <div className="d-flex justify-content-center mt-3 fs-2 fw-bolder">
        Best Seller Books
      </div>
    </div>
  );
};

export default Books;
