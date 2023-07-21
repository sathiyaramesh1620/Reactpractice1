import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg '>
        <Link to="/" classnName="navbar-brand">Hooks Example</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='navbar-list'>
                    <Link to="/hooksEX" className='nav-link'>HooksEx</Link>
                </li>
                <li className='nav-list'><Link to="/counter" className='nav-link'> Counter</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar