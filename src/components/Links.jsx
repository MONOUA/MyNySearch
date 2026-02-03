import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function Links() {

    const links = [
        {url: './search', text:'Recherche'},
        {url: './news', text:'News'},
        {url: './images', text:'Images'},
        {url: './videos', text:'Videos'}
    ]
  return (
    <div>
        {links.map((link,index)=>(
           <NavLink to={link.url} key={index}>{link.text}</NavLink>
        ))}
    <Outlet />
    </div>
  )
}

export default Links