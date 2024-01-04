import axios from "axios";
import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { useParams, useNavigate } from "react-router-dom";

const initBookDetail = {
  authorDetails: "",
  bookTitle: "",
  authorName: "",
  imageURL: "",
  category: "",
  price: "",
  bookDiscription: "",
  bookPdfURl: "",
};

const Upload = () => {
  const navigate = useNavigate();
  const authorId = sessionStorage.getItem("authorId");

  const [formdata, setSelectedBook] = useImmer({
    ...initBookDetail,
    authorDetails: authorId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setSelectedBook((draft) => {
      draft[name] = value;
      return draft;
    });
  };

  const saveBookData = async () => {
    try {
      if (authorId === null || undefined) {
        alert("Please login or Register");
      } else if (
        formdata.category &&
        formdata.authorName &&
        formdata.bookDiscription &&
        formdata.bookPdfURl &&
        formdata.imageURL &&
        formdata.price &&
        formdata.bookTitle !== ""
      ) {
        await axios.post("http://localhost:100/books/postbooks", formdata);
        alert("Please Login Or Register");
        console.log("Data saved Successfully");
        alert("Data Uploaded Successfully");
      } else {
        alert("All field are Required");
      }
    } catch (error) {
      console.log("All fields are required");
      console.log("Error:", error);
    }
  };

  return (
    <div className="w-100" style={{ marginLeft: "15%" }}>
      <div className="d-flex flex-column gap-3 p-4">
        <div className="fs-2 fw-bolder">Upload A Book!!</div>
        <div class="row g-3">
          <div class="col-5 d-flex flex-column gap-1">
            <label>Book Title</label>
            <input
              type="text"
              name="bookTitle"
              class="form-control"
              placeholder="Book Title"
              aria-label="First name"
              value={formdata.bookTitle}
              onChange={handleInputChange}
            />
          </div>
          <div class="col-5 d-flex flex-column gap-1">
            <label>Author Name</label>
            <input
              type="text"
              name="authorName"
              class="form-control"
              placeholder="Author Name"
              aria-label="Last name"
              value={formdata.authorName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div class="row g-3">
          <div class="col-5 d-flex flex-column gap-1">
            <label>Book Image URL</label>
            <input
              type="text"
              name="imageURL"
              class="form-control"
              placeholder="Image URL"
              aria-label="First name"
              value={formdata.imageURL}
              onChange={handleInputChange}
            />
          </div>
          <div class="col-5 d-flex flex-column gap-1">
            <label>Book Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="category"
              value={formdata.category}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
            </select>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-5 d-flex flex-column gap-1">
            <label>Book PDF Link</label>
            <input
              type="text"
              name="bookPdfURl"
              class="form-control"
              placeholder="Paste Book PDF URL here"
              aria-label="First name"
              value={formdata.bookPdfURl}
              onChange={handleInputChange}
            />
          </div>
          <div class="col-5 d-flex flex-column gap-1">
            <label>Price</label>
            <input
              type="number"
              name="price"
              class="form-control"
              placeholder="Enter Book Price"
              aria-label="First name"
              value={formdata.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div class="row g-3">
          <div class="col-10 d-flex flex-column gap-1">
            <label>Book Description</label>
            <textarea
              type="text"
              name="bookDiscription"
              class="form-control"
              placeholder="Book Description"
              aria-label="First name"
              value={formdata.bookDiscription}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary" onClick={saveBookData}>
            Upload Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
