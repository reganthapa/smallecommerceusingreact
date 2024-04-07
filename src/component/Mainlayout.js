import React from 'react'
import { NavLink } from 'react-router-dom'

export const Mainlayout = ({children}) => {
  return (
    <>
    
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
  </div>
</nav>



<div className='container-fluid'>
    <div className='row'>
        <div className='col-md-3'>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"  bis_skin_checked="1">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" aria-current="page">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="nav-link link-body-emphasis">
          Cart
        </NavLink>
      </li>
      
    </ul>
    <hr/>
    
  </div>
        </div>
        <div className='col-md-9'>{children}</div>
    </div>
</div>

    
    </>
  )
}