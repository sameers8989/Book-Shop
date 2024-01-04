const SignUpPostModel = require("../Models/SignupPost");
const jwt = require("jsonwebtoken");

exports.postSignUpData = async (req, res) => {
  try {
    const newData = new SignUpPostModel({
      user_Name: req.body.user_Name,
      passWord: req.body.passWord,
    });

    await newData.save();
    res.status(201).json({ message: "Data Added Successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.login = async (req, res) => {
  try {
    const { user_Name, passWord } = req.body;
    const user = await SignUpPostModel.findOne({ user_Name, passWord });

    if (!user || !user._id) {
      res.status(500).json({ message: "Invalid User" });
    }

    const token = jwt.sign(
      { userId: user._id, user_Name: user.user_Name },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );
    const decodedPayload = jwt.decode(token);
    console.log("decode", decodedPayload);
    res.status(201).json({ decodedPayload, token });
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
