import React, { useState, useEffect } from 'react';
import UserInput from './component/User/UserInput';
import UserData from './component/User/UserData';
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  const [overallRatings, setOverallRatings] = useState([0, 0, 0, 0, 0])

  const addUserHandler = (uname, urating) => {
    setOverallRatings((prevOverallRatings) => {
          if (urating == 1) {
            prevOverallRatings[0]++
          }
          else if (urating == 2) {
            prevOverallRatings[1]++
          }
          else if (urating == 3) {
            prevOverallRatings[2]++
          }
          else if (urating == 4) {
            prevOverallRatings[3]++
          }
          else {
            prevOverallRatings[4]++
          }
      return prevOverallRatings
    })
    console.log(urating)
    setUsers((prevUsers) => {
      return [...prevUsers, { name: uname, rating: urating, id: Math.random().toString() }]
    })
  }

  const deleteHandler = (index) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((prevUser) => {
        return prevUsers.indexOf(prevUser) !== index
      })
    })
    setOverallRatings((prevOverallRatings) => {
      if (users[index].rating == 1) {
        prevOverallRatings[0]--
      }
      else if (users[index].rating  == 2) {
        prevOverallRatings[1]--
      }
      else if (users[index].rating  == 3) {
        prevOverallRatings[2]--
      }
      else if (users[index].rating  == 4) {
        prevOverallRatings[3]--
      }
      else {
        prevOverallRatings[4]--
      }
  return prevOverallRatings
})
  }

  const editHandler = (index) => {

  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginBottom: "1px" }}>Feedback System</h1>
      <h2>Overall Ratings</h2>
      <p>* {overallRatings[0]}</p>
      <p>** {overallRatings[1]}</p>
      <p>*** {overallRatings[2]}</p>
      <p>**** {overallRatings[3]}</p>
      <p>***** {overallRatings[4]}</p>
      <br></br>
      <br></br>
      <h2>Feedback Form</h2>
      <UserInput onAddUser={addUserHandler} />
      <br></br>
      <br></br>
      <h2>All Feedbacks</h2>
      <UserData users={users} onDelete={deleteHandler} onEdit={editHandler} />
    </React.Fragment>
  )
}

export default App;
