import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <nav className="nav-tag">
          <ul className="nav-items">
            <div>
              <NavLink to="/"> Home </NavLink>
            </div>
            <div>
              <NavLink to="/about"> About </NavLink>
            </div>
            <div>
              <NavLink to="/contact"> Contact </NavLink>
            </div>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>

  )
}

export default Nav

