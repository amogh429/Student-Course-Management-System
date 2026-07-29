import { useEffect, useState } from "react";
import StudentForm from "../components/students/StudentForm";
import StudentTable from "../components/students/StudentTable";
import {
  getStudents,
  createStudent,
  deleteStudent,
} from "../services/studentService";
import Layout from "../components/layout/Layout";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("Failed to load students.");
    } finally {
      setLoading(false);
    }
  };

  // Load students when page opens
  useEffect(() => {
    fetchStudents();
  }, []);

  // Add a new student
  const handleAddStudent = async (studentData) => {
    try {
      await createStudent(studentData);

      alert("Student added successfully!");

      fetchStudents();
    } catch (error) {
      console.error("Error creating student:", error);

      alert(error.response?.data?.message || "Failed to add student.");
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      alert("Student deleted successfully!");

      fetchStudents();
    } catch (error) {
      console.error(error);

      alert("Failed to delete student.");
    }
  };

  if (loading) {
    return <h2>Loading students...</h2>;
  }

  return (
    <Layout>
      <div className="container">
        <h2 className="page-title">Student Management</h2>
        <div className="card">
          <StudentForm
            onAddStudent={handleAddStudent}
            editingStudent={editingStudent}
            setEditingStudent={setEditingStudent}
            refreshStudents={fetchStudents}
          />
        </div>

        <hr />
        <div className="card">
          <StudentTable
            students={students}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Students;
