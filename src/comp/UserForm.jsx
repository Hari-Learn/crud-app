import React from "react";
import { useState } from "react";

const UserForm = ({addUser}) => {

    const[users,setUsers] = useState({name:'',emailId:''})

     const handleFormuser = (event) => {
       event.preventDefault();   
       let obj = {name:users.name,emailId:users.emailId}
       console.log(obj)       
       addUser(obj)
       setUsers({name:'',emailId:''})
  }
    return (
        <>
            <form onSubmit={handleFormuser}>
                <input type="text"
                    placeholder='Enter Name'
                    onChange={(event) => setUsers({ ...users, name: event.target.value })}
                    value={users.name}
                />
                <input type="email"
                    placeholder='Enter email'
                    onChange={(event) => setUsers({ ...users, emailId: event.target.value })}
                    value={users.emailId}
                />
                <button type='submit'>Add User 🙍‍♂️</button>
            </form>

        </>
    )
}

export default UserForm