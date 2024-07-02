import React, { useState } from 'react';
import StudentForm from './component/StudentForm';
import StudentList from './component/StudentList';
import StudentProvider from './store/StudentProvider';
import './App.css';

function App() {
  const [fromIsShown, setFormIsShown] = useState(false)

  const showStudentFormHandler = () => {
    setFormIsShown(true)
  }
  const hideStudentFormHandler = () => {
    setFormIsShown(false)
  }

  return (
    <StudentProvider>
      <div className='student-body'>
        <h1>Student Manager</h1>
        <p>All students: 0</p>
        <button onClick={showStudentFormHandler}>ADD NEW STUDENT</button>
        {fromIsShown && <StudentForm onHideStudentForm={hideStudentFormHandler} />}
      </div>
      <h2>All Students</h2>
      <StudentList />
    </StudentProvider>
  )
}

export default App;
