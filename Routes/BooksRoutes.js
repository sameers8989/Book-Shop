const express = require("express");
const router = express.Router();
const BookController = require("../Controller/BookController");
const authenticateToken = require("../middleware/jwt.authentication");

router.post("/postbooks", BookController.postNewBooks);
router.get("/getbooks", BookController.getBookDetails);
router.get("/getbookbyid/:_id", BookController.getBookId);
router.delete("/deleteBook/:_id", BookController.deleteAddedBooks);
router.put("/updatebooks/:_id", BookController.updateAddedBooks);

module.exports = router;
