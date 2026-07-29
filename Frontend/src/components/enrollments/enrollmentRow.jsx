function EnrollmentRow({ enrollment, onEdit, onDelete }) {
  return (
    <tr>
      <td>{enrollment.student.studentName}</td>
      <td>{enrollment.course.courseName}</td>
      <td>{enrollment.status}</td>
      <td>{new Date(enrollment.enrollmentDate).toLocaleDateString()}</td>

      <td>
        <div className="action-buttons">
          <button onClick={() => onEdit(enrollment)} className="warning-btn">
            Edit
          </button>{" "}
          <button
            onClick={() => onDelete(enrollment._id)}
            className="danger-btn"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default EnrollmentRow;
