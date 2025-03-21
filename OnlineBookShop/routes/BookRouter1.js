import express from 'express';
import { getAllBooks,createBook,deleteBookById,BookFilter,getBookById,updateBook } from '../controllers/BookController1.js';

const router = express.Router();

// Use book routes
router.route('/books').get(getAllBooks);
router.route('/books').post(createBook);
router.route('/books/:id').get(getBookById);
router.route('/books/:id').put(updateBook);
router.route('/books/:id').delete(deleteBookById);
router.route('/filter/books/').get(BookFilter);


export default router;

