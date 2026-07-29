import CourseRow from "./CourseRow";

function CourseTable({ courses, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Department</th>
          <th>Semester</th>
          <th>Credits</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((course) => (
          <CourseRow
            key={course._id}
            course={course}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
export default CourseTable;
