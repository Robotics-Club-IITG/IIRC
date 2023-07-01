import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar({ bgColor, color }) {
  return (
    <nav className='navbar w-full flex px-10 py-10 justify-between items-center' style={{ backgroundColor: bgColor, color: color }}>
      <img className='w-[95px] h-[32px] object-contain' src={require("../assets/logo.png")} alt="logo" />
      <ul className="list-none flex flex-1 px-[15%] justify-around  items-center">
        <li>
          <Link to='/events'>EVENTS</Link>
        </li>
        <li>
          <Link to='/leaderboard'>LEADERBOARD</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar