import React from "react";
import { useState } from "react";

const UserForm = ({addUser,editUserItem,updateUser}) => {

    const[users,setUsers] = useState({name:'',emailId:''})

    if(editUserItem && users.name === '' && users.emailId === ''){
        setUsers({name:editUserItem.name,emailId:editUserItem.emailId})
    }

     const handleFormuser = (event) => {
       event.preventDefault();   
       let obj = {name:users.name,emailId:users.emailId}
       if(editUserItem){
           updateUser({...users,id:editUserItem.id}) 
       }
       else if(users.name !== '' && users.emailId !== ''){
            addUser(obj)
       }
       else{
        console.warn("users input is empty")
       }
       
       setUsers({name:'',emailId:''})
  }
    return (
        <>
            <form onSubmit={handleFormuser}>
                <input type="text"
                    placeholder='Enter Name'
                    onChange={(event) => setUsers({ ...users, name: event.target.value })}
                    value={users.name}
                    required
                />
                <input type="email"
                    placeholder='Enter email'
                    onChange={(event) => setUsers({ ...users, emailId: event.target.value })}
                    value={users.emailId}
                    required
                />
                <button type='submit'>
                    {editUserItem ? 'Edit User ✒️' : 'Add User 🙍‍♂️'}
                </button>
            </form>

        </>
    )
}

export default UserForm