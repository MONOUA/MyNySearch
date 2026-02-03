import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'

function Navbar({darkTheme,setDarkTheme}) {
  return (
    <div>
        <NavLink to='/'>
            MyNySEARCH
        </NavLink>
        <button onClick={()=>setDarkTheme(!darkTheme)}>
            {darkTheme? '💡': '🌑'}
        </button>
    </div>
  )
}

export default Navbar