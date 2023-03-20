const express = require("express");
const db = require("./Config/db.js");
const app = express();
const User = require("./models/schema.js");
const jwt = require("jsonwebtoken");
const tokencheck = require("./middelware/tokencheck.js");
app.use(express.json());
db();
var abc = jwt.sign({ pass: "aklogic" }, "hi");
console.log(abc);

app.post("/", function (req, res) {
  let { name, email } = req.body;
  let user = new User({
    name: name,
    email: email,
  });
  user.save();
  var token = jwt.sign({ token: user.email }, "helloworld");
  console.log(token);
  res.json(user);
});

app.post("/verify", async function (req, res) {
  let token = req.headers.authorization;
  var decoded = jwt.verify(token, "helloworld");
  console.log(decoded.token);
  let updateverify = await User.findOneAndUpdate(
    { email: decoded.token },
    { verify: true },
    { new: true }
  );
  res.json(updateverify);
});

app.get("/user", tokencheck, async function (req, res) {
  let user = await User.find({});
  res.json(user);
});

app.listen(8000);
