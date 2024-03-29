import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="/" className="navbar-brand">message with redux</Link>
      <div className='ml-auto'>
        <ul className='navbar nav'>
          <li className='nav-list'><Link to ="/user" className="nav-link">User</Link></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar