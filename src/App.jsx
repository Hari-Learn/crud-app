import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './comp/UserList'
import UserForm from './comp/UserForm'

function App() {
  

  const [userList,setUserList] = useState(
    [
      {id:1,name:'ArjunDass',emailId:'arjun@gmail.com'},
      {id:2,name:'Bejoy',emailId:'bejoy@gmail.com'},
      {id:3,name:'ConstableNapolean',emailId:'constablenapeleon@gmail.com'},
      {id:4,name:'Dilli',emailId:'dilli@gmail.com'}
    ]
  )
  const handleAdduser = (obj) => {    
      const idObj = {...obj,id:userList.length+1}  
       setUserList([...userList,idObj])
  }

  const deleteUser =(id) => {
   setUserList(userList.filter(item => (item.id !== id)))
  }
  const [editUserItem,setEditUserItem] = useState(null)

  const editUser = (id) => {
   console.log("edit id --"+id)
   console.log(userList.find(item => (item.id === id)))
   setEditUserItem(userList.find(item => (item.id === id)))
  }

  const handleUpdateUser = (updateUser) => {
    setUserList(
      userList.map(item => (item.id == updateUser.id ? updateUser: item ))
    )
    setEditUserItem(null)
  }

  return (
    <>      
      <h1>CRUD - React App</h1>
  
      <UserForm 
        addUser={handleAdduser} 
        editUserItem={editUserItem} 
        updateUser={handleUpdateUser}>        
      </UserForm>
      
      <UserList 
        users={userList} 
        userDelete={deleteUser} 
        userEdit={editUser}> 
      </UserList>
      
    </>
  )
}

export default App
