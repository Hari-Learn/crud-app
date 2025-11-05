import React from "react";

const UserList = ({ users,userDelete,userEdit}) => {
    const handleDelete = (id) => {
        console.warn("Delete --> "+id)
        userDelete(id)
    }

    const handleEdit = (id) => {
        console.warn("Edit --> "+id)
        userEdit(id)
    }

    return (
        <>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        {item.name} {' '}
                        {item.emailId} {' '}
                        <button onClick={()=>handleDelete(item.id)}>❌</button> {' '}
                        <button onClick={()=>handleEdit(item.id)}>✒️</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserList