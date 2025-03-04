import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStudent = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", address: "123 Main St, Springfield, IL", email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", address: "456 Elm St, Austin, TX", email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Brown", address: "789 Oak St, Seattle, WA", email: "charlie.brown@example.com" }
  ]);

  const [newStudent, setNewStudent] = useState({ id: "", name: "", address: "", email: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!newStudent.id) formErrors.id = "ID is required";
    if (!newStudent.name) formErrors.name = "Name is required";
    if (!newStudent.address) formErrors.address = "Address is required";
    if (!newStudent.email) {
      formErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newStudent.email)) {
      formErrors.email = "Invalid email address";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStudents([...students, newStudent]);
      setNewStudent({ id: "", name: "", address: "", email: "" });
      setErrors({});
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">ID</label>
            <input type="text" className="form-control" name="id" value={newStudent.id} onChange={handleChange} required />
            {errors.id && <small className="text-danger">{errors.id}</small>}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={newStudent.name} onChange={handleChange} required />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" name="address" value={newStudent.address} onChange={handleChange} required />
            {errors.address && <small className="text-danger">{errors.address}</small>}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={newStudent.email} onChange={handleChange} required />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary me-2">Add Student</button>
        <button type="button" className="btn btn-secondary" onClick={() => setNewStudent({ id: "", name: "", address: "", email: "" })}>Reset</button>
      </form>
      
      <h2 className="mb-4">Student List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddStudent;
