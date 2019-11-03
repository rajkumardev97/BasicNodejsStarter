const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SystemDataSchema = new Schema({
  companylogo: {
    type: String,
    required: true
  }
});

module.exports = SystemData = mongoose.model("systemdata", SystemDataSchema);
