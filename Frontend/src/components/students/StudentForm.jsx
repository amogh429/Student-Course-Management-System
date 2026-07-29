import { useState, useEffect } from "react";
import { updateStudent } from "../../services/studentService";
function StudentForm({
  onAddStudent,
  editingStudent,
  setEditingStudent,
  refreshStudents,
}) {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    email: "",
    department: "",
    semester: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        studentName: editingStudent.studentName,
        studentId: editingStudent.studentId,
        email: editingStudent.email,
        department: editingStudent.department,
        semester: editingStudent.semester,
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingStudent) {
        await updateStudent(editingStudent._id, formData);

        alert("Student updated successfully!");

        setEditingStudent(null);

        refreshStudents();
      } else {
        await onAddStudent(formData);
      }

      setFormData({
        studentName: "",
        studentId: "",
        email: "",
        department: "",
        semester: "",
      });
    } catch (error) {
      console.error(error);
      alert("Operation failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>

      <input
        name="studentName"
        placeholder="Student Name"
        value={formData.studentName}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="studentId"
        placeholder="Student ID"
        value={formData.studentId}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="semester"
        placeholder="Semester"
        value={formData.semester}
        onChange={handleChange}
      />

      <br />
      <br />

      <button type="submit" className="warning-btn">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;
