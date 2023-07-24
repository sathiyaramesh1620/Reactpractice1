import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark '>
            <Link to="#">React useRef Example</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link to="/useRef" className='nav-link'> useRefEx</Link></li>
                    <li className=' nav-list'> <Link to="/signup" className='nav-link'>SignUP</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar