import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const students = [
  { id: 1, name: "Alice Johnson", address: "123 Main St, Springfield, IL", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", address: "456 Elm St, Austin, TX", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Brown", address: "789 Oak St, Seattle, WA", email: "charlie.brown@example.com" },
  { id: 4, name: "Charlie Brown", address: "789 Oak St, Seattle, WA", email: "charlie.brown@example.com" },
  { id: 5, name: "Charlie Brown", address: "789 Oak St, Seattle, WA", email: "charlie.brown@example.com" }
];

const StudentList = () => {
  return (
    <div className="container mt-4">
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

export default StudentList;
