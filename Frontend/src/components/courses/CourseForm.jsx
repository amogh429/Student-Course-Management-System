import { useState, useEffect } from "react";
import { updateCourse } from "../../services/courseService";

function CourseForm({
  onAddCourse,
  editingCourse,
  setEditingCourse,
  refreshCourses,
}) {
  const [formData, setFormData] = useState({
    courseName: "",
    courseCode: "",
    department: "",
    semester: "",
    credits: "",
    description: "",
  });

  useEffect(() => {
    if (editingCourse) {
      setFormData({
        courseName: editingCourse.courseName,
        courseCode: editingCourse.courseCode,
        department: editingCourse.department,
        semester: editingCourse.semester,
        credits: editingCourse.credits,
        description: editingCourse.description,
      });
    }
  }, [editingCourse]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingCourse) {
        await updateCourse(editingCourse._id, formData);

        alert("Course updated successfully!");

        setEditingCourse(null);

        refreshCourses();
      } else {
        await onAddCourse(formData);
      }

      setFormData({
        courseName: "",
        courseCode: "",
        department: "",
        semester: "",
        credits: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Operation failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {editingCourse ? "Update Course" : "Add Course"}
      </h3>

      <input
        name="courseName"
        placeholder="Course Name"
        value={formData.courseName}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="courseCode"
        placeholder="Course Code"
        value={formData.courseCode}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="semester"
        placeholder="Semester"
        value={formData.semester}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="credits"
        placeholder="Credits"
        value={formData.credits}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        {editingCourse ? "Update Course" : "Add Course"}
      </button>
    </form>
  );
}

export default CourseForm;
