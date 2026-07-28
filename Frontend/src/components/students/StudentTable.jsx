import StudentRow from "./StudentRow";

function StudentTable({ students }) {
    return (
        <table border="1" cellPadding="10">

            <thead>

                <tr>
                    <th>Name</th>
                    <th>Student ID</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Semester</th>
                </tr>

            </thead>

            <tbody>

                {students.map(student => (

                    <StudentRow
                        key={student._id}
                        student={student}
                    />

                ))}

            </tbody>

        </table>
    );
}

export default StudentTable;
