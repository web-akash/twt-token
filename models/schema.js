const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  verify: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
