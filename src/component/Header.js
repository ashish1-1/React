import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
      <header>
            <nav>
                <ul>
                    <li>
                        {/* <Link to="/">Home</Link> */}
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        {/* <Link to="/about">About</Link> */}
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        {/* <Link to="/contact">Contact</Link> */}
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default Header
