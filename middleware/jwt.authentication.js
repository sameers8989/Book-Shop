const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const cleanedToken = token.replace("Bearer ", "");
  console.log("Received token:", cleanedToken);

  jwt.verify(cleanedToken, "your-secret-key", (err, user) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(403).json({ error: "Forbidden" });
    }

    req.user = user;
    next();
  });
};
