import React, { useState, useContext, useEffect } from "react";
import StudentContext from "../store/student-context";
import Modal from "../UI/Modal";

const StudentForm = (props) => {
    const studentCtx = useContext(StudentContext)

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

    useEffect(() => {
        if (studentCtx.editedStudent) {
            setName(studentCtx.editedStudent.name)
            setMobile(studentCtx.editedStudent.mobile)
            setAddress(studentCtx.editedStudent.address)
        }
    }, [studentCtx.editedStudent])

    const submitHandler = (event) => {
        event.preventDefault()
        if (studentCtx.editedStudent) {
            studentCtx.updateStudent({ id: studentCtx.editedStudent.id, name, mobile, address })
            console.log({ id: studentCtx.editedStudent.id, name, mobile, address })
        } else {
            studentCtx.addStudent({ id: Math.random().toString(), name, mobile, address })
        }
        props.onHideStudentForm()
    }

    const closeHandler = () => {
        studentCtx.resetEditedStudent()
        props.onHideStudentForm()
    }

    return (
        <Modal onClose={closeHandler} onCancelEdit={studentCtx.setIsEditing}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={nameChangeHandler} required />
                <br />
                <label htmlFor="mobile">Mobile: </label>
                <input type="number" id="mobile" value={mobile} onChange={mobileChangeHandler} required />
                <br />
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" value={address} onChange={addressChangeHandler} required />
                <br />
                <button type="submit">Add</button>
                <button onClick={closeHandler}>Close</button>
            </form>
        </Modal>
    )
}

export default StudentForm;