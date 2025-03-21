import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [books, setBooks] = useState([]);
  const [bookForm, setBookForm] = useState({ bookId: "", name: "", author: "", price: "", description: "" });
  const [editingBookId, setEditingBookId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleChange = (e) => {
    setBookForm({ ...bookForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!bookForm.bookId || !bookForm.name || !bookForm.author || !bookForm.price || !bookForm.description) {
      alert("All fields are required!");
      return;
    }

    try {
      if (editingBookId) {
        await axios.put(`http://localhost:4000/api/v1/books/${editingBookId}`, bookForm);
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === editingBookId ? { ...book, ...bookForm } : book
          )
        );
        alert("Book updated successfully!");
      } else {
        const res = await axios.post("http://localhost:4000/api/v1/books", bookForm);
        setBooks([...books, res.data]);
        alert("Book added successfully!");
      }
      
      setBookForm({ bookId: "", name: "", author: "", price: "", description: "" });
      setEditingBookId(null);
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleEdit = (book) => {
    setBookForm({ bookId: book.bookId, name: book.name, author: book.author, price: book.price, description: book.description });
    setEditingBookId(book._id);
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/books/${_id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== _id));
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">📚 Book Dashboard</h2>
        <button className="btn btn-danger px-4" onClick={handleLogout}>🚪 Logout</button>
      </div>
      
      <h4 className="text-center text-secondary mb-4">Total Books: {books.length}</h4>

      <div className="card shadow-sm p-4 mb-4 border-0 rounded-3 bg-white">
        <h3 className="text-center text-danger mb-3 fw-bold">{editingBookId ? "Edit Book" : "Add New Book"}</h3>
        <form className="row g-3">
          {Object.keys(bookForm).map((key) => (
            <div className={key === "description" ? "col-12" : "col-md-6"} key={key}>
              <label className="form-label fw-bold text-danger">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              {key === "description" ? (
                <textarea name={key} className="form-control border-secondary" placeholder={`Enter ${key}`} value={bookForm[key]} onChange={handleChange}></textarea>
              ) : (
                <input type={key === "price" ? "number" : "text"} name={key} className="form-control border-secondary" placeholder={`Enter ${key}`} value={bookForm[key]} onChange={handleChange} />
              )}
            </div>
          ))}
          <div className="col-12 text-center">
            <button type="button" className="btn btn-danger w-50 shadow" onClick={handleSubmit}>
              {editingBookId ? "Update Book" : "Add Book"}
            </button>
          </div>
        </form>
      </div>

      <div className="card p-4 shadow-sm border-0 bg-white">
        <table className="table table-striped text-center">
          <thead className="bg-orange text-white">
            <tr>
              <th className="px-3 py-2">📖 Book ID</th>
              <th className="px-3 py-2">📖 Name</th>
              <th className="px-3 py-2">✍️ Author</th>
              <th className="px-3 py-2">💲 Price</th>
              <th className="px-3 py-2">📝 Description</th>
              <th className="px-3 py-2">⚙️ Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.bookId}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>${book.price}</td>
                <td>{book.description}</td>
                <td className="d-flex justify-content-center">
                  <button className="btn btn-warning text-white me-2" onClick={() => handleEdit(book)}>✏️ Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
