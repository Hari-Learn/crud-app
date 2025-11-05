import React from "react";

const UserList = ({ users,userDelete}) => {
    const handleDelete = (id) => {
        console.warn("--> "+id)
        userDelete(id)
    }
    return (
        <>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        {item.name} {item.emailId} <button onClick={()=>handleDelete(item.id)}>❌</button> <button>✒️</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserList