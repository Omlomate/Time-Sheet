const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, "your_jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Invalid token." });
    }

    req.employee = decoded;
    next();
  });
};

module.exports = authenticateToken;
