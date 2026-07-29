function EnrollmentRow({ enrollment }) {
  return (
    <tr>
      <td>{enrollment.student.studentName}</td>
      <td>{enrollment.course.courseName}</td>
      <td>{enrollment.status}</td>
      <td>
        {new Date(enrollment.enrollmentDate).toLocaleDateString()}
      </td>
    </tr>
  );
}

export default EnrollmentRow;
