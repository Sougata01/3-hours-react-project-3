import React, { useState, useEffect } from 'react';
import UserInput from './component/User/UserInput';
import UserData from './component/User/UserData';
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  const [overallRatings, setOverallRatings] = useState([0, 0, 0, 0, 0])
  const [editedUser, setEditedUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addUserHandler = (uname, urating) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: uname, rating: urating, id: Math.random().toString() }]
    })
  }

  const updateUserHandler = (uname, urating, id) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        return (user.id === id ? { name: uname, rating: urating, id: id } : user)
      })
    })
    setIsEditing(false)
    setEditedUser(null)
  }

  const deleteHandler = (index) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((prevUser) => {
        return prevUsers.indexOf(prevUser) !== index
      })
    })
  }

  const editHandler = (index) => {
    setEditedUser(users[index])
    setIsEditing(true)
  }

  useEffect(() => {
    setOverallRatings(() => {
      const newOverAllRatings = [0, 0, 0, 0, 0]
      users.forEach((user) => {
        if (user.rating === "1") {
          newOverAllRatings[0]++
        }
        else if (user.rating === "2") {
          newOverAllRatings[1]++
        }
        else if (user.rating === "3") {
          newOverAllRatings[2]++
        }
        else if (user.rating === "4") {
          newOverAllRatings[3]++
        }
        else {
          newOverAllRatings[4]++
        }
      })
      return newOverAllRatings
    })
  }, [users])

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
      <UserInput onAddUser={addUserHandler} onUpdateUser={updateUserHandler} editedUser={editedUser} isEditing={isEditing} />
      <br></br>
      <br></br>
      <h2>All Feedbacks</h2>
      <UserData users={users} onDelete={deleteHandler} onEdit={editHandler} />
    </React.Fragment>
  )
}

export default App;
