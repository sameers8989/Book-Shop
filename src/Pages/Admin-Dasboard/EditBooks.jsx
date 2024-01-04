import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";

const authorId = sessionStorage.getItem("authorId");

const initBookDetail = {
  authorDetails: authorId,
  bookTitle: "",
  authorName: "",
  imageURL: "",
  category: "",
  price: "",
  bookDiscription: "",
  bookPdfURl: "",
};

const EditBooks = () => {
  const { bookId } = useParams();
  const [formdata, setSelectedBook] = useImmer(initBookDetail);

  useEffect(() => {
    axios
      .get(`http://localhost:100/books/getbookbyid/${bookId}`)
      .then((response) => {
        setSelectedBook((draft) => {
          return { ...draft, ...response.data.data };
        });
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [bookId, setSelectedBook]);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setSelectedBook((draft) => {
      return { ...draft, [name]: value };
    });
  };

  const updateBooksData = async () => {
    try {
      alert("hai");
      console.log("formdata before update:", formdata);
      const response = await axios.put(
        `http://localhost:100/books/updatebooks/${bookId}`,
        formdata
      );

      console.log("Book updated successfully:", response.data);
    } catch (error) {
      alert("error");
      console.error("Error updating book:", error);
    }
  };

  // Log the bookId separately
  console.log("BookId:", bookId);

  return (
    <div style={{ marginLeft: "15%" }}>
      <div className="w-100 ms-5">
        <div className="d-flex flex-column gap-3 p-4">
          <div className="fs-2 fw-bolder">Update A Book!!</div>
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
            <button className="btn btn-primary" onClick={updateBooksData}>
              Update Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooks;
