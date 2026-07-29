function StudentRow({ student, onEdit }) {
  return (
    <tr>
      <td>{student.studentName}</td>
      <td>{student.studentId}</td>
      <td>{student.email}</td>
      <td>{student.department}</td>
      <td>{student.semester}</td>

      <td>
        <button onClick={() => onEdit(student)}>
          Edit
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
