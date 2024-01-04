const mongoose = require("mongoose");

const SignUpPostSchema = new mongoose.Schema(
  {
    user_Name: String,
    passWord: String,
  },
  { versionKey: false }
);

const SignUpPostModel = mongoose.model(
  "SignUpPostModel",
  SignUpPostSchema,
  "SignUp"
);

module.exports = SignUpPostModel;
