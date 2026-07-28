function StudentRow({ student }) {
    return (
        <tr>
            <td>{student.studentName}</td>
            <td>{student.studentId}</td>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>{student.semester}</td>
        </tr>
    );
}

export default StudentRow;
