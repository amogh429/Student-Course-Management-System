import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>🎓 Student Course Management</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link to="/students" style={linkStyle}>
          Students
        </Link>

        <Link to="/courses" style={linkStyle}>
          Courses
        </Link>

        <Link to="/enrollments" style={linkStyle}>
          Enrollments
        </Link>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;
