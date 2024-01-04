const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    authorDetails: {
      ref: "SignUpPostModel",
      type: mongoose.Schema.Types.ObjectId,
    },
    bookTitle: String,
    authorName: String,
    imageURL: String,
    category: String,
    bookDiscription: String,
    price: String,
    bookPdfURl: String,
  },
  { versionKey: false }
);

const BooksModel = mongoose.model("BooksModel", BookSchema, "Books");

module.exports = BooksModel;
