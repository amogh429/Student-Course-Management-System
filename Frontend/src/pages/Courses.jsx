import { useEffect, useState } from "react";
import CourseForm from "../components/courses/CourseForm";
import CourseTable from "../components/courses/CourseTable";

import {
  getCourses,
  createCourse,
  deleteCourse,
} from "../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async (courseData) => {
    try {
      await createCourse(courseData);

      alert("Course added successfully!");

      fetchCourses();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed");
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await deleteCourse(id);

      alert("Course deleted successfully!");

      fetchCourses();
    } catch (error) {
      console.error(error);
      alert("Delete failed.");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Course Management</h2>

      <CourseForm
        onAddCourse={handleAddCourse}
        editingCourse={editingCourse}
        setEditingCourse={setEditingCourse}
        refreshCourses={fetchCourses}
      />

      <hr />

      <CourseTable
        courses={courses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Courses;
