import React, { useContext } from "react";
import StudentContext from "../store/student-context";

const StudentList = props => {
    const studentCtx = useContext(StudentContext)

    const studentRemoveHandler = (id) => {
        studentCtx.removeStudent(id)
    }
    
    const studentEditHandler = (student) => {
        studentCtx.editStudent(student)
        props.onFormShow()
    }
// console.log(studentCtx)
    return (
        < ul >
            {studentCtx.students.map((student) => (
                <li key={student.id}>
                    {student.name} {student.mobile} {student.address} 
                    <button onClick={studentRemoveHandler.bind(null, student.id)}>Delete</button>
                    <button onClick={studentEditHandler.bind(null, student)}>Edit</button>
                </li>)
            )}
        </ul >
    )
}

export default StudentList;