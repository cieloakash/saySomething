const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  answer: { type: String },
});

const Questions = mongoose.model("question", questionSchema);

module.exports = Questions;
