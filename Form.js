const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'Categorize', 'Cloze', 'Comprehension'
  questionText: { type: String, required: true },
  options: [String],
  correctAnswers: [String],
  passage: String,
  image: String,
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  headerImage: String,
  questions: [QuestionSchema],
});

module.exports = mongoose.model("Form", FormSchema);
