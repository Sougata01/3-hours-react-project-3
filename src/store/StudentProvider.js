import { useState, useContext } from "react";
import StudentContext from "./student-context";

const StudentProvider = (props) => {
    const [students, setStudents] = useState([])

    const addStudentHandler = (item) => {
        setStudents((prevStudents) => {
            return [...prevStudents, item]
        })
    }

    const editStudentHandler = (id) => {
    }
    
    const removeStudentHandler = (id) => {
    }


    const studentContext = {
        students: students,
        addStudent: addStudentHandler,
        editStudent: editStudentHandler,
        removeStudent: removeStudentHandler
    }
    return (
        <StudentContext.Provider value={studentContext}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;