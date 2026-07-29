import { useEffect, useState } from "react";
import { updateEnrollment } from "../../services/enrollmentService";

function EnrollmentForm({
  students,
  courses,
  onAddEnrollment,
  editingEnrollment,
  setEditingEnrollment,
  refreshEnrollments,
}) {
  const [formData, setFormData] = useState({
    student: "",
    course: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingEnrollment) {
      setFormData({
        student: editingEnrollment.student._id,
        course: editingEnrollment.course._id,
        status: editingEnrollment.status,
      });
    }
  }, [editingEnrollment]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      student: "",
      course: "",
      status: "Active",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingEnrollment) {
        await updateEnrollment(
          editingEnrollment._id,
          formData
        );

        alert("Enrollment updated successfully!");

        setEditingEnrollment(null);

        refreshEnrollments();
      } else {
        await onAddEnrollment(formData);
      }

      resetForm();
    } catch (error) {
      console.error(error);

      alert("Operation failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {editingEnrollment
          ? "Update Enrollment"
          : "Create Enrollment"}
      </h3>

      <select
        name="student"
        value={formData.student}
        onChange={handleChange}
      >
        <option value="">Select Student</option>

        {students.map((student) => (
          <option
            key={student._id}
            value={student._id}
          >
            {student.studentName}
          </option>
        ))}
      </select>

      <br /><br />

      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
      >
        <option value="">Select Course</option>

        {courses.map((course) => (
          <option
            key={course._id}
            value={course._id}
          >
            {course.courseName}
          </option>
        ))}
      </select>

      <br /><br />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
        <option value="Dropped">Dropped</option>
      </select>

      <br /><br />

      <button type="submit">
        {editingEnrollment
          ? "Update Enrollment"
          : "Create Enrollment"}
      </button>
    </form>
  );
}

export default EnrollmentForm;
