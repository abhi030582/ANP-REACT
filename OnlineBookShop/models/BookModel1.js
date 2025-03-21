import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

export default mongoose.model("Book", bookSchema);
