import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Alert, Container } from "react-bootstrap";

const index = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  // Fetch all reviews from API
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/reviews");
      setReviews(response.data);
    } catch (error) {
      setError("Failed to load reviews.");
    }
  };

  // Delete Review
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      setError("Failed to delete review.");
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/home";
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center w-100 px-5 mb-4">
        <h2 className="text-danger fw-bold text-shadow">📚 Review Dashboard</h2>
        <Button variant="danger" className="px-4 py-2 fw-bold red-button" onClick={handleLogout}>
          Logout 🚪
        </Button>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}

      {/* Review Table */}
      <div className="w-100 px-5">
        <Table striped bordered hover responsive className="table-light w-100">
          <thead className="table-danger">
            <tr>
              <th>ID</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review._id}>
                  <td className="text-muted">{review._id}</td>
                  <td className="fw-bold text-warning">{review.rating} ⭐</td>
                  <td>{review.comment}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      className="fw-bold transition-button red-button"
                      onClick={() => handleDelete(review._id)}
                    >
                      ❌ Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-secondary fw-bold py-3">
                  No reviews available 😞
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Custom CSS for Red Buttons & Animations */}
      <style jsx="true">{`
        .text-shadow {
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .red-button {
          background-color: #dc3545 !important;
          border-color: #dc3545 !important;
          transition: all 0.3s ease-in-out;
        }
        .red-button:hover {
          background-color: #c82333 !important;
          border-color: #bd2130 !important;
        }
      `}</style>
    </Container>
  );
};

export default index;
