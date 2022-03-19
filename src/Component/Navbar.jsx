import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  <div className='navbar'>
      <div className='container'>
        <nav className='navbar__nav' >
          <h3 className='navbar__brand'>
            <Link to='/'>
              <i className='fa-solid  fa-video' ></i> TV SHOW SEARCH
            </Link>
          </h3>
          <ul className='nav__links'>
            <li className='nav__link'>
              <Link to='/' >Home</Link>
            </li>
            <li className='nav__link'>
              <Link to='/about-us' >About</Link>
            </li>
          </ul>
        </nav>
      </div>
  </div>
  )
}

export default Navbar
