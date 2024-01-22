const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    res.status(400).send({ message: "unotharized access" });
  }
  try {
    const decode = jwt.verify(token, process.env.SECREAT_KEY);
    req.userId = decode.userId;

    next();
  } catch (e) {
    res.status(500).send({ message: " Something Went Wrong" });
  }
};

module.exports = verifyToken;
