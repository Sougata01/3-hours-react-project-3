import React from "react";

const StudentContext = React.createContext({
    students: [],
    addStudent: (item) => {},
    editStudent: (id) => {},
    removeStudent: (id) => {}
})

export default StudentContext;