import React from 'react'
import { NavLink } from 'react-router-dom'

function Links() {

    const links = [
        {url: '/search', text:'🔎 All'},
        {url: '/news', text:'📰 News'},
        {url: '/images', text:'📸 Images'},
        {url: '/videos', text:'📺 Videos'}
    ]
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map((link,index)=>(
           <NavLink 
            to={link.url} 
            key={index} 
            className={({isActive}) => isActive ? "text-blue-700yb border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0" : "m-2 mb-0"}
           >
            {link.text}
           </NavLink>
        ))}
    </div>
  )
}

export default Links