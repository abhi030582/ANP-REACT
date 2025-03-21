import Book from '../models/BookModel1.js';
import APIFilter from '../utils/apiFilters.js';

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};

// Create a new book
export const createBook = async (req, res) => {
  try {
    console.log(req.body);
    const newBook = new Book(req.body);
    console.log(newBook);
   const result= await newBook.save();
   console.log(result);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: "Error creating book", error });
  }
};

// Update a book by ID
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: "Error updating book", error });
  }
};

// Delete a book by ID
export const deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};
  export const BookFilter = async (req, res) => 
    {
    const resPerPage = 4;
    const apiFilters = new APIFilter(Book, req.query).search().filters();
  
    let books = await apiFilters.query;
    let filteredBookCount = books.length;
  
    apiFilters.pagination(resPerPage);
    books = await apiFilters.query.clone();
  
    res.status(200).json({
      resPerPage,
      filteredBookCount,
      books,
    });
}

