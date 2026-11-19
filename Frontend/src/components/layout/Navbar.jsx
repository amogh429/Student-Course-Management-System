import { Link, useNavigate } from "react-router-dom";

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
};

function Navbar() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

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
            <h2 style={{ margin: 0 }}>
                🎓 Student Course Management
            </h2>

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

                {user?.role === "Admin" && (
                    <>
                        <Link to="/students" style={linkStyle}>
                            Students
                        </Link>

                        <Link to="/enrollments" style={linkStyle}>
                            Enrollments
                        </Link>
                    </>
                )}

                <Link to="/courses" style={linkStyle}>
                    Courses
                </Link>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
