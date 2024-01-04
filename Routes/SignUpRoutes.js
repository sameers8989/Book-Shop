const express = require("express");
const router = express.Router();
const SignUpController = require("../Controller/SignUpController");
const authenticateToken = require("../middleware/jwt.authentication");

router.post("/postsignupdata", SignUpController.postSignUpData);
router.post("/login", SignUpController.login);
router.get("/protected", authenticateToken, (req, res) => {
  const userId = req.user.userId;
  res.json({ message: "Protected route accessed successfully", userId });
});

module.exports = router;
