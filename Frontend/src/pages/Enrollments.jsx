import { useEffect, useState } from "react";

import EnrollmentForm from "../components/enrollments/EnrollmentForm";
import EnrollmentTable from "../components/enrollments/EnrollmentTable";

import {
  getEnrollments,
  createEnrollment,
} from "../services/enrollmentService";

import { getStudents } from "../services/studentService";
import { getCourses } from "../services/courseService";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

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

      await Promise.all([
        fetchEnrollments(),
        fetchStudents(),
        fetchCourses(),
      ]);

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

      alert(
        error.response?.data?.message ||
          "Failed to create enrollment."
      );
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Enrollment Management</h2>

      <EnrollmentForm
        students={students}
        courses={courses}
        onAddEnrollment={handleAddEnrollment}
      />

      <hr />

      <EnrollmentTable
        enrollments={enrollments}
      />
    </div>
  );
}

export default Enrollments;
