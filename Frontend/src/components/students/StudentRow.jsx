function StudentRow({ student, onEdit, onDelete }) {
  return (
    <tr>
      <td>{student.studentName}</td>
      <td>{student.studentId}</td>
      <td>{student.email}</td>
      <td>{student.department}</td>
      <td>{student.semester}</td>

      <td>
        <div className="action-button">
          <button onClick={() => onEdit(student)} className="warning-btn">
            Edit
          </button>{" "}
          <button onClick={() => onDelete(student._id)} className="danger-btn">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
