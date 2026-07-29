function CourseRow({ course, onEdit, onDelete }) {
  return (
    <tr>
      <td>{course.courseName}</td>
      <td>{course.courseCode}</td>
      <td>{course.department}</td>
      <td>{course.semester}</td>
      <td>{course.credits}</td>

      <td>
        <button onClick={() => onEdit(course)}>
          Edit
        </button>

        {" "}

        <button onClick={() => onDelete(course._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CourseRow;
