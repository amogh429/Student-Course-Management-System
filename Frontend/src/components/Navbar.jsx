import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/students">Students</Link> |{" "}
      <Link to="/courses">Courses</Link> |{" "}
      <Link to="/enrollments">Enrollments</Link> |{" "}
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
