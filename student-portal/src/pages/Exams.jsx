function Exams() {
  return (
    <div className="container">
      <h1>Exam Registration</h1>
      <p>Register for your upcoming semester examinations.</p>

      <div className="card">
        <h3>Semester Examination</h3>
        <p>Department: Information Technology</p>
        <p>Semester: 5</p>
        <p>Status: Registration Open</p>

        <button>Register Now</button>
      </div>

      <div className="card">
        <h3>Internal Examination</h3>
        <p>Department: Information Technology</p>
        <p>Status: Upcoming</p>

        <button>View Details</button>
      </div>
    </div>
  );
}

export default Exams;