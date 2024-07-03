import { useState } from "react";
import StudentContext from "./student-context";

const StudentProvider = (props) => {
    const [students, setStudents] = useState([])
    const [editedStudent, setEditedStudent] = useState(null)

    const addStudentHandler = (student) => {
        setStudents((prevStudents) => {
            return [...prevStudents, student]
        })
        setEditedStudent(null)
    }

    const removeStudentHandler = (id) => {
        setStudents((prevStudents) => {
            return prevStudents.filter((student) => student.id !== id)
        })
    }

    const editStudentHandler = (student) => {
        setEditedStudent(student)
    }

    const updateStudetnHandler = (student) => {
        setStudents((prevStudents) => {
            return prevStudents.map((prevStudent)=> prevStudent.id===student.id ? student : prevStudent)
        })
        setEditedStudent(null)
    }

    const resetEditedStudentHandler = () => {
        setEditedStudent(null)
    }

    const studentContext = {
        students: students,
        addStudent: addStudentHandler,
        removeStudent: removeStudentHandler,
        editedStudent: editedStudent,
        editStudent: editStudentHandler,
        updateStudent: updateStudetnHandler,
        resetEditedStudent: resetEditedStudentHandler
    }

    return (
        <StudentContext.Provider value={studentContext}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;