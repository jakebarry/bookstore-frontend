import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
      <ul className='flex text-[8px] sm:text-xs gap-2 sm:gap-6 mt-2'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
        <li><Link to={"/categories"}>Categories</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;