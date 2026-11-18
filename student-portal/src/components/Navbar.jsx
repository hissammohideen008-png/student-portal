import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Portal</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/exams">Exams</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </nav>
  );
}

export default Navbar;
