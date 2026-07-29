import EnrollmentRow from "./EnrollmentRow";

function EnrollmentTable({
  enrollments,
  onEdit,
  onDelete,
}) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Student</th>
          <th>Course</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {enrollments.map((enrollment) => (
          <EnrollmentRow
            key={enrollment._id}
            enrollment={enrollment}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EnrollmentTable;
