
import { useState } from 'react';
import './App.css';

function App(props) {
  const {coworkers} = props
  // Todo : create a simple status displayer
  // OnClick toggle employee status
  // Online or offline , default : "Online"
  // Add your code here
  // Shoulld return JSX
  const initalStatus = coworkers.map((value)=>{
    value["id"] = value.first_name + value.last_name 
     value["status"] = true
     return value
  })
  const [status,setStatus] = useState(initalStatus)

  
  const handleChange = (id)=>{
  const newStatus =  status.map((value)=>{
     if(value.id === id){
      return {...value, status: !value.status}
     }
     console.log(value)
     return value
   })
   setStatus(newStatus)
    console.log(newStatus)
  }

  return (
    <div>
      {status.map((value,index)=>{
        return <div key={index} onClick={()=>handleChange(value.id)}>{value.first_name} <span>{ value.status ? "Online" : "Offline"}</span></div>
      })}
    </div>
  );
}

App.defaultProps = {
  coworkers : [
    {first_name :'Naruto',last_name:'Uzmaki'},
    {first_name:'Sasuke',last_name:'Uchiha'},
    {first_name:'Sakura',last_name:'Haruno'}
  ]
}

export default App;
