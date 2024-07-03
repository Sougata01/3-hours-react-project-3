import React, {useContext} from "react";
import StudentContext from "../store/student-context";

const StudentHeader = props => {
const studentCtx = useContext(StudentContext)

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Student Manager</h1>
            <p>All students: {studentCtx.students.length}</p>
            <button onClick={props.onFormShow}>ADD NEW STUDENT</button>
        </div>
    )
}

export default StudentHeader;