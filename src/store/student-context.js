import React from "react";

const StudentContext = React.createContext({
    students: [],
    addStudent: (student) => {},
    removeStudent: (id) => {},
    editedStudent: null,
    editStudent: (student) => {},
    updateStudent: (student) => {},
    resetEditedStudent: () => {}
})

export default StudentContext;