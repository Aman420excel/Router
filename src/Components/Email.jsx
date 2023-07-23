
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate,useParams } from 'react-router-dom'
const Email = () => {

  const navigate = useNavigate();
  const {param} = useParams();
  return (
    <div>
      <h1>AmanJain@420@gmail.com</h1>
      <button onClick={()=>{navigate("/")}}>GO Home</button>
      <br/>
      {["india","pakistan","australia"].map((k)=>{
        return <button key={k}>{k}</button> 
      })}
      <h1>Showing Param {param}</h1>

      <Outlet></Outlet>
    </div>
  )
}

export default Email
