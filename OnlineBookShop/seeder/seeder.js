import mongoose from "mongoose";
import books from "./data.js";
import BookModel from "../models/BookModel1.js";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookshop");

    await BookModel.deleteMany();
    console.log("Products are deleted");

    await BookModel.insertMany(books);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
