import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getStudents } from "../services/studentService";
import { getCourses } from "../services/courseService";
import { getEnrollments } from "../services/enrollmentService";
import Layout from "../components/layout/Layout";
import socket from "../socket";
function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    enrollments: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const [studentsRes, coursesRes, enrollmentsRes] = await Promise.all([
        getStudents(),
        getCourses(),
        getEnrollments(),
      ]);

      setStats({
        students: studentsRes.data.count,
        courses: coursesRes.data.count,
        enrollments: enrollmentsRes.data.count,
      });
    } catch (error) {
      console.error("Dashboard Error:", error);
      alert("Failed to load dashboard.");
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
      </div>
    </Layout>
  );
}

export default Dashboard;
