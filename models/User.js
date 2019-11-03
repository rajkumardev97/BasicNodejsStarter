const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  website: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: "inventoryuser"
  },
  resettoken: {
    type: String,
    required: false
  }
});

module.exports = User = mongoose.model("users", UserSchema);
