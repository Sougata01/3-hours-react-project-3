import React from "react";

const UserData = (props) => {

    return (
        <ul style={{ listStyleType: "none" }}>
            {props.users.map((user, index) => {
                return (<li key={user.id}>{user.name} {user.rating} {user.address}
                    <button onClick={()=>props.onDelete(index)}>Delete</button>
                    <button onClick={()=>props.onEdit(index)}>Edit</button>
                </li>)
            })}
        </ul>
    )
}

export default UserData