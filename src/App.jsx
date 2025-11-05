import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[users,setUsers] = useState({name:'',emailId:''})

  const [userList,setUserList] = useState(
    [
      {id:1,name:'ArjunDass',emailId:'arjun@gmail.com'},
      {id:1,name:'Bejoy',emailId:'bejoy@gmail.com'},
      {id:1,name:'ConstableNapolean',emailId:'constablenapeleon@gmail.com'},
      {id:1,name:'Dilli',emailId:'dilli@gmail.com'}
    ]
  )

  return (
    <>      
      <h1>CRUD - React App</h1>
      <ul>
      {userList.map((item,index)=>(
          <li key={item.id}>
            {item.name} {item.emailId} <button>❌</button> <button>✒️</button>
          </li>
      ))}
      </ul>
    </>
  )
}

export default App
