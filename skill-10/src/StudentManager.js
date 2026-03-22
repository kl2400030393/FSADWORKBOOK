import React, { useState } from "react";
import "./StudentManager.css";

function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Venki", course: "React" },
    { id: 2, name: "Ravi", course: "Java" },
    { id: 3, name: "Anitha", course: "Python" }
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    });
  };

  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, newStudent]);

    setNewStudent({
      id: "",
      name: "",
      course: ""
    });
  };

  const deleteStudent = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <h2>Add Student</h2>

      <div className="form">
        <input
          type="number"
          name="id"
          placeholder="Enter ID"
          value={newStudent.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={newStudent.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={newStudent.course}
          onChange={handleChange}
        />

        <br />

        <button className="add-btn" onClick={addStudent}>
          Add Student
        </button>
      </div>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentManager;