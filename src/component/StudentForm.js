import React, { useState , useContext } from "react";
import StudentContext from "../store/student-context";
import Modal from "../UI/Modal";

const StudentForm = (props) => {
    const studentctx = useContext(StudentContext)

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const mobileChangeHandler = (event) => {
        setMobile(event.target.value)
    }
    const addressChangeHandler = (event) => {
        setAddress(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        studentctx.addStudent({id: Math.random().toString(), name, mobile, address})
        props.onHideStudentForm()
    }

    console.log(studentctx)

    return (
        <Modal onHideStudentForm={props.onHideStudentForm}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={nameChangeHandler} />
                <br />
                <label htmlFor="mobile">Mobile: </label>
                <input type="number" id="mobile" value={mobile} onChange={mobileChangeHandler} />
                <br />
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" value={address} onChange={addressChangeHandler} />
                <br />
                <button type="submit">Add</button>
                <button>Close</button>
            </form>
        </Modal>
    )
}

export default StudentForm;