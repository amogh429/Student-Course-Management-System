function CourseRow({ course, onEdit, onDelete }) {
  return (
    <tr>
      <td>{course.courseName}</td>
      <td>{course.courseCode}</td>
      <td>{course.department}</td>
      <td>{course.semester}</td>
      <td>{course.credits}</td>

      <td>
        <div class="action-buttons">
          <button onClick={() => onEdit(course)} className="warning-btn">
            Edit
          </button>{" "}
          <button onClick={() => onDelete(course._id)} className="danger-btn">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CourseRow;
