function EnrollmentRow({ enrollment, onEdit, onDelete }) {
  return (
    <tr>
      <td>{enrollment.student.studentName}</td>
      <td>{enrollment.course.courseName}</td>
      <td>{enrollment.status}</td>
      <td>
        {new Date(enrollment.enrollmentDate).toLocaleDateString()}
      </td>

      <td>
        <button onClick={() => onEdit(enrollment)}>
          Edit
        </button>

        {" "}

        <button onClick={() => onDelete(enrollment._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EnrollmentRow;
