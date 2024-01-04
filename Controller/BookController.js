const BooksModel = require("../Models/Books");
const SignedUser = require("../Models/SignupPost");

exports.postNewBooks = async (req, res) => {
  try {
    const {
      authorDetails,
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDiscription,
      price,
      bookPdfURl,
    } = req.body;

    console.log("Request body:", req.body);
    const newBook = new BooksModel(req?.body);
    const savedBookDetails = await newBook.save();
    console.log("savedBookDetails", savedBookDetails);
    res
      .status(201)
      .json({ message: "Book Posted Successfully", savedBookDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Invalid Data" });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const data = await BooksModel.find();
    res.status(200).json({ data, message: "Data Found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Found" });
  }
};

exports.getBookId = async (req, res) => {
  try {
    const id = req.params._id;
    const book = await BooksModel.findById(id);
    if (!book) {
      res.status(404).json({ message: "No Book Data Found in this Id" });
    }
    res.status(200).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAddedBooks = async (req, res) => {
  try {
    const id = req.params._id;
    const deleteData = await BooksModel.findByIdAndDelete(id);
    if (!deleteData) {
      return res.status(404).json({ message: "No data found in this id" });
    }
    res.status(200).json({ message: "Data deleted Succesfully" });
  } catch (error) {
    console.log("Error:", error);
  }
};

exports.updateAddedBooks = async (req, res) => {
  try {
    const id = req.params._id;
    const updateData = await BooksModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateData) {
      res.status(404).json({ message: "No data found in this id" });
    }
    res.status(200).json({ message: "Data Updated Succesfully" });
  } catch (error) {
    console.log("Error:", error);
  }
};
