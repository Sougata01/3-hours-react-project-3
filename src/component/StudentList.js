import React, { useContext } from "react";
import StudentContext from "../store/student-context";

const StudentList = porps => {
    const studentCtx = useContext(StudentContext)

    const cartItemRemoveHandler = (id) => {
    }
    const cartItemEditHandler = (id) => {
    }

    return (
        < ul >
            {studentCtx.students.map((item) => (
                <li key={item.id}>
                    {item.name} {item.mobile} {item.address} 
                    <button onClick={cartItemRemoveHandler.bind(null, item.id)}>Delete</button>
                    <button onClick={cartItemEditHandler.bind(null, item.id)}>Edit</button>
                </li>)
            )}
        </ul >
    )
}

export default StudentList;