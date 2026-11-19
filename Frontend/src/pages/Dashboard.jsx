import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getStudents, getMyStudent } from "../services/studentService";
import { getCourses } from "../services/courseService";
import {
  getEnrollments,
  getMyEnrollments,
} from "../services/enrollmentService";

import Layout from "../components/layout/Layout";
import socket from "../socket";

function Dashboard() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const isAdmin = user?.role === "Admin";
  const isStudent = user?.role === "Student";

  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    enrollments: 0,
  });

  const [student, setStudent] = useState(null);
  const [myEnrollments, setMyEnrollments] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const coursesRes = await getCourses();

      if (isAdmin) {
        const [studentsRes, enrollmentsRes] = await Promise.all([
          getStudents(),
          getEnrollments(),
        ]);

        setStats({
          students: studentsRes.data.count,
          courses: coursesRes.data.count,
          enrollments: enrollmentsRes.data.count,
        });
      }

      if (isStudent) {
        const [studentRes, enrollmentsRes] = await Promise.all([
          getMyStudent(),
          getMyEnrollments(),
        ]);

        setStudent(studentRes.data.data);
        setMyEnrollments(enrollmentsRes.data.data);

        setStats({
          students: 1,
          courses: coursesRes.data.count,
          enrollments: enrollmentsRes.data.count,
        });
      }
    } catch (error) {
      console.error("Dashboard Error:", error);

      const message =
        error.response?.data?.message ||
        "Failed to load dashboard.";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <Layout>
      <div
        style={{
          padding: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Student Course Management Dashboard
        </h1>

        {/* ========================= */}
        {/* ADMIN DASHBOARD */}
        {/* ========================= */}

        {isAdmin && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minWidth: "250px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h2>👨‍🎓 Students</h2>
                <h1>{stats.students}</h1>
              </div>

              <div
                style={{
                  flex: 1,
                  minWidth: "250px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h2>📚 Courses</h2>
                <h1>{stats.courses}</h1>
              </div>

              <div
                style={{
                  flex: 1,
                  minWidth: "250px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h2>📝 Enrollments</h2>
                <h1>{stats.enrollments}</h1>
              </div>
            </div>

            <hr style={{ margin: "40px 0" }} />

            <h2>Quick Navigation</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link to="/students">
                <button>Manage Students</button>
              </Link>

              <Link to="/courses">
                <button>Manage Courses</button>
              </Link>

              <Link to="/enrollments">
                <button>Manage Enrollments</button>
              </Link>
            </div>

            <hr style={{ margin: "40px 0" }} />

            <h2>System Summary</h2>

            <table
              border="1"
              cellPadding="10"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Total Records</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Students</td>
                  <td>{stats.students}</td>
                </tr>

                <tr>
                  <td>Courses</td>
                  <td>{stats.courses}</td>
                </tr>

                <tr>
                  <td>Enrollments</td>
                  <td>{stats.enrollments}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {/* ========================= */}
        {/* STUDENT DASHBOARD */}
        {/* ========================= */}

        {isStudent && (
          <>
            <div style={{ marginTop: "40px" }}>
              <h2>My Profile</h2>

              {student && (
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    marginTop: "20px",
                  }}
                >
                  <p>
                    <strong>Name:</strong>{" "}
                    {student.studentName}
                  </p>

                  <p>
                    <strong>Student ID:</strong>{" "}
                    {student.studentId}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {student.email}
                  </p>

                  <p>
                    <strong>Department:</strong>{" "}
                    {student.department}
                  </p>

                  <p>
                    <strong>Semester:</strong>{" "}
                    {student.semester}
                  </p>
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minWidth: "250px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h2>📚 Available Courses</h2>
                <h1>{stats.courses}</h1>
              </div>

              <div
                style={{
                  flex: 1,
                  minWidth: "250px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h2>📝 My Enrollments</h2>
                <h1>{stats.enrollments}</h1>
              </div>
            </div>

            <hr style={{ margin: "40px 0" }} />

            <h2>My Courses</h2>

            {myEnrollments.length === 0 ? (
              <p>You are not enrolled in any courses.</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                {myEnrollments.map((enrollment) => (
                  <div
                    key={enrollment._id}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <h3>
                      {enrollment.course?.courseName}
                    </h3>

                    <p>
                      <strong>Course Code:</strong>{" "}
                      {enrollment.course?.courseCode}
                    </p>

                    <p>
                      <strong>Department:</strong>{" "}
                      {enrollment.course?.department}
                    </p>

                    <p>
                      <strong>Semester:</strong>{" "}
                      {enrollment.course?.semester}
                    </p>

                    <p>
                      <strong>Credits:</strong>{" "}
                      {enrollment.course?.credits}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      {enrollment.status}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <hr style={{ margin: "40px 0" }} />

            <h2>Quick Navigation</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link to="/courses">
                <button>View Courses</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
