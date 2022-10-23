const jwt = require("jsonwebtoken");
const { jwtSecrete } = require("../config");

function auth(req, res, next) {
  const token = req.header("Authorization");
  try {
    const payload = jwt.verify(token, jwtSecrete);
    req.user = payload;
  } catch (e) {
    console.log(e);
    return res.send("Unauthorized");
  }
  next();
}

module.exports = {
  auth,
};
