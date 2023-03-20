const jwt = require("jsonwebtoken");

function tokencheck(req, res, next) {
  let token = req.headers.authorization;
  console.log(req.headers.authorization);

  jwt.verify(token, "hi", function (err, decode) {
    if (err) {
      return res.send("data nay");
    }
    next();
  });
}

module.exports = tokencheck;
