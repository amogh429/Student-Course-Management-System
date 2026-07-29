function StudentRow({ student, onEdit, onDelete }) {
  return (
    <tr>
      <td>{student.studentName}</td>
      <td>{student.studentId}</td>
      <td>{student.email}</td>
      <td>{student.department}</td>
      <td>{student.semester}</td>

      <td>
        <button onClick={() => onEdit(student)}>Edit</button>{" "}
        <button onClick={() => onDelete(student._id)}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentRow;
