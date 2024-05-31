import React, { useState, useEffect } from "react";

const UserInput = (props) => {

    const [name, setName] = useState("")
    const [rating, setRating] = useState("1")

    const submitHandler = (event) => {
        event.preventDefault()
        if(props.isEditing){
            props.onUpdateUser(name, rating, props.editedUser.id)
        } else {
            props.onAddUser(name, rating)
        }
        setName("")
        setRating("1")
    }

    // this was the trickiest part. dependecies array runs at first while rendering it checks if the isediting is true. and if it changes only then change the state of name and rating
    useEffect(() => {
        if (props.isEditing) {
            setName(props.editedUser.name)
            setRating(props.editedUser.rating)
        }
    }, [props.isEditing])

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const ratingChangeHandler = (event) => {
        setRating(event.target.value)
    }

    console.log(name, rating)
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name" >Enter Your Name: </label>
            <input type="text" id="name" value={name} onChange={nameChangeHandler} />
            <label htmlFor="rating" > Choose Rating: </label>
            <select onChange={ratingChangeHandler} value={rating}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default UserInput