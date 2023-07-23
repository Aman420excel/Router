import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
       <h1>About Running</h1>
       <NavLink to="email">Email</NavLink>
      <br></br>
      <Outlet></Outlet>
    </div>
  )
}

export default About