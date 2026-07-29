import EnrollmentRow from "./EnrollmentRow";

function EnrollmentTable({ enrollments }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Student</th>
          <th>Course</th>
          <th>Status</th>
          <th>Enrollment Date</th>
        </tr>
      </thead>

      <tbody>
        {enrollments.map((enrollment) => (
          <EnrollmentRow
            key={enrollment._id}
            enrollment={enrollment}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EnrollmentTable;
