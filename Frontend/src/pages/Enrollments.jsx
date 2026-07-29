import { useEffect, useState } from "react";

import EnrollmentForm from "../components/enrollments/EnrollmentForm";
import EnrollmentTable from "../components/enrollments/EnrollmentTable";

import {
  getEnrollments,
  createEnrollment,
  deleteEnrollment,
} from "../services/enrollmentService";

import { getStudents } from "../services/studentService";
import { getCourses } from "../services/courseService";
import Layout from "../components/layout/Layout";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editingEnrollment, setEditingEnrollment] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchEnrollments = async () => {
    try {
      const response = await getEnrollments();
      setEnrollments(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load enrollments.");
    }
  };

  const handleEdit = (enrollment) => {
    setEditingEnrollment(enrollment);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this enrollment?")) return;

    try {
      await deleteEnrollment(id);

      alert("Enrollment deleted successfully!");

      fetchEnrollments();
    } catch (error) {
      console.error(error);

      alert("Delete failed.");
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      await Promise.all([fetchEnrollments(), fetchStudents(), fetchCourses()]);

      setLoading(false);
    };

    loadData();
  }, []);

  const handleAddEnrollment = async (enrollmentData) => {
    try {
      await createEnrollment(enrollmentData);

      alert("Enrollment created successfully!");

      fetchEnrollments();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to create enrollment.");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Layout>
      <div className="container">
        <h2 className="page-title">Enrollment Management</h2>
        <div className="card">
          <EnrollmentForm
            students={students}
            courses={courses}
            onAddEnrollment={handleAddEnrollment}
            editingEnrollment={editingEnrollment}
            setEditingEnrollment={setEditingEnrollment}
            refreshEnrollments={fetchEnrollments}
          />
        </div>

        <hr />
        <div className="card">
          <EnrollmentTable
            enrollments={enrollments}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Enrollments;
