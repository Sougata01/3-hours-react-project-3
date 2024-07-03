import React, { useState } from 'react';
import StudentHeader from './component/StudentHeader';
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
      <StudentHeader onFormShow={showStudentFormHandler}/>
      {fromIsShown && <StudentForm onHideStudentForm={hideStudentFormHandler} />}
      <h2>All Students</h2>
      <StudentList onFormShow={showStudentFormHandler} />
    </StudentProvider>
  )
}

export default App;
