const mongoose = require("mongoose");

function db() {
  mongoose
    .connect(
      "mongodb+srv://ecommerce:ecommerce@cluster0.becp0tw.mongodb.net/ecommerce?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
}

module.exports = db;
