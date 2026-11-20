import { useParams } from "react-router-dom";

const students = {
  haaland: {
    name: "Haaland",
    department: "IT",
    year: "3rd Year",
    college: "Mohamed Sathak A.J. College of Engineering",
    status: "Active Student",
  },
  ayesha: {
    name: "Ayesha",
    department: "CSE",
    year: "3rd Year",
    college: "Mohamed Sathak A.J. College of Engineering",
    status: "Active Student",
  },
  rifana: {
    name: "Rifana",
    department: "IT",
    year: "3rd Year",
    college: "Mohamed Sathak A.J. College of Engineering",
    status: "Active Student",
  },
};

function Profile() {
  const { studentId } = useParams();
  const student = students[studentId?.toLowerCase()];

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="container">
      <h1>Student Profile</h1>

      <div className="card">
        <h2>{student.name}</h2>
        <p>Department: {student.department}</p>
        <p>Year: {student.year}</p>
        <p>College: {student.college}</p>
        <p>Status: {student.status}</p>
      </div>
    </div>
  );
}

export default Profile;