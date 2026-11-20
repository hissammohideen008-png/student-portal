import { useState } from "react";
import "./Studentform.css";

function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "name") setName(value);
  if (name === "age") setAge(value);
  if (name === "department") setDepartment(value);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Student Details\nName: ${name}\nAge: ${age}\nDepartment: ${department}`
    );

    setName("");
    setAge("");
    setDepartment("");
  };

  return (
    <div className="student-page">

      <div className="buttons">
        <button>Attendance</button>
        <button>Marks</button>
        <button>Results</button>
      </div>

      <div className="profile-card">
        <h3>Student Profile</h3>
        <p>Name: harun</p>
        <p>Email: harun@example.com</p>
        <p>Department: Information Technology</p>
      </div>

      <div className="student-cards">

        <div className="student-card">
          <h3>Jaffar Anwas A</h3>
          <p>Artificial Intelligence</p>
          <p>Information Technology</p>
          <p>jaffar@example.com</p>
        </div>

        <div className="student-card">
          <h3>uvais J</h3>
          <p>Web Development</p>
          <p>Information Technology</p>
          <p>uvais@example.com</p>
        </div>

        <div className="student-card">
          <h3>Fahad</h3>
          <p>Database Management</p>
          <p>Information Technology</p>
          <p>fahad@example.com</p>
        </div>

      </div>

      <div className="form-card">

        <h2>Student Form</h2>

        <form onSubmit={handleSubmit}>

          <input
  type="text"
  name="name"
  placeholder="Enter Name"
  value={name}
  onChange={handleChange}
  required
/>

<input
  type="number"
  name="age"
  placeholder="Enter Age"
  value={age}
  onChange={handleChange}
  required
/>

<input
  type="text"
  name="department"
  placeholder="Department"
  value={department}
  onChange={handleChange}
  required
/>

          <button type="submit">Send</button>

        </form>

      </div>

    </div>
  );
}

export default StudentForm;