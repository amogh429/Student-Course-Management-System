import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");

    alert("Logged out successfully");

    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      {token && (
        <>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/students">Students</Link> |{" "}
          <Link to="/courses">Courses</Link> |{" "}
          <Link to="/enrollments">Enrollments</Link> |{" "}
        </>
      )}
      {!token && (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
