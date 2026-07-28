import { useState } from "react";

function StudentForm({ onAddStudent }) {

    const [formData, setFormData] = useState({
        studentName: "",
        studentId: "",
        email: "",
        department: "",
        semester: ""
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onAddStudent(formData);

        setFormData({
            studentName: "",
            studentId: "",
            email: "",
            department: "",
            semester: ""
        });

    };

    return (

        <form onSubmit={handleSubmit}>

            <h3>Add Student</h3>

            <input
                name="studentName"
                placeholder="Student Name"
                value={formData.studentName}
                onChange={handleChange}
            />

            <br /><br />

            <input
                name="studentId"
                placeholder="Student ID"
                value={formData.studentId}
                onChange={handleChange}
            />

            <br /><br />

            <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <br /><br />

            <input
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
            />

            <br /><br />

            <input
                name="semester"
                placeholder="Semester"
                value={formData.semester}
                onChange={handleChange}
            />

            <br /><br />

            <button type="submit">

                Add Student

            </button>

        </form>

    );

}

export default StudentForm;
