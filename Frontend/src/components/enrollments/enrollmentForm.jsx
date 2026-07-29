import { useState } from "react";

function EnrollmentForm({
  students,
  courses,
  onAddEnrollment,
}) {
  const [formData, setFormData] = useState({
    student: "",
    course: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.student || !formData.course) {
      alert("Please select a student and course.");
      return;
    }

    await onAddEnrollment(formData);

    setFormData({
      student: "",
      course: "",
      status: "Active",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Enrollment</h3>

      <div>
        <label>Student</label>
        <br />

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
      </div>

      <br />

      <div>
        <label>Course</label>
        <br />

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
      </div>

      <br />

      <div>
        <label>Status</label>
        <br />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Dropped">Dropped</option>
        </select>
      </div>

      <br />

      <button type="submit">
        Create Enrollment
      </button>
    </form>
  );
}

export default EnrollmentForm;
